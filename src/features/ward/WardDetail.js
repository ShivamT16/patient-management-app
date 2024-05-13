import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

export const WardDetail = () => {
    const {wardName} = useParams()
    const wards = useSelector((state) => state.ward.ward)
    const patient = useSelector((state => state.patient.patient))

    return(
        <div className="view-main">
            <h2>Ward Detail</h2>
         {
            wards.filter((w) => w.specialization === wardName).map((element) => 
           <div className="viewlist" key={element._id}>
            <p>Ward Number: {element.wardNumber} </p>
            <p>Ward Capacity: {element.capacity}  </p>
            <p>Ward Specialization: {element.specialization}  </p>
           </div>  
          )
         }
         <h2>Patients in this ward-</h2>
        <p className="header">Patient Name || Age || Gender </p>

         {
           patient.filter((w) => w.ward.includes(wardName)).map((element, _index) => 
            <div className="viewList" key={element._id} style={{ backgroundColor: _index%2 === 0 ? "whitesmoke" : "white"  }}>
            <Link className="link" to={`/patients/details/${element._id}`} >
                {element.name} || {element.age} || {element.gender}
            </Link>
            </div>
          ) 
         }
        </div>
    )
}