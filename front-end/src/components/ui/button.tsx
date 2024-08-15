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
      className={`shadow-md h-[50px] w-full border rounded-full text-white font-medium md:rounded-xl`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
