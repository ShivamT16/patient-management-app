import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWard, updateWard } from "./wardSlice"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./inputForm.css"

export const WardForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const wards = useSelector((state) => state.ward.ward)
    const ward = wards.find((item) => item._id === id )
    const [newWard, setNewWard] = useState({
        wardNumber: ward ? ward.wardNumber : "",
        capacity: ward ? ward.capacity : "",
        specialization: ward ? ward.specialization : ""
    })
   
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewWard({...newWard, [name]: value})
    }

    const handleSubmit = () => {
    if(!newWard.wardNumber || !newWard.capacity || !newWard.specialization)
        {
        toast.warn("All fields are required")
    }
    else{
        if(ward) {
          dispatch(updateWard({id: ward._id,updatedWard: newWard}))
          navigate("/wards")
        }
        else{
            const findWard = wards.find((item) => item.wardNumber === newWard.wardNumber || item.specialization.toLowerCase() === newWard.specialization.toLowerCase())

            if(findWard) {
                toast.error("Ward already exists")
            }
            else{
                dispatch(addWard(newWard))
                navigate("/wards")
            }
        } } } 

    return(
        <div className="input-main">

            <h2>Add New Ward</h2>

            <input className="input" type='text' name="specialization" value={newWard.specialization} placeholder="Ward Specialization" autoComplete="off" onChange={handleChange} />
            <input className="input" type='number' name="wardNumber" value={newWard.wardNumber} placeholder="Ward Number" autoComplete="off" onChange={handleChange} />
            <input className="input" type='number' name="capacity" value={newWard.capacity} placeholder="Capacity" autoComplete="off" onChange={handleChange} />
            
            <button className="submit-btn" onClick={handleSubmit}>{ward ? "Update Ward" : "Add New Ward"}</button>
        <ToastContainer autoClose={2000} />
        </div>
    )
}