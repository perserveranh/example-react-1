import React, { Component } from 'react';
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'blue', 'green', '#ccc']
        }
    }
    showColor(color) {
        // var colors = this.props.color;
        return {
            backgroundColor: color
        };
    }
    handClick(color) {
        this.props.onChangecolor(color);
    }
    render() {
        var elmColor = this.state.color.map((color, index) => {
            return <span
                key={index}
                style={this.showColor(color)}
                className={this.props.color === color ? 'active' : ''}
                onClick={() => this.handClick(color)}>
            </ span>
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColor}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
} export default ColorPicker;