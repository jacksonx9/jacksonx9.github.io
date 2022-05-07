import "./topbar.scss";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <span className="name">
            SANDY
          </span>
        </div>
        <div className="right">
          <div className="page-frame">
            <a className="page-name" href="#intro">GARDEN</a>
          </div>
          <div className="page-frame">
            {/* <Link to="/signup"> */}
              <span className="page-name">MANIFESTO</span>
            {/* </Link> */}
          </div>
          <div className="page-frame">
            <a className="page-name" href="https://drive.google.com/file/d/1AzvcaJrRYNHisR6ar0AFySibZW4tGUk7/view">RESUME</a>
          </div>
          <div className="page-frame">
            <a className="page-name" href="https://www.linkedin.com/in/-sandy-nguyen/">LINKEDIN</a>
          </div>
          <div className="page-frame">
            <a className="page-name" href="mailto:sandynguyen1276@gmail.com">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  )
}
