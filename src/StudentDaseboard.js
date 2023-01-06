import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

function StudentDaseboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Welcome! Dinesh</h1>
      </div>
      <div class="row">
        <Card title="Name " value="Dinesh" color="primary" />
        <Card title="Standard" value="XII" color="info" />
        <Card title="DOB" value="20-01-2000" color="warning" />
        <Card title="Coordinator" value="Divya" color="success" />
      </div>
      <div className="row mt-4">
        <div className="col-lg">
          <h3>Class Table</h3>
          <table className="table table-borderless table-hover mt-4">
            <thead>
              <tr>
                <th>Day/Hour</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Mon</th>
                <td>Tamil</td>
                <td>Maths</td>
                <td>Maths</td>
                <td>Chemistry</td>
                <td>Physics</td>
                <td>English</td>
                <td>Biology</td>

                <td>Biology</td>
              </tr>
              <tr>
                <th>Tue</th>
                <td>Tamil</td>

                <td>Physics</td>
                <td>Physics</td>
                <td>English</td>

                <td>Chemistry</td>
                <td>Biology</td>
                <td>Biology</td>
                <td>Maths</td>
              </tr>
              <tr>
                <th>Wed</th>
                <td>Chemistry</td>
                <td>Maths</td>
                <td>Physics</td>

                <td>English</td>
                <td>Biology</td>

                <td>Tamil</td>
                <td>Chemistry</td>
                <td>Physics</td>
              </tr>

              <tr>
                <th>Thu</th>
                <td>Physics</td>
                <td>Tamil</td>
                <td>Chemistry</td>
                <td>Maths</td>

                <td>Physics</td>

                <td>Biology</td>

                <td>Chemistry</td>
                <td>English</td>
              </tr>
              <tr>
                <th>Fri</th>
                <td>Chemistry</td>
                <td>Chemistry</td>
                <td>Tamil</td>
                <td>Maths</td>

                <td>English</td>
                <td>Biology</td>
                <td>Physics</td>
                <td>Physics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mt-5">
          <h3>
            Exam Results{" "}
            <Link
              to={`/portal/view-score/2`}
              className="btn btn-outline-primary btn-sm ml-3"
            >
              View Score
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default StudentDaseboard;
