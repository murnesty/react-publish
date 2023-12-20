import IconName from "../IconName";

const Sidebar = () => {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    padding: "1em",
  };

  return (
    <div className="bg-dark d-none" style={styles} data-bs-theme="dark">
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
