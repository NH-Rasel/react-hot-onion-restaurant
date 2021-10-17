import React from 'react';
import './SingleDinner.css';

const SingleDinner = ({ singleDinner }) => {
    const { name, quote, img, price } = singleDinner;
    return (
        <div className="col-12 col-md-6 col-lg-4 p-4 single-item">
            <img style={{ width: '200px' }} src={img} alt="" />
            <h5>{name}</h5>
            <p>{quote}</p>
            <h4>$ {price}</h4>
        </div>
    );
};

export default SingleDinner;