import { useState } from 'react';
import { Field } from '../types/Field';

export const useField = <T>(initalValue: T): Field<T> => {
  const [value, setValue] = useState<T>(initalValue);

  const onChange = (newValue: T) => {
    setValue(newValue);
  };

  const onReset = () => {
    setValue(initalValue);
  };

  return {
    value,
    onChange,
    onReset
  }
};