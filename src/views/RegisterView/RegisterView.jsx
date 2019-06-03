import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default class RegisterView extends Component {
  changeViewAfterRegister = () => {
    this.props.history.push(`/me`);
  };

  render() {
    return (
      <div>
        <Button variant="warning">
          <Link to="/">Powrót do strony głównej</Link>
        </Button>
        <RegisterForm changeView={this.changeViewAfterRegister} />
      </div>
    );
  }
}
