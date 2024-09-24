import * as React from 'react';

interface IInputProps {
  type: string, 
  placeholder: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string, 
  label: string,
}

const Input: React.FunctionComponent<IInputProps> = ({ type, placeholder, onChange, value, label }) => {
  return (
      <div className='mt-2'>
          <h1 className='text-[17px]'> {label} </h1>
          <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className='w-full p-2 my-2 border rounded-md outline-none border-primary'
        >
        </input>
      </div>
  );
};

export default Input;
