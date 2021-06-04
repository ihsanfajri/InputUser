import '../data/Data.css'

import React, { Component } from 'react'
import axios from 'axios';
export class data extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/person`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    render() {
        return (
            <div className="container-data">
                <h2>Data User</h2>

                <div className="cont-data">
                    { this.state.persons.map(person => <p className="text">{person.name}</p>)}
                    { this.state.persons.map(person => <p className="text">{person.age}</p>)}
                    { this.state.persons.map(person => <p className="text">{person.city}</p>)}
                </div>
            </div>
        )
    }
}

export default data
