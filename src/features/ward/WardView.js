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
        <div className="view-main">
            <h2>Ward View</h2>

        {status === 'loading' && <h3> Loading... </h3>}
        {status === 'error' && <h3> Error: {error} </h3>}

        <Link className="add-link" to="/wards/add" >Add New Ward</Link>
        <p className="header">Ward Number / Ward Specialization || Capacity of Ward</p>

        {wards.map((element, _index) => 
        <div className="viewList" key={element._id} style={{ backgroundColor: _index%2 === 0 ? "whitesmoke" : "white"  }} >
          <Link className="link" to={`/wards/details/${element.specialization}`} >
          {element.wardNumber} / {element.specialization} || {element.capacity} beds
          </Link>
          <Link><button onClick={() => dispatch(deleteWard(element._id))} >Delete</button></Link>
          <Link to={`/wards/update/${element._id}`} ><button>Edit</button></Link>
        </div>
      )}

        </div>
    )
}