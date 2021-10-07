import PropTypes from 'prop-types';
import b from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="button" className={b.Button} onClick={onClick}>
      Load More
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
