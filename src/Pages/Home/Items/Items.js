import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import './Items.css';

const Items = () => {
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <BrowserRouter>
                    <Link to='/breakfast' className="breakfast">Breakfast</Link>
                    <Link to='/lunch' className="lunch">Lunch</Link>
                    <Link to='/dinner' className="dinner">Dinner</Link>
                </BrowserRouter>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Breakfast></Breakfast>
                    </Route>
                    <Route path='/breakfast'>
                        <Breakfast></Breakfast>
                    </Route>
                    <Route path='/lunch'>
                        <Lunch></Lunch>
                    </Route>
                    <Route path='/dinner'>
                        <Dinner></Dinner>
                    </Route>
                </Switch>
            </BrowserRouter>
            <button className="btn btn-secondary m-4">Checkout your food</button>
        </div>
    );
};

export default Items;