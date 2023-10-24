type ButtonProps = {
  title: string;
  className?: string;
  disabled?: boolean;
  type: "submit" | "button" | "reset";
  onClick: (...args: any[]) => void;
  ariaLabel: string;
  role?: string;
};

const Button = ({
  title,
  className,
  disabled,
  type,
  onClick,
  ariaLabel,
  role
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={className}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      role={role}
    >
      {title}
    </button>
  );
};

export default Button;
