import React, { Component } from 'react';
import './App.css';
import Reset from './components/reset';
import ColorPicker from './components/colorPicker';
import Result from './components/result';
import SizeSetting from './components/sizeSetting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontsize: 8
    }
  }
  handSetcolor(params) {
    this.setState({
      color: params
    })
  }
  handSetsize(value) {
    // size 8<= size <=36
    this.setState({
      fontsize: (this.state.fontsize + value >= 8 && this.state.fontsize <= 36) ? this.state.fontsize + value : this.state.fontsize
    })
  }
  handReset(value) {
    if (value) {
      this.setState({
        color: '#000',
        fontsize: 12
      })
    }
  }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onChangecolor={this.handSetcolor.bind(this)} />

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontsize} onChangesize={this.handSetsize.bind(this)} />
            <Reset onReset={this.handReset.bind(this)} />
          </div>

          <Result color={this.state.color} fontsize={this.state.fontsize} />
        </div>
      </div>
    );
  }
} export default App;