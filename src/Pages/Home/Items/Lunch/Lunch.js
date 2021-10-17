import React, { useEffect, useState } from 'react';
import SingleLunch from './SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    console.log(lunch);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    return (
        <div className="container">

            <div className="row mt-4">
                {
                    lunch.map(singleLunch => <SingleLunch
                        key={singleLunch.name}
                        singleLunch={singleLunch}
                    ></SingleLunch>)
                }
            </div>
        </div>
    );
};

export default Lunch;