import React from "react";
import SignIn from "../../components/sign-in/sign-in.component"
import './sign-in-and-sign-up.style.scss'
const SingInSignUp = () => {
  return (
    <div>
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form>
       <SignIn/>
     

      </form>
    </div>
  );
};
export default SingInSignUp;
