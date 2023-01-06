import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
    const [isLoading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getUserData()

    }, [])

    let getUserData = async () => {
        try {
            const user = await axios.get(`https://63a149e3e3113e5a5c514a70.mockapi.io/studentdetails/${params.userid}`)
            MyFormik.setValues(user.data);
            
        } catch (error) {

        }
    }
    const MyFormik = useFormik({
        initialValues: {
            studentname: "",
            fathername: "",
            contanctnumber: "",
            coordinator: "",
            standard: "",
            section: "",
            medium: ""
        },
        validate: (values) => {
            let errors = {}
      
            if (!values.studentname) {
              errors.studentname = "Please fill the name"
      
            }
      
            if (!values.fathername) {
              errors.fathername = "Please fill the father name"
            }
      
            if (!values.contanctnumber) {
              errors.contanctnumber = "Please enter the parents contact number"
            }
      
            if (!values.coordinator) {
              errors.coordinator = "Please fill the co-ordinator name"
      
            }
            if (!values.standard) {
              errors.standard = "Please select the standard"
      
            }
      
            if (!values.section) {
              errors.section = "Please select the section"
      
            }
            if (!values.medium) {
              errors.medium = "Please select the medium"
      
            }
      
            return errors;
      
          },
        onSubmit: async (values) => {
            try {
                setLoading(true)
                await axios.put(`https://63a149e3e3113e5a5c514a70.mockapi.io/studentdetails/${params.userid}`, values)
                setLoading(false)
                navigate('/portal/student-list')
            } catch (error) {

            }
        }
    })
    return (
        <>
            <div className="container">
        <form onSubmit={MyFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Student Name</label>
              <input
                name="studentname"
                value={MyFormik.values.studentname}
                onChange={MyFormik.handleChange}
                type="text"
                className={`form-control ${MyFormik.errors.studentname ? "is-invalid" : ""}`}

              />
              <span style={{ color: "crimson" }}>{MyFormik.errors.studentname}</span>
            </div>

            <div className="col-lg-6">
              <label>Father Name</label>
              <input
                name="fathername"
                value={MyFormik.values.fathername}
                onChange={MyFormik.handleChange}
                type="text"
                className={`form-control ${MyFormik.errors.fathername ? "is-invalid" : ""}`}
              />
              <span style={{ color: "crimson" }}>{MyFormik.errors.fathername}</span>
            </div>

            <div className="col-lg-6 mt-3">
              <label>Parents contact Number</label>
              <input
                name="contanctnumber"
                value={MyFormik.values.contanctnumber}
                onChange={MyFormik.handleChange}
                type="number"
                className={`form-control ${MyFormik.errors.contanctnumber ? "is-invalid" : ""}`}

              />
              <span style={{ color: "crimson" }}>{MyFormik.errors.contanctnumber}</span>
            </div>

            <div className="col-lg-6 mt-3">
              <label>Class Coordinator</label>
              <input
                name="coordinator"
                value={MyFormik.values.coordinator}
                onChange={MyFormik.handleChange}
                type="text"
                className={`form-control ${MyFormik.errors.coordinator ? "is-invalid" : ""}`}
              />
              <span style={{ color: "crimson" }}>{MyFormik.errors.coordinator}</span>
            </div>

            <div className="col-lg-4 mt-3">
              <label>Standard</label>
              <select
                name="standard"
                value={MyFormik.values.standard}
                onChange={MyFormik.handleChange}
                className={`form-control ${MyFormik.errors.standard ? "is-invalid" : ""}`}
              >
                <option value={""}>--select--</option>
                <option value={"VI"}>VI</option>
                <option value={"VII"}>VII</option>
                <option value={"VIII"}>VIII</option>
                <option value={"IX"}>IX</option>
                <option value={"X"}>X</option>
                <option value={"XI"}>XI</option>
                <option value={"XII"}>XII</option>
              </select>
              <span style={{ color: "crimson" }}>{MyFormik.errors.standard}</span>
            </div>
            <div className="col-lg-4 mt-3">
              <label>Section</label>
              <select
                name="section"
                value={MyFormik.values.section}
                onChange={MyFormik.handleChange}
                className={`form-control ${MyFormik.errors.section ? "is-invalid" : ""}`}
              >
                <option value={""}>--select--</option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"C"}>C</option>
                <option value={"D"}>D</option>
              </select>
              <span style={{ color: "crimson" }}>{MyFormik.errors.section}</span>
            </div>
            <div className="col-lg-4 mt-3">
              <label>Medium</label>
              <select
                name="medium"
                value={MyFormik.values.medium}
                onChange={MyFormik.handleChange}
                className={`form-control ${MyFormik.errors.medium ? "is-invalid" : ""}`}
              >
                <option value={""}>--select--</option>
                <option value={"Tamil"}>Tamil</option>
                <option value={"English"}>English</option>

              </select>
              <span style={{ color: "crimson" }}>{MyFormik.errors.medium}</span>
            </div>
            <div className="col-lg-3 mt-3">
              <input type={"submit"} value={isLoading ? "Updating..." : "Update"} className="btn btn-primary" disabled={isLoading} />
            </div>
          </div>
        </form>

      </div>
        </>
    )
}

export default UserEdit
