import { Link } from "react-router-dom";
import "./Sidebar.scss";
const logo = "./assets/img/logo.png";
const settings = "./assets/img/settings.png";
const goods = "./assets/img/goods.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bar_links">
        <div className="bar_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="bar_link">
          <Link to="/">
            <img src={settings} alt="settings" />
          </Link>

          <Link to='/goods'>
            <img src={goods} alt="settings" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
