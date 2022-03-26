import React from 'react';
import './camp.css';

const Camp = (props) => {
    const camps = props.camp;
    // console.log(camps)
    const campList = [];
    // create a new array using for loop.
    for(const camp of camps){
        campList.push(camp.name);
    }

    const selectRandom = () => {
        const randomNum = parseInt(Math.random()*13);
        console.log(randomNum)
        const selectedItem = camps.find(item => {
            console.log(item);
        })
        // console.log(selectedItem);
    }
    return (
        <div className="doctors-camp">
            {/* camp section start */}
            <h2>Appointment List</h2>
            <div>
                <ul>
                    {
                        // call Li components for show doctors name
                        campList.map(name => <Li name={name}></Li>)
                    }
                </ul>
            </div>
            <button onClick={()=> selectRandom()}>Select Random One</button>
        </div>
    );
};

// declare a new componets for show doctor name
const Li = props => {
    return (
        <li>{props.name}</li>
    )
}

export default Camp;