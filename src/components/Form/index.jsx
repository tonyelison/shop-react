import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Form = ({ submitHandler, isLoading }) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <input type="submit" value="Sign Up" />
      {isLoading ? <Spinner animation="border" /> : ''}
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Form;
