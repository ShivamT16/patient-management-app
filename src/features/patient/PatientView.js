import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePatients, fetchPatients } from "./patientSlice"
import { Link } from "react-router-dom"
import "./styles.css"

export const PatientView = () => {
    const dispatch = useDispatch()
    const patients = useSelector((state) => state.patient.patient )
    const status = useSelector((state) => state.patient.status )
    const error = useSelector((state) => state.patient.error )

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchPatients()) } 
    }, 
    [dispatch, status] )

    return(
        <div className="view-main" >
            <h2>Patients View</h2>

            {status === 'loading' && <h3>Loading...</h3>}
            {status === 'error' && <h3>Error: {error}</h3>}

          <Link className="add-link" to="/patients/add" >Add New Patient</Link>
        <p className="header">Patient Name || Age || Gender || Alloted Ward </p>

        {patients.map((element, _index) => 
          <div className="viewList" key={element._id} style={{ backgroundColor: _index%2 === 0 ? "whitesmoke" : "white"  }} >
            <Link className="link" to={`/patients/details/${element._id}`} >
            {element.name} || {element.age} || {element.gender} || {element.ward}
            </Link>
          <Link><button onClick={() => dispatch(deletePatients(element._id))}>Delete</button></Link>
          <Link to={`/patients/update/${element._id}`}><button>Edit</button></Link>
          </div>
        )}

        </div>
    )
} 