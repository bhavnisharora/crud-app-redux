import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "./features/counter/userSlice";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const users = useSelector((state) => state.users);
  console.log(users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <p className="display-4 text-center text-capitalize mb-4">
        Crud App using redux
      </p>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="border bg-lightborder-primary shadow p-5">
              <h3 className="text-dark text-center">Update User</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control border border-primary"
                    value={uname}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter name"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={uemail}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter email"
                  />
                </div>

                <br />
                <button className="btn btn-primary rounded-pill w-100 fs-5">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Update;
