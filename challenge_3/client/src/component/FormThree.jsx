import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form onSubmit={this.props.next}>
        <label htmlFor="CC">Credit Card Number: </label> <br />
        <input type="text" id="CC" name="CC"/> <br />
        <label htmlFor="expiration">Expiration Date: </label> <br />
        <input list='expiration' />
        <datalist id='expiration'>
          <option value='Jan' />
          <option value='Feb' />
          <option value='Mar' />
          <option value='Apr' />
          <option value='May' />
          <option value='Jun' />
          <option value='Jul' />
          <option value='Aug' />
          <option value='Sept' />
          <option value='Oct' />
          <option value='Nov' />
          <option value='Dec' />
        </datalist>
        <input list='expirationYear' />
        <datalist id='expirationYear'>
          <option value='2020' />
          <option value='2021' />
          <option value='2022' />
          <option value='2023' />
          <option value='2024' />
          <option value='2025' />
          <option value='2026' />
          <option value='2027' />
          <option value='2028' />
          <option value='2029' />
          <option value='2030' />
        </datalist>

        <br /> <label htmlFor="cvv">CVV: </label> <br />
        <input type="password" id="cvv" name="cvv" /> <br />
        <input type='submit' value='next>' />
      </form>
    )
  }
}

export default FormThree;