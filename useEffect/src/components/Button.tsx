import "./Button.css";

type IButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};
