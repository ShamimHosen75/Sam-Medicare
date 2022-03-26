import { faClinicMedical, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './doctor.css';


const Doctor = (props) => {
    // destructuring props
    const {id, name, nationality, salary, age, degree, image } = props.doctor;
    return (
        <div className='col-md-4 col-sm-12'>
            {/* doctor card section start */}
            <div className="doctor">
                <div className="doctor-img">
                    <img src={image} alt="" />
                </div>
                <div className="doctor-info">
                    <p>{name}</p>
                    <p>{nationality}</p>
                    <span>Age:{age}</span>
                    <span className="reviews">
                            <span><FontAwesomeIcon icon={faUserGraduate} /></span>{degree}
                    </span>
                    <h2>${salary}/<span>month</span></h2>
                    <button onClick={()=>props.addToCamp(id)}>
                        <span className="icon"><FontAwesomeIcon icon={faClinicMedical} /></span>
                        add to camp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;