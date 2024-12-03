import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteUser } from "./features/counter/userSlice";
const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div className="container">
      <p className="display-2 text-center text-capitalize">
        Crud App using redux
      </p>

      <div className="d-flex justify-content-start mb-3">
        <Link to="/create">
          <button className="btn btn-success my-3 rounded-pill btn-lg">
            <span className="fs-4 fw-bold text-start"> + </span>
          </button>
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem, index) => (
              <tr key={index}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>
                  <Link to={`/edit/${elem.id}`}>
                    <button className="btn btn-sm btn-primary me-2">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(elem.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
