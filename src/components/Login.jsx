import React from "react";
import { Link } from "react-router-dom";
import "../partials/_login.scss";
import Footer from "./Footer";
import Faq from "./Faq";
import faqs from "../data/faq.json";

const Login = () => {

  return (
    <>
      <div className="netlfix-container">
        <header>
          <div className="header-top">
            <div className="left">
              <img src="netflixLogo.png" alt="Netflix" />
            </div>
            <div className="right">
              <select>
                <option>English</option>
                <option>Espanol</option>
              </select>
              <Link to="/popuplogin">
                <button className="signIn-btn">Sign In</button>
              </Link>
            </div>
          </div>
          <div className="header-content">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h5>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div className="get-started">
              <input type="text" placeholder="Email address" />
              <button>Get Started &#x276D;</button>
            </div>
          </div>
        </header>

        <main>
          <div className="first">
            <div className="first-text">
              <h1>Enjoy on your TV.</h1>
              <h3>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </div>
            <div className="first-animation">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <video class="video1" height="340px" width="430px"
                  loop
                  muted
                  autoplay
                  playsinline
                >
                <source src="video-tv-0819.m4v" type="video/mp4" />
                </video>`,
                }}
              />
              {/* <video
                height="200px"
                width="500px"
                autoPlay={true}
                playsInline
                muted=""
                loop
              >
                <source src="video-tv-0819.m4v" type="video/mp4" />
              </video> */}
              <img src="tv.png" alt="tv" />
            </div>
          </div>

          <div className="second">
            <div className="second-animation">
              <div className="animation">
                <img src="boxshot.png" alt="boxshot" />
                <div className="animation-text">
                  <h6>Stranger Things</h6>
                  <h6>Downloading...</h6>
                </div>
                <div className="download">
                  <div className="timer">
                    <div className="mask"></div>
                  </div>
                </div>
              </div>
              <img src="netflix-mobile.jpeg" alt="mobile" />
            </div>
            <div className="second-text">
              <h1>Download your shows to watch offline.</h1>
              <h3>
                Save your favorites easily and always have something to watch.
              </h3>
            </div>
          </div>

          <div className="third">
            <div className="third-text">
              <h1>Watch everywhere.</h1>
              <h3>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </h3>
            </div>
            <div className="third-animation">
              <img src="netflix-device-pile.png" alt="devicepile" />
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <video class="video2" height="200px" width="330px"
                  loop
                  muted
                  autoplay
                  playsinline
                >
                <source src="video-devices.mp4" type="video/mp4" />
                </video>`,
                }}
              />
              {/* <video height="200px" width="330px" autoplay muted loop>
                <source src="video-devices.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>

          <div className="fourth">
            <img src="netflix-kids.png" alt="kids" />
            <div className="fourth-text">
              <h1>Create profiles for kids.</h1>
              <h3>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h3>
            </div>
          </div>

          <div className="fifth">
            <div className="fifth-text">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq">
              {faqs.map((faq, key) => (
                <Faq key={key} title={faq.title} body={faq.body} />
              ))}
            </div>

            <div className="fifth-getStarted">
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
              <div className="get-started">
                <input type="text" placeholder="Email address" />
                <button>Get Started &#x276D;</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Login;
