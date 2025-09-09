import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button>
        <h2>Name:{this.props.name}</h2>
        <h3>Location</h3>
        <p>Email</p>
      </div>
    );
  }
}

export default UserClass;
