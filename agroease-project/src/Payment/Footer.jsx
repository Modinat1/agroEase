const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-width">
          <div className="container footer-contact-width">
            <div>
              <div className="footer-logo-text">
                <div>
                  <img src="/assets/logo.png" alt="" />
                </div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Voluptas odit autem 
                    illum magni ipsam, molestiae in alias 
                    nesciunt adipisci facilis dolore impedit 
                    fugiat culpa! 
                    Hic saepe itaque alias iste odit.
                  </p>
                </div>
              </div>
              <div className="footer-social">
                <h3>Our Social Pages</h3>
                <div className="social-icons">
                  <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}><path fill="none" d="M0 0h24v24H0z" /><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="rgba(149,164,166,1)" /></svg>
                  </div>
                  <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}><path fill="none" d="M0 0h24v24H0z" /><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="rgba(149,164,166,1)" /></svg>
                  </div>
                  <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}><path fill="none" d="M0 0h24v24H0z" /><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="rgba(149,164,166,1)" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-quicklink">
              <h3>Quick Link</h3>
              <div>
                <ul>
                  <li><a href="/pages/about/about.html">About Us</a></li>
                  <li><a href="/pages/contact/contact.html">Contact Us</a></li>
                  <li><a href="/pages/agronews/agronews.html">Blog</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="/pages/faq/faq.html">FAQs</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-address">
              <h3>Contact</h3>
              <div className="footer-address-abj">
                <p className="green">Abuja</p>
                <div>
                  <p>Tech Specialist, <br /> Wuse Zone 6</p>
                </div>
              </div>
              <div className="footer-address-lag">
                <p className="green">Lagos</p>
                <div>
                  <p>Tech Specialist, <br /> Wuse Zone 6</p>
                </div>
              </div>
              <div className="footer-phone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}><path fill="none" d="M0 0h24v24H0z" /><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="rgba(9,124,13,1)" /></svg>
                <div>
                  <p>08082957336</p>
                </div>
              </div>
              <div className="footer-phone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(9,124,13,1)" /></svg>
                <div>
                  <p>agroease@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-letter">
          <div className="news-letter-width">
            <div>
              <h3>Get News Letter</h3>
            </div>
            <div className="news-email">
              <p>We will send you updates on available products, not spam</p>
              <div className="new-email">
                <p>Email</p>
                <div>
                  <input type="text" />
                  <div className="email">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(9,124,13,1)" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-width">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={12} height={12}><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.82 0 3.413.973 4.288 2.428l-1.714 1.029A3 3 0 1 0 12 15a2.998 2.998 0 0 0 2.573-1.456l1.715 1.028A4.999 4.999 0 0 1 7 12c0-2.76 2.24-5 5-5z" fill="rgba(149,164,166,1)" /></svg>
            <div className="reserved">
              <small>AgroEase 2022. All rights reserved</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
 
export default Footer;