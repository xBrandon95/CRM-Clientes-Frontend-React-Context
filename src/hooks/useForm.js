import { useState } from 'react';

const useForm = initialState => {
  const [state, setState] = useState(initialState);

  const handleInputChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setState(initialState);
  };

  return [state, handleInputChange, setState, reset];
};

export default useForm;
