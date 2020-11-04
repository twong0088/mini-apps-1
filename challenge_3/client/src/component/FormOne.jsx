import React from 'react';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form onSubmit={this.props.next}>
        <label htmlFor="firstName">First Name: </label> <br />
        <input type="text" id="firstName" name="firstName" /> <br />
        <label htmlFor="lastName">Last Name: </label> <br />
        <input type="text" id="lastName" name="lastName" /> <br />
        <label htmlFor="email">Email Address: </label> <br />
        <input type="text" id="email" name="email" /> <br />
        <label htmlFor="password">Password: </label> <br />
        <input type="password" id="password" name="password" /> <br />
        <label htmlFor="password2">Confirm Password: </label> <br />
        <input type="password" id="password2" name="password2" /> <br /> <br />
        <input type='submit' value='next>' />
      </form>
    )
  }
}



export default FormOne;