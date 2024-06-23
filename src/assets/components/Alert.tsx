import { ReactNode } from "react";

interface Props {
  type: string;
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, type, onClose }: Props) => {
  return (
    <div className={"alert alert-" + type + " alert-dismissible fade show"}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
