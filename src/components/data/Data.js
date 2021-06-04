import '../data/Data.css'

import React, { Component } from 'react'
import axios from 'axios';
export class data extends Component {
    render() {
        return (
            <div className="container-data">
                <h2>Data User</h2>

                <div className="cont-data">
                    <p className="text">Name</p>
                    <p className="text">Age</p>
                    <p className="text">City</p>
                </div>
            </div>
        )
    }
}

export default data
