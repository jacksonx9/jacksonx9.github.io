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
          <div className="image-box">
            <img src="images/double-jump-icon.jpg" alt="Double Jump" className="image"/>
          </div>
          <span className="portfolio-title">
            DOUBLE JUMP
          </span>
          <span className="portfolio-position">
            PRODUCT DESIGNER
          </span>
          <span className="portfolio-description">
          Designed their responsive<br />
          website and lite page.<br />
          Web3 gaming startup.
          </span>
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
