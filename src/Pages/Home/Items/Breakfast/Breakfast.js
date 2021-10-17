import React, { useEffect, useState } from 'react';
import SingleBreakfast from './SingleBreakfast/SingleBreakfast';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])
    return (
        <div className="container">

            <div className="row mt-4">
                {
                    breakfast.map(singleBreakfast => <SingleBreakfast
                        key={singleBreakfast.name}
                        singleBreakfast={singleBreakfast}
                    ></SingleBreakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfast;