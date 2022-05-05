import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="name-frame">
            <span class="name">
              SANDY
            </span>
          </div>
        </div>
        <div className="right">
          {/* TODO: Update hrefs */}
          <div className="page-frame">
            <a className="page-name" href="#contact">GARDEN</a>
          </div>
          <div className="page-frame">
            <a className="page-name" href="#contact">MANIFESTO</a>
          </div>
          <div className="page-frame">
            <a className="page-name" href="#contact">RESUME</a>
          </div>
          <div className="page-frame">
            <a className="page-name" href="#contact">LINKEDIN</a>
          </div>
          <div className="page-frame">
            <a className="page-name" href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  )
}
