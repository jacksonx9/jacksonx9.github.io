import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <span class="Title title-position">
        TRUSTED
        BY MANY<span class="Dashes">//</span>
      </span>

      <div class="Red-highlighting red-highlight-position">
        <span class="Quotation">
          I believe good design is where art, community, and technology fuse to create magic
        </span>
      </div>

      <span class="Quotation quotation-position-1">
        Jump down the rabbit hole with me and lets get started on a new project together.<br />
        Contact me through any of the following.<br />
        <br />
        I’ve designed for the following companies. However, when I’m not pixel pushing, you<br />
        can catch me working on web3 stealth startups or personal projects.
      </span>

      <ul className="portfolio-list">
        <li className="box">
          <img src="images/double-jump-icon.jpg" alt="Double Jump" className="image"/>
          <span className="portfolio-title">
            DOUBLE JUMP
          </span>
          {/* <span class="content">
            <strong>Johnny Realestate</strong>
            <a href="mailto:johnny@realestate.io" title="Email Johnny">johnny@realestate.io</a>
            <a href="tel:2223334444" title="Call Johnny">222.333.4444</a>
            <address>
              1 Real Estate Court<br>
              suite 101<br>
              Real, AZ 10101
            </address>
          </span> */}
        </li>
      </ul>



      <span class="Quotation quotation-position-2">
        Curious about my work? Fall into the
        <button class="Black-button black-button-sizing">
          Rabit Hole ↓
        </button>
      </span>
    </div>
  )
}
