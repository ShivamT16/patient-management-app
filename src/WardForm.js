import { useState } from "react"
import { useDispatch } from "react-redux"
import { addWard } from "./wardSlice"

export const WardForm = () => {
    const dispatch = useDispatch()
    const [newWard, setNewWard] = useState({
        wardNumber: "",
        capacity: "",
        specialization: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewWard({...newWard, [name]: value})
    }

    const handleSubmit = () => {
        console.log(newWard)
        // dispatch(addWard())

    }

    return(
        <div>
            <input type='number' name="wardNumber" value={newWard.wardNumber} placeholder="Ward Number" onChange={handleChange} />
            <input type='number' name="capacity" value={newWard.capacity} placeholder="Capacity" onChange={handleChange} />
            <input type='text' name="specialization" value={newWard.specialization} placeholder="Specialization" onChange={handleChange} />
            <button onClick={handleSubmit} >Add New Ward</button>
        </div>
    )
}