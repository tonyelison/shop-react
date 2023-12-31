import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import FormField from './FormField';

const Form = ({
  title,
  fields,
  submitLabel,
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
      <h1 className="mb-3">{title}</h1>
      <form onSubmit={submitHandler}>
        {fields.map((field) => (
          <FormField key={field.name} {...field} />
        ))}
        <button type="submit" className="btn btn-primary">
          <span>{submitLabel || 'Submit'}</span>
          {isLoading ? <Spinner animation="border" size="sm" /> : ''}
        </button>
      </form>
      {errorMsg ? <div className="text-danger">{errorMsg}</div> : ''}
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
  submitLabel: PropTypes.string,
  mutationFn: PropTypes.func,
  onSuccess: PropTypes.func,
  onMutateAction: PropTypes.func,
  onErrorAction: PropTypes.func,
  onSettledAction: PropTypes.func,
};

export default Form;
