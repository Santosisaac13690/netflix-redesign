import React from "react";
import { Link } from "react-router-dom";
import "../partials/_login.scss";
import Footer from "./Footer";

const Login = () => {

  return (
    <>
      <div className="netlfix-container">
        <header className="login-header">
          <div class="header-top">
            <div class="left">
              <img src="netflixLogo.png" alt="Netflix" />
            </div>
            <div class="right">
              <select>
                <option>English</option>
                <option>Espanol</option>
              </select>
              <Link to="/popuplogin">
                <button className="signIn-btn">Sign In</button>
              </Link>
            </div>
          </div>
          <div class="header-content">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h5>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div class="get-started">
              <input type="text" placeholder="Email address" />
              <button>Get Started &#x276D;</button>
            </div>
          </div>
        </header>

        <main>
          <div class="first">
            <div class="first-text">
              <h1>Enjoy on your TV.</h1>
              <h3>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </div>
            <div class="first-animation">
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

          <div class="second">
            <div class="second-animation">
              <div class="animation">
                <img src="boxshot.png" alt="boxshot" />
                <div class="animation-text">
                  <h6>Stranger Things</h6>
                  <h6>Downloading...</h6>
                </div>
                <div class="download">
                  <div class="timer">
                    <div class="mask"></div>
                  </div>
                </div>
              </div>
              <img src="netflix-mobile.jpeg" alt="mobile" />
            </div>
            <div class="second-text">
              <h1>Download your shows to watch offline.</h1>
              <h3>
                Save your favorites easily and always have something to watch.
              </h3>
            </div>
          </div>

          <div class="third">
            <div class="third-text">
              <h1>Watch everywhere.</h1>
              <h3>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </h3>
            </div>
            <div class="third-animation">
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

          <div class="fourth">
            <img src="netflix-kids.png" alt="kids" />
            <div class="fourth-text">
              <h1>Create profiles for kids.</h1>
              <h3>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h3>
            </div>
          </div>

          <div class="fifth">
            <div class="fifth-text">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div class="faq">
              <div class="faq-container">
                <div class="faq-header">
                  <h3>What is Netflix</h3>
                  <h3>&#10011;</h3>
                </div>
                <div class="faq-body hidden">
                  <h3>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </h3>
                  <h3>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </h3>
                </div>
              </div>

              <div class="faq-container">
                <div class="faq-header">
                  <h3>How much does it cost?</h3>
                  <h3>&#10011;</h3>
                </div>
                <div class="faq-body hidden">
                  <h3>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from USD7.99 to USD11.99 a month. No extra costs, no
                    contracts.
                  </h3>
                </div>
              </div>

              <div class="faq-container">
                <div class="faq-header">
                  <h3>Where can I watch</h3>
                  <h3>&#10011;</h3>
                </div>
                <div class="faq-body hidden">
                  <h3>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                  </h3>
                  <h3>
                    You can also download your favorite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </h3>
                </div>
              </div>

              <div class="faq-container">
                <div class="faq-header">
                  <h3>How do I cancel?</h3>
                  <h3>&#10011;</h3>
                </div>
                <div class="faq-body hidden">
                  <h3>
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </h3>
                </div>
              </div>

              <div class="faq-container">
                <div class="faq-header">
                  <h3>What can I watch on Netflix?</h3>
                  <h3>&#10011;</h3>
                </div>
                <div class="faq-body hidden">
                  <h3>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </h3>
                </div>
              </div>

              <div class="faq-container">
                <div class="faq-header">
                  <h3>Is Netflix good for kids?</h3>
                  <h3>&#10011;</h3>
                </div>
                <div class="faq-body hidden">
                  <h3>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space.
                  </h3>
                  <h3>
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don’t want kids to see.
                  </h3>
                </div>
              </div>
            </div>

            <div class="fifth-getStarted">
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
              <div class="get-started">
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
