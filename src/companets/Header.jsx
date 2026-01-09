import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>


<header className="navbar">
  <div className="logo">NFTHub</div>
  <nav>
    <a href="#">Home</a>
    <a href="#">Collection</a>
    <a href="#">Choose</a>
    <a href="#">About</a>
    <a href="#">Roadmap</a>
    <a href="#">Blog</a>
  </nav>
</header>

<section className="hero">
  <div className="hero-text">
    <h1>High Quality  NFT Collection</h1>
    <p>
      A 890 piece custom NFTHub’s collection is  
      joining the NFT space on OpenSea.
    </p>
    <button>View in OpenSea →</button>

    <div className="users">
      <span>👥</span>
      <b>47k+</b> Community members
    </div>
  </div>

 
    <img src="./ppp.png" alt="" />
  
</section>

<footer className="partners">
  <span>MetaMask</span>
  <span>BitGo</span>
  <span>Coinbase</span>
  <span>Trust Wallet</span>
  <span>Exodus</span>
</footer>



   
      
    </div>
  )
}

export default Header
