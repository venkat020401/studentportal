import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function TeachersDashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Welcome! Saranya</h1>
      </div>
      <div class="row">
        <Card title="Designation " value="Professor" color="primary" />
        <Card title="Department" value="Maths" color="info" />
        <Card title="DOJ" value="20-01-2016" color="warning" />
        <Card title="Coordinator for" value="XII" color="success" />
      </div>

      <div className="row mt-5">
        <div className="col-lg-2">
          <h3>Your Classes</h3>
          <table className="table  table-borderless table-hover mt-4">
            <thead>
              <tr>
                <th>Class</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VI</td>
                <td>Maths</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Physics</td>
              </tr>
              <tr>
                <td>XII</td>
                <td>Maths</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-9">
          <h3>Work Table</h3>
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
                <td>VI</td>
                <td>X</td>
                <td>Free</td>
                <td>Free</td>
                <td>XII</td>
                <td>XII</td>
                <td>Free</td>
                <td>X</td>
              </tr>
              <tr>
                <th>Tue</th>
                <td>XII</td>
                <td>X</td>
                <td>Free</td>
                <td>XII</td>
                <td>VI</td>
                <td>Free</td>
                <td>X</td>
                <td>Free</td>
              </tr>
              <tr>
                <th>Wed</th>
                <td>XII</td>
                <td>VI</td>
                <td>X</td>
                <td>XII</td>
                <td>Free</td>

                <td>Free</td>
                <td>X</td>
                <td>Free</td>
              </tr>

              <tr>
                <th>Thu</th>
                <td>Free</td>
                <td>X</td>
                <td>Free</td>
                <td>Free</td>
                <td>XII</td>
                <td>XII</td>

                <td>X</td>
                <td>VI</td>
              </tr>
              <tr>
                <th>Fri</th>
                <td>XII</td>
                <td>XII</td>

                <td>Free</td>
                <td>Free</td>
                <td>VI</td>
                <td>X</td>
                <td>X</td>
                <td>VI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TeachersDashboard;
