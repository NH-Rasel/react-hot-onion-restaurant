import React, { useEffect, useState } from 'react';
import SingleDinner from './SingleDinner/SingleDinner';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    console.log(dinner);
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])
    return (
        <div className="container">

            <div className="row mt-4">
                {
                    dinner.map(singleDinner => <SingleDinner
                        key={singleDinner.name}
                        singleDinner={singleDinner}
                    ></SingleDinner>)
                }
            </div>
        </div>
    );
};

export default Dinner;