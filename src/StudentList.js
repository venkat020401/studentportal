import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentList({ isVisible }) {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  let handleDelete = async (id) => {
    try {
      const confirmdata = window.confirm(`Are you sure want to delete`);
      if (confirmdata) {
        await axios.delete(
          `https://63a149e3e3113e5a5c514a70.mockapi.io/studentdetails/${id}`
        );
        getUsers();
      }
    } catch (error) {}
  };

  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://63a149e3e3113e5a5c514a70.mockapi.io/studentdetails"
      );
      setUserList(users.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Students List</h1>
          {isVisible ? (
            <Link
              to={"/portal/create-user"}
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i class="fas fa-download fa-sm text-white-50"></i> Create Student
            </Link>
          ) : null}
        </div>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Students Details</h6>
          </div>
          <div class="card-body">
            {isLoading ? (
              <>
                <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
              </>
            ) : (
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Standard</th>
                      <th>Section</th>
                      <th>Medium</th>
                      <th>Class Coordinator</th>
                      <th>More Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{user.studentname}</td>
                          <td>{user.standard}</td>
                          <td>{user.section}</td>
                          <td>{user.medium}</td>
                          <td>{user.coordinator}</td>
                          <td>
                            {isVisible ? (
                              <>
                                <Link
                                  to={`/portal/student-view/${user.id}`}
                                  className="btn btn-primary btn-sm mr-2 "
                                >
                                  View
                                </Link>
                                <Link
                                  to={`/portal/student-edit/${user.id}`}
                                  className="btn btn-info btn-sm mr-2"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => handleDelete(user.id)}
                                  className="btn btn-danger btn-sm"
                                >
                                  Delete
                                </button>
                              </>
                            ) : (
                              <Link
                                to={`/portal/student-view/${user.id}`}
                                className="btn btn-primary w-100 btn-sm mr-2 "
                              >
                                View
                              </Link>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
