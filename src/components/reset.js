import React, { Component } from 'react';

class Reset extends Component {
    hadnleReset = () => {
        this.props.onReset(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-info" onClick={this.hadnleReset}>reset </button>
        );
    }
} export default Reset;