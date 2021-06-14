import './App.css';
import React from 'react';

class MyDog extends React.Component {
  state = {
    breed: 'Boyero',
    name: 'Milo',
    years: '8'
  };

  onChangeName = ({ target: { value } }) => {
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <div>
        <h1>My Dog's name is: {this.state.name}</h1>
        <input 
          type="text" 
          value={this.state.name}
          onChange={this.onChangeName}
        />
      </div>
    )
  }
}

export default MyDog
