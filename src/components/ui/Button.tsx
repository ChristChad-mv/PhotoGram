import * as React from 'react';

interface IButtonProps {
  label: string, 
  onClick: () => void,
}

const Button: React.FunctionComponent<IButtonProps> = ({ label, onClick }) => {
  return (
      <button 
        className='px-6 py-2 text-white ease-in rounded-lg bg-primary hover:bg-slate-700'
        onClick={onClick}
      >
        {label}
      </button>
  );
};

export default Button;
