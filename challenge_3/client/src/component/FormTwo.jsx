import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form onSubmit={this.props.next}>
        <label htmlFor="address">Address: </label> <br />
        <input type="text" id="address" name="address" /> <br />
        <label htmlFor="address2">Address (optional): </label> <br />
        <input type="text" id="address2" name="address2" /> <br />
        <label htmlFor="city">City: </label> <br />
        <input type="text" id="city" name="city" /> <br />
        <label htmlFor="state">State: </label> <br />
        <input type="text" id="state" name="state" /> <br />
        <label htmlFor="phone">Phone Number: </label> <br />
        <input type="text" id="phone" name="phone" /> <br />
        <input type='submit' value='next>' /> <br />
      </form>
    )
  }
}

export default FormTwo;