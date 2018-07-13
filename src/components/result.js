import React, { Component } from 'react'; class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontsize
        }
    }

    render() {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12">
                <p> color : {this.props.color} - fontsize : {this.props.fontsize} </p>
                <div className="content" style={this.setStyle()}>
                    PERSERVER ANH
                </div>
            </div>
        );
    }
} export default Result;