import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <h1 color="mainColor">Jackson</h1>
        </div>
        <div className="right">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
