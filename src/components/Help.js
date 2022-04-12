import React from "react";
import { Link } from "react-router-dom";
import "./help.css";
import netflixarrow from "./netflixarrow.svg";
import netflixhelp from "./netflixhelp.jpeg";
import searchnet from "./searchnet.svg";

const userimage1 = {
  backgroundImage: `url(${netflixarrow})`,
};
const userimage2 = {
  backgroundImage: `url(${netflixhelp})`,
};
const userimage3 = {
  backgroundImage: `url(${searchnet})`,
};

const Contact = () => {
  return (
    <>
      <main className="page-home1">
        <div className="global-container1" />`
        <div className="global-header1">
          <div className="overlay"></div>

          <div className="container1">
            <div className="inner-container1">
              <div className="branding">
                <Link className="netflix-logo" to="/home" title="Netflix">
                  <svg
                    className="netflix-svg"
                    width="88px"
                    height="32px"
                    viewBox="0 0 111 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#e50914"
                      d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"
                    ></path>
                  </svg>
                </Link>
              </div>

              <div className="actions">
                <a
                  href="https://netflix.com/signup"
                  className="btn btn-light btn-med free-month"
                  data-beacon-anchor="action=signUpClicked"
                >
                  Join Netflix
                </a>

                <a
                  href="https://netflix.com/Login?nextpage=https%3A%2F%2Fhelp.netflix.com%2F"
                  className="btn btn-primary btn-med sign-in-link"
                  data-beacon-anchor="action=signInClicked"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="search-form-container">
          <div id="search-placeholder">
            <form action="/en/search">
              <div className="input-group">
                <div
                  role="combobox"
                  aria-haspopup="listbox"
                  aria-owns="react-autowhatever-1"
                  aria-expanded="false"
                  className="react-autosuggest__container"
                >
                  <div className="search-control-wrapper">
                    <input
                      type="text"
                      autocomplete="off"
                      aria-autocomplete="list"
                      aria-controls="react-autowhatever-1"
                      className="form-control"
                      name="q"
                      id="search-input"
                      placeholder="What do you need help with?"
                      aria-label="Search"
                      value=""
                    />
                    <button
                      className="search-control"
                      type="submit"
                      tabindex="-1"
                    >
                      Search
                    </button>
                  </div>
                  <div
                    id="react-autowhatever-1"
                    role="listbox"
                    className="react-autosuggest__suggestions-container"
                  ></div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="personalization-placeholder">
          <div id="personalization-container" className="personalization">
            <div className="personalization-module sign-in-gate">
              <div className="container1">
                <h2 className="personalization-intro">
                  Sign in for personalized help
                </h2>
                <div className="buttons">
                  <a
                    href="https://netflix.com/Login?locale=en&amp;nextpage=https%3A%2F%2Fhelp.netflix.com%2Fen%2F"
                    className="btn btn-primary"
                  >
                    Sign In
                  </a>
                  <a
                    href="https://netflix.com/signup"
                    className="btn btn-secondary"
                  >
                    Join Netflix
                  </a>
                </div>
              </div>
            </div>
            <div className="personalization-module">
              <div className="container1">
                <div id="device-errors-container" className="device-errors">
                  <div id="recommendations-placeholder">
                    <div className="recommendations">
                      <p className="recommendations-title">Popular topics</p>
                      <div className="recommendations-wrapper">
                        <div className="recommendation">
                          <div className="help-card">
                            <a href="/en/node/112419">
                              <img
                                className="icon"
                                alt="How to sign up for Netflix"
                                src="https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg"
                              />
                              <h3 className="title">
                                How to sign up for Netflix
                              </h3>
                            </a>
                          </div>
                        </div>
                        <div className="recommendation">
                          <div className="help-card">
                            <a href="/en/node/24926">
                              <img
                                className="icon"
                                alt="Plans and Pricing"
                                src="https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg"
                              />
                              <h3 className="title">Plans and Pricing</h3>
                            </a>
                          </div>
                        </div>
                        <div className="recommendation">
                          <div className="help-card">
                            <a href="/en/node/470">
                              <img
                                className="icon"
                                alt="Can't sign in to Netflix"
                                src="https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg"
                              />
                              <h3 className="title">
                                Can't sign in to Netflix
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="global-content">
          <div className="container1">
            <section className="top-articles">
              <div id="top-articles-placeholder" className="categories">
                <div className="category">
                  <div className="category-wrapper">
                    <h2 className="category-title">Getting Started</h2>
                    <ol className="articles">
                      <li className="top-article">
                        <a href="/en/node/112419?ui_action=kb-article-popular-categories">
                          How to sign up for Netflix
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/412?ui_action=kb-article-popular-categories">
                          What is Netflix?
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/24926?ui_action=kb-article-popular-categories">
                          Plans and Pricing
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="category">
                  <div className="category-wrapper">
                    <h2 className="category-title">Can't Watch</h2>
                    <ol className="articles">
                      <li className="top-article">
                        <a href="/en/node/365?ui_action=kb-article-popular-categories">
                          How to change your Netflix password
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/59095?ui_action=kb-article-popular-categories">
                          Netflix says to sign up when trying to sign in
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/57688?ui_action=kb-article-popular-categories">
                          Netflix says 'This app is not compatible with your
                          device.'
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="category">
                  <div className="category-wrapper">
                    <h2 className="category-title">Manage My Account</h2>
                    <ol className="articles">
                      <li className="top-article">
                        <a href="/en/node/470?ui_action=kb-article-popular-categories">
                          Can't sign in to Netflix
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/2070?ui_action=kb-article-popular-categories">
                          How to restart your Netflix account
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/111934?ui_action=kb-article-popular-categories">
                          Netflix account email was changed without permission
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="category">
                  <div className="category-wrapper">
                    <h2 className="category-title">Watching Netflix</h2>
                    <ol className="articles">
                      <li className="top-article">
                        <a href="/en/node/14361?ui_action=kb-article-popular-categories">
                          What devices can I use to stream Netflix?
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/33222?ui_action=kb-article-popular-categories">
                          How to watch Netflix on your TV
                        </a>
                      </li>
                      <li className="top-article">
                        <a href="/en/node/54816?ui_action=kb-article-popular-categories">
                          How to download titles to watch offline
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="category quick-links">
                <div className="category-wrapper">
                  <h2 className="category-title">Quick Links</h2>

                  <ol className="quick-links">
                    <li className="top-article">
                      <a
                        href="https://netflix.com/password"
                        data-beacon="action=UpdatePasswdLink"
                        target="_blank"
                        rel="noopener"
                      >
                        Reset password
                        <img
                          src="https://help.nflxext.com/helpcenter/5177e9c….svg"
                          alt=""
                        />
                      </a>
                    </li>

                    <li className="top-article">
                      <a
                        href="https://netflix.com/email"
                        data-beacon="action=UpdateEmailLink"
                        target="_blank"
                        rel="noopener"
                      >
                        Update email
                      </a>
                    </li>

                    <li className="top-article">
                      <a
                        href="https://netflix.com/loginhelp"
                        data-beacon="action=SigninHelpLink"
                        target="_blank"
                        rel="noopener"
                      >
                        Get help signing in
                      </a>
                    </li>

                    <li className="top-article">
                      <a
                        href="https://netflix.com/YourAccountPayment"
                        data-beacon="action=UpdatePaymentLink"
                        target="_blank"
                        rel="noopener"
                      >
                        Update payment method
                      </a>
                    </li>

                    <li className="top-article">
                      <a
                        href="/en/titlerequest?ui_action=title-suggestion-quicklinks"
                        data-beacon-anchor="action=titlesuggestion"
                      >
                        Request TV shows or movies
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
          <div className="footer-push1"></div>
        </div>
        <div id="back-to-chat-placeholder"></div>
        <div id="footer" className="global-footer">
          <div id="contact-bar" className="global-contactbar">
            <div className="container">
              <h3 className="bar-title">Want to contact us?</h3>

              <div className="contact-channels">
                <div id="phone-contact" className="channel popover-wrapper">
                  <a
                    href="#callus"
                    id="phoneContactTrigger"
                    className="btn btn-lightgrey popover-trigger"
                  >
                    Call Us
                  </a>

                  <div className="phonePopover phone-popover popover top lang-en">
                    <div className="popover-content"></div>

                    <button className="close popover-close">Close</button>
                  </div>
                </div>

                <div className="channel">
                  <div
                    id="chat-contact"
                    className="popover-wrapper chat-btn-wrapper channel"
                    data-enablemobilechat="true"
                  >
                    <a
                      href="#startChat"
                      id="startChatTrigger"
                      className="btn btn-lightgrey start-chat-button beacon-event"
                      data-beacon="action=ChatButton"
                      data-locale="en"
                      data-country="US"
                    >
                      Start Live Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dark-area container1">
            <div id="lang-switcher-wrapper" className="select-wrapper">
              <div className="select select-grey">
                <select
                  id="lang-switcher"
                  aria-label="Select your preferred language:"
                >
                  <option value="id">Bahasa Indonesia</option>

                  <option value="ms">Bahasa Melayu</option>

                  <option value="cs">Čeština</option>

                  <option value="da">Dansk</option>

                  <option value="de">Deutsch</option>

                  <option value="en" selected="selected">
                    English
                  </option>

                  <option value="es">Español</option>

                  <option value="fr">Français</option>

                  <option value="hr">Hrvatski</option>

                  <option value="it">Italiano</option>

                  <option value="hu">Magyar</option>

                  <option value="nl">Nederlands</option>

                  <option value="nb">Norsk Bokmål</option>

                  <option value="pl">Polski</option>

                  <option value="pt">Português</option>

                  <option value="ro">Română</option>

                  <option value="fi">Suomi</option>

                  <option value="sv">Svenska</option>

                  <option value="vi">Tiếng Việt</option>

                  <option value="tr">Türkçe</option>

                  <option value="el">Ελληνικά</option>

                  <option value="ru">Русский</option>

                  <option value="uk">Українська</option>

                  <option value="he">עברית</option>

                  <option value="ar">العربية</option>

                  <option value="hi">हिन्दी</option>

                  <option value="th">ไทย</option>

                  <option value="zh-tw">中文</option>

                  <option value="ja">日本語</option>

                  <option value="ko">한국어</option>
                </select>

                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path
                    d="M12.9416531,7.71264972 L17.9520258,15.2282087 C18.4421897,15.9634546 18.2435115,16.9568456 17.5082656,17.4470095 C17.2454376,17.6222282 16.9366253,17.715729 16.6207453,17.715729 L6.6,17.715729 C5.7163444,17.715729 5,16.9993846 5,16.115729 C5,15.799849 5.09350084,15.4910367 5.26871953,15.2282087 L10.2790922,7.71264972 C10.7692561,6.97740382 11.7626471,6.77872563 12.497893,7.26888957 C12.6736566,7.38606534 12.8244774,7.53688606 12.9416531,7.71264972 Z"
                    transform="translate(11.610458, 12.357865) scale(1, -1) translate(-11.610458, -12.357865) "
                  ></path>
                </svg>
              </div>
            </div>

            <ul className="footer-links">
              <li className="legalese-item">
                <a href="/en/legal/termsofuse">Terms of Use</a>
              </li>
              <li className="legalese-item">
                <a href="/en/legal/privacy">Privacy</a>
              </li>
              <li className="legalese-item">
                <a
                  href="/en/legal/privacy#cookies"
                  className="evidon-trigger toggle-cookie-info"
                >
                  Cookie Preferences
                </a>
              </li>

              <li className="legalese-item">
                <a href="/en/legal/corpinfo">Corporate Information</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
