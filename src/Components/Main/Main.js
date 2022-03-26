import React, { useEffect, useState } from 'react';
import Camp from '../Camp/Camp';
import Doctor from '../Doctor/Doctor';
import './main.css';

const Main = () => {
    // declare state
    const [doctors, setDoctors] = useState([]);
    const [camps, setCamps] = useState([]);

        // declare useEffect
        useEffect(() => {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => setDoctors(data));
        },[])
        
    // declare add to camp function
    const addToCamp = id => {
        const camp = doctors.find(doctor => doctor.id === id);
        const newCamp = [...camps,camp]
        setCamps(newCamp);
    };

    const selectRandom = () => {
        const randomNum = parseInt(Math.random()*13);
        let newCamplist = [];
        const selectedItem = camps.find(item => randomNum === item.id);
        if(!selectedItem){
            selectRandom();
        }else{
             newCamplist.push(selectedItem)
             setCamps(newCamplist);
        }
    }

    const chooseAgain = () => {
        setCamps([]);
    }
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
                <Camp 
                selectRandom={selectRandom}  
                chooseAgain={chooseAgain}  
                camps={camps}></Camp>
            </div>
        </div>
    );
};

export default Main;