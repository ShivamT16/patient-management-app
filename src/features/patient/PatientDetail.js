import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const PatientDetail = () => {
    const {id} = useParams()
    const patient = useSelector((state => state.patient.patient))

    return(
        <div className="view-main" >
            <h2>Patient Detail</h2>
         {
           patient.filter((w) => w._id === id ).map((element) => 
            <div className="viewlist" key={element._id}>
            <p>Patient Name- {element.name} </p>
            <p>Age- {element.age} years </p>
            <p>Gender- {element.gender} </p>
            <p>Medical history- {element.medicalHistory} </p>
            <p>Alloted ward- {element.ward} </p>
            <p>Contact- {element.contact} </p>
            </div>
          ) 
         }
        </div>
    )
}