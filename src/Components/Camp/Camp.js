import React from 'react';
import './camp.css';

const Camp = ({camps,selectRandom,chooseAgain}) => {

    return (
        <div className="doctors-camp">
            {/* camp section start */}
            <h2>Appointment List</h2>
            <div>
                <ul>
                    {
                        // call Li components for show doctors name
                        camps.map(doctor => <Li doctor={doctor}></Li>)
                    }
                </ul>
            </div>
            <button onClick={()=> selectRandom()}>Choose One</button>
            <button onClick={()=> chooseAgain()}>Choose Again</button>
        </div>
    );
};

// declare a new componets for show doctor name
const Li = ({doctor}) => {
    return (
        <li>{doctor.name}</li>
    )
}

export default Camp;