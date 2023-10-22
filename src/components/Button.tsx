type ButtonProps = {
  title: string;
  className: string;
  disabled?: boolean;
  type: "submit" | "button" | "reset";
  onClick: (...args: any[]) => void;
  ariaLabel: string;
};

const Button = ({
  title,
  className,
  disabled,
  type,
  onClick,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={className}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
