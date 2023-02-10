import "./styles.scss";

export const Input: React.FC<React.ComponentPropsWithoutRef<"input">> = ({
  ...rest
}) => {
  return <input type="text" className="input" {...rest} />;
};
