import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>{this.props.firstName}, {this.props.lastName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair color: {this.props.hairColor} </p>
        </div>
        );
    }
}

export default PersonCard;