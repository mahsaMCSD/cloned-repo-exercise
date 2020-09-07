import React from "react";
import Input from "../../components/input/input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-up.style.scss";
import { auth } from "firebase";
import { createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confrimPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confrimPassword } = this.state;
    if (password !== confrimPassword) {
      alert("password doesnt match conform password");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confrimPassword: "",
      });
    } catch (error) {
      console.log("err message", error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confrimPassword } = this.state;
    return (
      <div className="signUp">
        <h1>I need an account</h1>
        <span>Sign up with your email and password</span>
        <from onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            label="displayName"
            handleChange={this.handleChange}
          />
          <Input
            type="email"
            name="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="password"
            handleChange={this.handleChange}
          />
          <Input
            type="password"
            name="confrimPassword"
            value={confrimPassword}
            label="confirm password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </from>
      </div>
    );
  }
}
export default SignUp;
