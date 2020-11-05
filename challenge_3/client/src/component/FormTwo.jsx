import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      address2: '',
      city: '',
      state: '',
      phone: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmission(event){
    event.preventDefault();
    this.props.next(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmission}>
        <label htmlFor="address">Address: </label> <br />
        <input type="text" id="address" name="address" value={this.state.address} onChange={this.handleInput}/> <br />
        <label htmlFor="address2">Address (optional): </label> <br />
        <input type="text" id="address2" name="address2" value={this.state.address2} onChange={this.handleInput}/> <br />
        <label htmlFor="city">City: </label> <br />
        <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleInput}/> <br />
        <label htmlFor="state">State: </label> <br />
        <input type="text" id="state" name="state" value={this.state.state} onChange={this.handleInput}/> <br />
        <label htmlFor="phone">Phone Number: </label> <br />
        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleInput}/> <br />
        <input type='submit' value='next>' /> <br />
      </form>
    )
  }
}

export default FormTwo;