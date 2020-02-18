import React from "react";

class LoginForm extends React.Component {
   
    render() {
    return (

<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"></input>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
         );
    }
}
export default LoginForm;
