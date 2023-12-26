import PropTypes from 'prop-types';

const Input = ({ name, label, type, required }) => {
  return (
    <div key={name} className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type={type || 'text'}
        id={name}
        name={name}
        required={required}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
