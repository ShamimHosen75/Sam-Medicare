import React, { useEffect, useState } from 'react';
import Camp from '../Camp/Camp';
import Doctor from '../Doctor/Doctor';
import './main.css';

const Main = () => {
    // declare state
    const [doctors, setDoctors] = useState([]);
    const [camps, setCamps] = useState([]);
    // console.log(camps);

    // declare add to camp function
    const addToCamp = id => {
        const camp = doctors.find(doctor => doctor.id === id);
        const newCamp = [...camps,camp]
        setCamps(newCamp);
    };

    // declare useEffect
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    },[])
    return (
        <div className="main-container">
            <div className="doctors-container">
            {
                // call doctor component
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    addToCamp={addToCamp}
                    doctor={doctor}></Doctor>)
            }
            </div>
            <div>
                {/* call camp componet */}
                <Camp camp={camps}></Camp>
            </div>
        </div>
    );
};

export default Main;