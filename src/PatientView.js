import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPatients } from "./patientSlice"

export const PatientView = () => {
    const dispatch = useDispatch()
    const patients = useSelector((state) => state.patient )
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

            {/* {console.log(patients)} */}

        </div>
    )
} 