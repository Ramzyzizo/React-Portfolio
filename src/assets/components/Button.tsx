interface Props {
  children: string;
  onCLick: () => void;
  color?: "primary" | "scondary" | "danger" | "info";
}

const Button = ({ children, onCLick, color = "primary" }: Props) => {
  return (
    // <button className={`btn btn-${color} px-4`} onClick={onCLick}>
    //   {children}
    // </button>
    <button className={"btn btn-" + color + " px-4"} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
