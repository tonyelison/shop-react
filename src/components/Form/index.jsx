import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Form = ({
  title,
  fields,
  submitBtnLabel,
  mutationFn,
  onSuccess,
  onMutateAction,
  onErrorAction,
  onSettledAction,
}) => {
  const [isLoading, setIsLoading] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const mutation = useMutation({
    mutationFn,
    onSuccess,
    onMutate: () => {
      setIsLoading(true);
      onMutateAction?.();
    },
    onError: (message) => {
      setErrorMsg(message || 'Something went wrong. Please try again later.');
      onErrorAction?.();
    },
    onSettled: () => {
      setIsLoading(false);
      onSettledAction?.();
    },
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    const updatedFields = fields.reduce(
      (accumulator, field) => ({
        ...accumulator,
        [field.name]: event.target[field.name].value,
      }),
      {},
    );

    mutation.mutate(updatedFields);
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={submitHandler}>
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
            />
          </div>
        ))}
        <input type="submit" value={submitBtnLabel || 'Submit'} />
        {isLoading ? <Spinner animation="border" /> : ''}
      </form>
      {errorMsg ? <div className="text-danger">{errorMsg}</div> : ''}
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
  submitBtnLabel: PropTypes.string,
  mutationFn: PropTypes.func,
  onSuccess: PropTypes.func,
  onMutateAction: PropTypes.func,
  onErrorAction: PropTypes.func,
  onSettledAction: PropTypes.func,
};

export default Form;
