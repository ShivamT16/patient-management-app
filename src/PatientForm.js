import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPatients } from "./patientSlice"

export const PatientForm = () => {
    const dispatch = useDispatch()
    const [newPatient, setNewPatient] = useState({
        name: "", 
        age: "", 
        gender: "", 
        medicalHistory: "", 
        contact: "", 
        ward: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewPatient({...newPatient, [name]: value })
    }

    const handleSubmit = () => {
        console.log(newPatient)
        // dispatch(addPatients())
    }

    return(
        <div>
            <input type='text' name='name' value={newPatient.name} onChange={handleChange} placeholder='Patient Name' />
            <input type='number' name='age' value={newPatient.age} onChange={handleChange} placeholder="Age" />
            <select name='gender' value={newPatient.gender} onChange={handleChange} >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
            </select>
            <input type='text' name='medicalHistory' value={newPatient.medicalHistory} onChange={handleChange} placeholder="Medical History" />
            <input type='number' name='contact' value={newPatient.contact} onChange={handleChange} placeholder="Contact Number" />
            <input type='text' name='ward' value={newPatient.ward} onChange={handleChange} placeholder="Ward Number" />
            {/* <select name='ward' value={newPatient.ward} onChange={handleChange}>
               <option>Ward</option>
               {wards.map((e) =>
               <option> {e} </option>)}
            </select> */}
            <button onClick={handleSubmit}>Add New Patient</button>
        </div>
    )
}