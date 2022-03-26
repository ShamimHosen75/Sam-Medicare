import React from 'react';
import './camp.css';

const Camp = (props) => {
    const camps = props.camp;
    console.log(camps);
    // const [doctors, setDoctors] =useState([]);
    // setDoctors(camps);
    // console.log(doctors);
    const campList = [];
    for(const camp of camps){
        campList.push(camp);
    }

    // const selectRandom = () => {
    //     const randomNum = parseInt(Math.random()*13);
    //     console.log(randomNum)
    //     const selectedItem = camps.find(item => randomNum === item.id);
    //     if(!selectedItem){
    //         selectRandom();
    //     }
    //     console.log(selectedItem);
    // }
    return (
        <div className="doctors-camp">
            {/* camp section start */}
            <h2>Appointment List</h2>
            <div>
                <ul>
                    {
                        // call Li components for show doctors name
                        campList.map(doctor => <Li doctor={doctor}></Li>)
                    }
                </ul>
            </div>
            {/* <button onClick={()=> selectRandom()}>Select Random One</button> */}
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