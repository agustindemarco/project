import React from 'react';

const onClickButton = () => {
  console.log('Do something')
}

class Button extends React.Component {
  render() {
    return (
      <button type="submit" onClick={onClickButton}>{this.props.label}</button>
    )
  }
}

export default Button;