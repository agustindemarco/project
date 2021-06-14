import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({  name = 'Leni', lastName, age, data }) => {
  return (
    <>
      <div>
        Welcome {name} {lastName} - {age} years old
      </div>
      <div>Celular: {data.celular}</div>
      <div>Correo: {data.correo}</div>
    </>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  age: PropTypes.number.isRequired,
  data: PropTypes.shape({
    celular: PropTypes.number.isRequired,
    correo: PropTypes.string.isRequired
  })
}

export default Welcome;