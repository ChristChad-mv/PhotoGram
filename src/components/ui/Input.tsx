import * as React from 'react';

interface IInputProps {
  type: string, 
  placeholder: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string, 
}

const Input: React.FunctionComponent<IInputProps> = ({ type, placeholder, onChange, value }) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className='w-full p-2 my-2 border rounded-md outline-none'
      >

      </input>
  );
};

export default Input;
