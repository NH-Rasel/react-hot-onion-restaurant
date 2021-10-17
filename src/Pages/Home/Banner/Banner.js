import React from 'react';
import bgImage from '../../../images/bannerbackground.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img className="img-fluid" src={bgImage} alt="" />
            <div className="centered-text">
                <h2>Best food waiting for your belly</h2>
                <div className="input">
                    <input className="input-field form-control" type="text" placeholder="Search your food" />
                    <button type="button" className="btn btn-danger rounded-pill search-btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;