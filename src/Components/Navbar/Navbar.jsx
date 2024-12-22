import { Link } from "react-router-dom";
import Navcard from "./Navcard";

function Navbar() {
  return (
    <div className="side_navbar">
      <div className="d-flex flex-column gap-5">
        <header className="Main-brand">
          <h1>Proskills</h1>
        </header>
        <div className="Nav_items p-3">
          <Link className="Nav_links">
            <Navcard name="Home">
              <i className="fa-solid fa-house"></i>
            </Navcard>
          </Link>

          <Link className="Nav_links">
            <Navcard name="About Us">
              <i className="fa-solid fa-circle-info"></i>
            </Navcard>
          </Link>

          <Link className="Nav_links">
            <Navcard name="Learning Path">
              <i className="fa-solid fa-shapes"></i>
            </Navcard>
          </Link>

          <Link className="Nav_links">
            <Navcard name="Courses">
              <i className="fa-solid fa-newspaper"></i>
            </Navcard>
          </Link>

          <Link className="Nav_links">
            <Navcard name="Community">
              <i className="fa-solid fa-users"></i>
            </Navcard>
          </Link>

          <Link className="Nav_links">
            <Navcard name="Support">
              <i className="fa-solid fa-headset"></i>
            </Navcard>
          </Link>
        </div>
      </div>
      <div className="Nav_footer d-flex align-items-center">
        <i className="fa-solid fa-gear"></i>
        <p style={{ margin: "0" }}>Settings</p>
      </div>
    </div>
  );
}

export default Navbar;
