import React from 'react';

class FormOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleInput(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmission(event){
    event.preventDefault();
    this.props.next(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmission}>
        <label htmlFor="firstName">First Name: </label> <br />
        <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleInput}/> <br />
        <label htmlFor="lastName">Last Name: </label> <br />
        <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInput}/> <br />
        <label htmlFor="email">Email Address: </label> <br />
        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleInput}/> <br />
        <label htmlFor="password">Password: </label> <br />
        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInput}/> <br />
        <label htmlFor="password2">Confirm Password: </label> <br />
        <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleInput}/> <br /> <br />
        <input type='submit' value='next>' />
      </form>
    )
  }
}



export default FormOne;