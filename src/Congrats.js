import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object}  - React props.
 * @returns {JSX.Element} - Rendered component (or null if `succes` prop is not found)
 */
const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test='component-congrats' className='alert alert-success'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats'></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool,
};

export default Congrats;
