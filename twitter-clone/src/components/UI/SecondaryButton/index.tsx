import './styles.scss';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
};

function SecondaryButton({ children, onClick, type, className }: SecondaryButtonProps) {
  return (
    <button
      className={`secondary-button ${className || ''}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
