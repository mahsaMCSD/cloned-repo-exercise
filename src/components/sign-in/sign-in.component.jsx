import React from "react";
import Input from '../../components/input/input.component'
import './sign-in.style.scss'
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="signIn">
        <Input
          type="email"
          name="email"
          value={this.state.email}
          label="email"
          handleChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          value={this.state.password}
          label="password"
          handleChange={this.handleChange}
        />
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default SignIn;
