import './styles.scss';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
};

function PrimaryButton({ children, onClick, type, className }: PrimaryButtonProps) {
  return (
    <button
      className={`primary-button ${className || ''}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
