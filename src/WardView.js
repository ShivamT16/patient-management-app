import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteWard, fetchWards } from "./wardSlice"
import { Link } from "react-router-dom"

export const WardView = () => {
    const dispatch = useDispatch()
    const wards = useSelector((state) => state.ward.ward )
    const status = useSelector((state) => state.ward.status )
    const error = useSelector((state) => state.ward.error )

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchWards())
      }
    }, [dispatch,status] )
   
    return(
        <div>
            <h2>Ward View</h2>
        {status === 'loading' && <p> Loading... </p>}
        {status === 'error' && <p> Error: {error} </p>}
        <Link to="/wards/add" >Add New Ward</Link>
        {wards.map((element) => 
        <div key={element._id}>
          {element.wardNumber}
          <button onClick={() => dispatch(deleteWard(element._id))} >Delete</button>
          <Link to={`/wards/update/${element._id}`} ><button>Edit</button></Link>
        </div>
      )}
        </div>
    )
}