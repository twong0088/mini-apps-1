import React from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    }

    this.pressNext = this.pressNext.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
  }

  pressNext(obj) {
    this.setState(obj, ()=>{
      if (this.state.page === 1 || this.state.page === 2) {
        this.setState({
          page: this.state.page + 1
        })
      } else {
        this.sendToServer();
        this.setState({
          page: 1
        })
      }
    })

}
  sendToServer(){
    console.log(this.state);
    axios.post('/newpurchase', this.state)
    .then((response) => {
      console.log('success');
      alert('Order Complete. Returning to Homepage.');
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  render() {
    return(
      this.state.page === 1 ? <FormOne next={this.pressNext}/> :
      this.state.page === 2 ? <FormTwo next={this.pressNext}/> :
      this.state.page === 3 ? <FormThree next={this.pressNext}/>: <h1>404 not found</h1>
    )
  }

}

export default App;

