import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWards } from "./wardSlice"

export const WardView = () => {
    const dispatch = useDispatch()
    const wards = useSelector((state) => state.ward )
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

        {/* {console.log(wards)} */}

        </div>
    )
}