import React from "react";
import Input from "../../components/input/input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";
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
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton type="submit" isGoogleSignIn onClick={signInWithGoogle}>
            sign in with google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
