import "./styles.scss";

export const Image: React.FC<React.ComponentPropsWithoutRef<"img">> = ({
  ...rest
}) => {
  return <img alt="" className="image" {...rest} />;
};
