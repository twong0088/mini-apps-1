import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(

    <div>
      <form>
        <label for="firstName">First Name: </label> <br />
        <input type="text" id="firstName" name="firstName" /> <br />
        <label for="lastName">Last Name: </label> <br />
        <input type="text" id="lastName" name="lastName" /> <br />
        <label for="email">Email Address: </label> <br />
        <input type="text" id="email" name="email" /> <br />
        <label for="password">Password: </label> <br />
        <input type="password" id="password" name="password" /> <br />
        <label for="password2">Confirm Password: </label> <br />
        <input type="password" id="password2" name="password2" /> <br /> <br />
        <input type='submit' value='next>' />
      </form>
      <form>
        <label for="address">Address: </label> <br />
        <input type="text" id="address" name="address" /> <br />
        <label for="address2">Address (optional): </label> <br />
        <input type="text" id="address2" name="address2" /> <br />
        <label for="city">City: </label> <br />
        <input type="text" id="city" name="city" /> <br />
        <label for="state">State: </label> <br />
        <input type="text" id="state" name="state" /> <br />
        <label for="phone">Phone Number: </label> <br />
        <input type="text" id="phone" name="phone" /> <br />
        <input type='submit' value='next>' /> <br />
      </form>

      <form>
        <label for="CC">Credit Card Number: </label> <br />
        <input type="text" id="CC" name="CC"/> <br />
        <label for="expiration">Expiration Date: </label> <br />
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

        <br /> <label for="cvv">CVV: </label> <br />
        <input type="password" id="cvv" name="cvv" /> <br />
        <input type='submit' value='next>' />
      </form>

    </div>

    )
  }
}

export default App;
