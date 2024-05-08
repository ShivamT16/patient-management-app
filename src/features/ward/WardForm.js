import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWard, updateWard } from "./wardSlice"
import { useParams } from "react-router-dom"

export const WardForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
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
    const findWard = wards.find((item) => item.wardNumber === newWard.wardNumber || item.specialization.toLowerCase() === newWard.specialization.toLowerCase() )

    if (ward) {
     dispatch(updateWard({id: ward._id,updatedWard: newWard}))
    }else{
        if(findWard) {
            console.log("Ward already exists")
        }
        else{
            dispatch(addWard(newWard))
        }
    } 
    }

    return(
        <div>
            <input type='number' name="wardNumber" value={newWard.wardNumber} placeholder="Ward Number" autoComplete="off" onChange={handleChange} />
            <input type='number' name="capacity" value={newWard.capacity} placeholder="Capacity" autoComplete="off" onChange={handleChange} />
            <input type='text' name="specialization" value={newWard.specialization} placeholder="Specialization" autoComplete="off" onChange={handleChange} />
            <button onClick={handleSubmit}>{ward ? "Update Ward" : "Add New Ward"}</button>
        </div>
    )
}