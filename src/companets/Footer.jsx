import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div>


<footer className="site-footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src="./hhh.png" alt="" />
          <p className="footer-description">
            Join our Discord channel or follow us on Twitter to keep up-to-date with our latest work and announcements.
          </p>
         
        </div>


        <div className="footer-links">
          <h3 className="footer-links-title">Quick Link</h3>
          <ul className="footer-links-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>


        <div className="footer-community">
          <h3 className="footer-links-title">Community</h3>
          <ul className="footer-links-list">
            <li><a href="#">How it works!</a></li>
            <li><a href="#">Blockchain</a></li>
            <li><a href="#">Get in touch</a></li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright © 2023 NFTHub. All Rights Reserved.
        </p>
        <div className="footer-legal">
          <a href="#">Privacy policy</a>
          <span className="separator">|</span>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>


      
    </div >
  )
}

export default Footer
