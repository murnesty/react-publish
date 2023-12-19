import IconName from "./IconName";

const Sidebar = () => {
  const style = {
    display: "flex",
    "flex-direction": "column",
    gap: "1em",
    padding: "1em",
  };

  return (
    <div className="bg-dark" style={style} data-bs-theme="dark">
      <IconName icon="fa-solid fa-compass-drafting" heading="Planner" />

      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            2024
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            2025
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
