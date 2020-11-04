import React from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    }

    this.pressNext = this.pressNext.bind(this);
  }

  pressNext(event) {
    event.preventDefault();
    if (this.state.page === 1 || this.state.page === 2) {
      this.setState({
        page: this.state.page + 1
      })
    } else {
      this.setState({
        page: 1
    })
  }
  console.log(this.state.page);
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

