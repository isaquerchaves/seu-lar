interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  color = "#007bff",
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`shadow-md h-full w-full border rounded-full text-white font-medium md:rounded-xl transform transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
