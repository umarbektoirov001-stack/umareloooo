import React from 'react'
import "./main.css"
function Main() {
  return (
    <div>

<section className="collection">
  <h2>Nfthub's <span>collection</span></h2>

  <div className="cards">
    <div className="nft-card">
      <img src="https://uc.od.ua/content/documents/12389/1238833/thumb-item-640x609-010f.png" alt="" />
      
      <h4>#Metaverse</h4>
      <p>By TheSalvare</p>
    </div>

    <div className="nft-card">
      <img src="https://uc.od.ua/content/documents/12389/1238833/thumb-item-640x609-010f.png" alt="" />
      
      <h4>#Polly Doll</h4>
      <p>By TheNative</p>
    </div>

    <div className="nft-card">
      <img src="https://uc.od.ua/content/documents/12389/1238833/thumb-item-640x609-010f.png" alt="" />
      
      <h4>#Alec Art</h4>
      <p>By Georgi</p>
    </div>

    <div className="nft-card">
      <img src="https://uc.od.ua/content/documents/12389/1238833/thumb-item-640x609-010f.png" alt="" />
      
      <h4>#Toxic Poeth</h4>
      <p>By Zaziolab</p>
    </div>
  </div>

  <button className="btn">View collection →</button>
</section>


<section className="why">
  <h2>Why <span>choose us?</span></h2>

  <div className="why-cards">
    <div className="why-card">
          <img src="./oo.png" alt="" />
      <h4>Huge collection</h4>
      <p>A collection of 890
unique Nerkos built to go
beyond the digital space.</p>
    </div>

    <div className="why-card">
      <img src="./mmm.png" alt="" />
      <h4>High quality</h4>
      <p>The nerko’s collection
includes dozens of rare
costumes ands colorways
of artist's.</p>
    </div>

    <div className="why-card">
      <img src="./ggg.png" alt="" />
      <h4>Top resource</h4>
      <p>Tasty design resources
made with care for each
pixel. NFTs and game
resources.</p>
    </div>

    <div className="why-card">
  <img src="./pp.png" alt="" />
      <h4>Big community</h4>
      <p>Be part of a community of
nerko owners and create
user generated items.</p>
    </div>
  </div>
</section>


<header>
        <div class="stats">
            <div class="stat-item">
                <div class="stat-number">400k+</div>
                <div class="stat-label">Wallets Connected</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">20k+</div>
                <div class="stat-label">Wallets Connected</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">230+</div>
                <div class="stat-label">Creative artists</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">2.5x</div>
                <div class="stat-label">Estimated value</div>
            </div>
        </div>
        <h1>How it works!</h1>
    </header>

<section className="how-it-works">
  
      <div className="step">
        <div className="step-text">
          <div className="step-number">01.</div>
          <h2 className="step-title">Setup and connect your wallet.</h2>
          <p>Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Metamask or any wallet ipsam temporibus.</p>
          <a  className="learn-more">Learn more →</a>
        </div>
        <div className="step-image">
          <img 
            src="https://www.shutterstock.com/image-illustration/purple-3d-wallet-floating-cryptocurrency-coins-260nw-2664875267.jpg" 
            alt="Purple wallet with Bitcoin coins" 
          />
        </div>
      </div>


      <div className="step reverse">
        <div className="step-text">
          <div className="step-number">02.</div>
          <h2 className="step-title">Create your own digital artwork</h2>
          <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artwork's &amp; digital artwork.</p>
          <p>Starting the production on the procedurally generated planets and the smart contract for minting.</p>
          <a className="learn-more">Learn more →</a>
        </div>
        <div className="step-image">
          <img 
            src="https://thumbs.dreamstime.com/b/digital-world-painting-nft-community-support-artists-collectors-online-art-gallery-digital-world-painting-nft-community-319395946.jpg" 
            alt="Artist creating digital NFT artwork" 
          />
        </div>
      </div>

    </section>


    <div className="step">
        <div className="step-text">
          <div className="step-number">03.</div>
          <h2 className="step-title">Choose a platform to sell your NFT</h2>
          <p>Earn ETH and BT for all your NFTs that you sell on our marketplace.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Recusandae doloremque a officiis quasi autem.</p>
          <a href="#" className="learn-more">Learn more →</a>
        </div>
        <div className="step-image">
          <img 
            src="https://thumbs.dreamstime.com/b/cyberpunk-nft-marketplace-ai-generated-image-398083237.jpg" 
            alt="Laptop with SELL sign and floating NFT coins" 
          />
        </div>
      </div>

      <div className="newsletter-section">
        <div className="newsletter-card">
          <h2 className="newsletter-title">Never miss a drop!</h2>
          <p className="newsletter-subtitle">Subscribe to our super-rare and exclusive drops & collectibles.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>


      <div className="roadmap-section">
        <h2 className="roadmap-title">Nfthub’s Roadmap</h2>
        <div className="roadmap-grid">

          <div className="phase-card">
            <div className="phase-header">
              <span className="phase-label">PHASE 01</span>
              <span className="phase-percent">40%</span>
            </div>
            <h3 className="phase-title">Planning</h3>
            <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
            <ul className="phase-list">
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
            </ul>
          </div>

          <div className="phase-card">
            <div className="phase-header">
              <span className="phase-label">PHASE 02</span>
              <span className="phase-percent">25%</span>
            </div>
            <h3 className="phase-title">Production</h3>
            <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
            <ul className="phase-list">
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
            </ul>
          </div>


          <div className="phase-card">
            <div className="phase-header">
              <span className="phase-label">PHASE 03</span>
              <span className="phase-percent">80%</span>
            </div>
            <h3 className="phase-title">Launch</h3>
            <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
            <ul className="phase-list">
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
            </ul>
          </div>


          <div className="phase-card">
            <div className="phase-header">
              <span className="phase-label">PHASE 04</span>
              <span className="phase-percent">25%</span>
            </div>
            <h3 className="phase-title">Minting</h3>
            <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
            <ul className="phase-list">
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
            </ul>
          </div>


          <div className="phase-card">
            <div className="phase-header">
              <span className="phase-label">PHASE 05</span>
              <span className="phase-percent">56%</span>
            </div>
            <h3 className="phase-title">New NFTs</h3>
            <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
            <ul className="phase-list">
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
            </ul>
          </div>

          <div className="phase-card">
            <div className="phase-header">
              <span className="phase-label">PHASE 06</span>
              <span className="phase-percent">10%</span>
            </div>
            <h3 className="phase-title">Metaverse</h3>
            <p>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
            <ul className="phase-list">
              <li>Release website and logo</li>
              <li>Grow community</li>
              <li>Launch the project</li>
            </ul>
          </div>
        </div>
      </div>


      <section className="artists-section">
        <h2 className="section-title">Meet the artists</h2>
        <div className="artists-grid">
   
          <div className="artist-card">
            <div className="artist-avatar">
              <img 
                src="https://i.redd.it/hvg746l8kumb1.jpg" 
                alt="Steve Jobs" 
              />
            </div>
            <h3 className="artist-name">Steve Jobs</h3>
            <p className="artist-role">Artist</p>
            <div className="artist-social">
              <a href="#">📷</a>
              <a href="#">🔔</a>
            </div>
          </div>

    
          <div className="artist-card">
            <div className="artist-avatar">
              <img 
                src="https://png.pngtree.com/background/20230519/original/pngtree-the-batman-face-in-the-dark-picture-image_2657106.jpg" 
                alt="Andry Moray" 
              />
            </div>
            <h3 className="artist-name">Andry Moray</h3>
            <p className="artist-role">Co-Founder</p>
            <div className="artist-social">
              <a href="#">📷</a>
              <a href="#">🔔</a>
            </div>
          </div>

  
          <div className="artist-card">
            <div className="artist-avatar">
              <img 
                src="https://upload.wikimedia.org/wikipedia/ru/3/35/Hulk_Marvel.png" 
                alt="Zaid Ed" 
              />
            </div>
            <h3 className="artist-name">Zaid Ed</h3>
            <p className="artist-role">Designer</p>
            <div className="artist-social">
              <a href="#">📷</a>
              <a href="#">🔔</a>
            </div>
          </div>

          <div className="artist-card">
            <div className="artist-avatar">
              <img 
                src="https://uc.od.ua/content/documents/12389/1238833/thumb-item-640x609-010f.png" 
                alt="Lala Ed" 
              />
            </div>
            <h3 className="artist-name">Lala Ed</h3>
            <p className="artist-role">Marketing</p>
            <div className="artist-social">
              <a href="#">📷</a>
              <a href="#">🔔</a>
            </div>
          </div>
        </div>
      </section>


      <section className="faq-section">
        <h2 className="section-title">Your questions, answered!</h2>

        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat proident.
Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat proident.</p>
        <div className="faq-card">
          <details className="faq-item">
            <summary>What is Nfthub's NFT Collection?</summary>
            <p>Data quia iure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident.</p>
          </details>

          <details className="faq-item">
            <summary>How we can buy and invest NFT?</summary>
            <p>Detailed answer about buying and investing in NFTs...</p>
          </details>

          <details className="faq-item">
            <summary>Why we should choose Nfthub's NFT?</summary>
            <p>Detailed answer about benefits...</p>
          </details>

          <details className="faq-item">
            <summary>Where we can buy and sell NFTs?</summary>
            <p>Detailed answer about marketplace...</p>
          </details>

          <details className="faq-item">
            <summary>How secure is this token?</summary>
            <p>Detailed answer about security...</p>
          </details>

          <details className="faq-item">
            <summary>What is your contract address?</summary>
            <p>Detailed answer with contract address...</p>
          </details>
        </div>
      </section>

      <section className="minting-section">
        <div className="minting-card">
          <h2 className="minting-title">Let's start <span>minting</span></h2>
          <p className="minting-subtitle">Invest and manage all your NFTs at one place.</p>
          <a  className="minting-btn">Get started →</a>
        </div>
      </section>







    </div>
  )
}

export default Main
