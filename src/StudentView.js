import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Studentview({ isVisible }) {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://63a149e3e3113e5a5c514a70.mockapi.io/studentdetails/${params.id}`).then((response) => {
        setPost(response.data);
        setLoading(false);
      });
  }, []);

  if (post)
    return (
      <>
        {isLoading ? (
          <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
        ) : (
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-6">
                <h2>{post.studentname}</h2> <br />
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th>ID</th>
                      <td>{post.id}</td>
                    </tr>
                    <tr>
                      <th>Student Name</th>
                      <td>{post.studentname}</td>
                    </tr>
                    <tr>
                      <th>standard</th>
                      <td>{post.standard}</td>
                    </tr>
                    <tr>
                      <th>Section</th>
                      <td>{post.section}</td>
                    </tr>
                    <tr>
                      <th>Medium</th>
                      <td>{post.medium}</td>
                    </tr>
                    <tr>
                      <th>Father Name</th>
                      <td>{post.fathername}</td>
                    </tr>
                    <tr>
                      <th>Parents contact Number</th>
                      <td>{post.contanctnumber}</td>
                    </tr>
                    <tr>
                      <th>Class Coordinator</th>
                      <td>{post.coordinator}</td>
                    </tr>
                    <tr>
                      {isVisible ? (
                        <>
                          <th>
                            <Link
                              to={`/portal/student-edit/${params.id}`}
                              className="btn btn-outline-primary w-50"
                            >
                              Edit Student
                            </Link>
                          </th>
                          <td>
                            <Link
                              to={`/portal/view-score/${params.id}`}
                              className="btn btn-outline-primary"
                            >
                              View Scores
                            </Link>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>
                            <Link
                              to={`/portal/view-score/${params.id}`}
                              className="btn btn-outline-primary w-50"
                            >
                              View Scores
                            </Link>
                          </td>
                        </>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Studentview;
