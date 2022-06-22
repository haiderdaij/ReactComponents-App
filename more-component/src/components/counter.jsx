import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 });
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    const x = <h1>Zero</h1>;
    return value === 0 ? x : value;
  }
}

export default Counter;
