interface Props {
  icon: string;
  heading: string;
}

const IconName = ({ icon, heading }: Props) => {
  const style = {
    display: "flex",
    gap: ".5em",
  };
  const iconClass = `${icon} m-auto text-white`;

  return (
    <div style={style}>
      <i className={iconClass}></i>
      <h5 className="m-auto text-white">{heading || ""}</h5>
    </div>
  );
};

export default IconName;
