import React from 'react';

import '../form/Form.css';

const form = () => {
    return (
        <div className="container-form">
            <h2>Input Data User</h2>
            <div className="cont-form">
                <label className="label">Name</label>
                <input className="form" type="text" placeholder="Enter your Name"/>
            </div>
            <div className="cont-form">
                <label className="label">Age</label>
                <input className="form" type="text" placeholder="Enter your Age"/>
            </div>
            <div className="cont-form">
                <label className="label">City</label>
                <input className="form" type="text" placeholder="Enter your City"/>
            </div>
            <div>
                <button className="btn" type="submit">Submit</button>
            </div>
        </div>
    )
}

export default form
