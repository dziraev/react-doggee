import './input.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  const className = isError ? 'input_error' : '';
  return (
    <>
      <input className={className} {...props} />
      {isError && helperText && <div className='input_error_text'>{helperText}</div>}
    </>
  );
};
