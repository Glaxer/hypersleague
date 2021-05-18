import React from "react";
import Logo from "../images/logo.png";
import Discord from "../images/discord.svg";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Hypers League vil være <i> DEN STØRSTE DANSKE RL LIGA </i> og vi
              arbejder hårdt på at give noget til det danske RL miljø.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/matches">Kampe</a>
              </li>
              <li>
                <a href="/standings">Stilling</a>
              </li>
              <li>
                <a href="/rules">Regler</a>
              </li>
              <li>
                <a href="/about">Om os</a>
              </li>
              <li>
                <a href="/sponsors">Sponsorer</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <img src={Logo} width="150" height="190" alt="Hypers League logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by Hypers League
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="twitter" href="https://twitter.com/HypersLeague">
                  <i className="fa fa-twitter">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685
              6.685 0 0 0 16 3.542a6.658 6.658 0 0
              1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0
              7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64
              6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057
              3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344
              0 0 0 5.026 15z"
                      />
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a className="twitch" href="https://twitch.tv/HypersLeague">
                  <i className="fa fa-twitch">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitch"
                    >
                      <path
                        d="M3.857 0L1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714
              7.429l-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"
                      />
                      <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a className="discord" href="https://discord.com/HypersLeague">
                  <i className="fa fa-discord">
                    <img
                      src={Discord}
                      alt="Discord SVG"
                      width="20"
                      height="20"
                      className="bi bi-discord"
                    >
                    </img>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
