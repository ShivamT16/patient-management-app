import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPatients } from "./patientSlice"
import { fetchWards } from "./wardSlice"

export const HospitalView = () => {
    const dispatch = useDispatch()
    const wards = useSelector((state)=>state.ward.ward)
    const patient = useSelector((state => state.patient.patient))

    const totalPatients = patient.length
    const totalOccupancy = wards.reduce((acc,curr) =>  acc + curr.capacity , 0)

    useEffect(() => {
          dispatch(fetchPatients());
          dispatch(fetchWards())
        } , 
      [dispatch] )
    
    return(
        <div>
             <h2>Hospital View</h2>
             <h3>Total Patients: {totalPatients}</h3>
             <h3>Current Occupancy: {totalPatients}/{totalOccupancy} </h3>
        </div>
    )
}