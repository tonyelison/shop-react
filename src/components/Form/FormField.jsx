import PropTypes from 'prop-types';

const Input = ({ name, label, type }) => {
  return (
    <div key={name} className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type={type || 'text'}
        id={name}
        name={name}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
