import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPatients } from "./patient/patientSlice"
import { fetchWards } from "./ward/wardSlice"

export const HospitalView = () => {
    const dispatch = useDispatch()
    const wards = useSelector((state)=>state.ward.ward)
    const patient = useSelector((state => state.patient.patient))

    const totalOccupancy = wards.reduce((acc,curr) =>  acc + curr.capacity , 0)

    useEffect(() => {
          dispatch(fetchPatients());
          dispatch(fetchWards())
        } , 
      [dispatch] )
    
    return(
        <div className="view-main">
             <h2>Hospital View</h2>
             <h3 className="viewList">Total Speciality Wards: {wards.length}</h3>
             <h3 className="viewList">Total Patients: {patient.length}</h3>
             <h3 className="viewList">Current Occupancy: {patient.length}/{totalOccupancy} </h3>
        </div>
    )
}