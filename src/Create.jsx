import React, { useState } from "react";
import { addUser } from "./features/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name: name, email: email })
    );

    navigate("/");
  };

  return (
    <>
      <p className="display-4 text-center text-capitalize mb-4">
        Crud App using redux
      </p>
      <div className="container mb-2">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="border bg-light shadow p-5 rounded">
              <h3 className="text-center text-dark">Add New User</h3>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control border border-primary"
                    placeholder="enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <br />
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill fs-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
