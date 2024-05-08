import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePatients, fetchPatients } from "./patientSlice"
import { Link } from "react-router-dom"

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
        <div>
            <h2>Patients View</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Error: {error}</p>}
          <Link to="/patients/add" >Add New Patient</Link>
            {patients.map((element) => 
          <div key={element._id}>
            {element.name}
          <button onClick={() => dispatch(deletePatients(element._id))}>Delete</button>
          <Link to={`/patients/update/${element._id}`}><button>Edit</button></Link>
          </div>
        )}
        </div>
    )
} 