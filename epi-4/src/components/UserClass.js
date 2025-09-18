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
      <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
        <h1 className="text-lg font-medium text-gray-700 mb-3">
          Count: <span className="font-semibold">{this.state.count}</span>
        </h1>

        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
          className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Update Count
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Name: <span className="font-normal">{this.props.name}</span>
        </h2>
        <h3 className="text-lg text-gray-700 mb-1">📍 Location</h3>
        <p className="text-gray-600">✉️ Email</p>
      </div>
    );
  }
}

export default UserClass;
