import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import "../../styles/chat.scss";
import Navbar from '../../Components/NavBar/Nav'
import {
  FaMountain,
  FaSignOutAlt,
  FaPlus,
  FaUser,
  FaPlay
} from "react-icons/fa";


const Chat = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 themebg-left text-dark d-none d-xl-block ">
            <br />
            <div className="row">
              <div className="col-8 ">
                <p className="chat-top-word">Channel</p>
              </div>
              <div className="col-4">
                <button type="button" className="chat-plus-bg ">
                  <FaPlus className="iconFa" />
                </button>
              </div>
            </div>
            <hr />
            <form>
              <input
                type="text"
                name="search"
                className="col-12 chat-channel-search"
                placeholder="Search"
              />
            </form>
            <br />
            <div className="row chat-li-side">
              <div className="col-3">
                <button type="button" className="iconTw text-light">
                  FD
                </button>
              </div>
              <div className="col-9 spacing">
                <p className="chat-right-title"> FONTEND-DEVELOPERS</p>
              </div>
            </div>
            <div className="row chat-li-side">
              <div className="col-3">
                <button type="button" className="iconTw text-light">
                  R
                </button>
              </div>
              <div className="col-9 spacing">
                <p> RANDOM</p>
              </div>
            </div>
            <div className="row chat-li-side">
              <div className="col-3">
                <button type="button" className="iconTw text-light">
                  B
                </button>
              </div>
              <div className="col-9 spacing">
                <p> BACK-END</p>
              </div>
            </div>
            <div className="row chat-li-side">
              <div className="col-3">
                <button type="button" className="iconTw text-light">
                  CA
                </button>
              </div>
              <div className="col-9 spacing">
                <p> CATS AND DOGS</p>
              </div>
            </div>
            <div className="row chat-li-side">
              <div className="col-3">
                <button type="button" className="iconTw text-light">
                  W
                </button>
              </div>
              <div className="col-9 spacing">
                <p> WELCOME</p>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row chat-left-footer">
              <div className="col-3">
                <img
                  className="chat-avatar"
                  src="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1646006400&Signature=fG4VINC1Q0HFu6Bmwdcn8F-5coJmr9jJIe70o9MWkRdg7v9p~A~E~UwcwYC-AYFlEc-k1QUbqrzKV89lxB4mXrnEfGaFLdEGqOc8VZWdJ-t-uKbF5HUNLsKmsZbK3A~bAgbmXC7wkEzLGMFPLXtmPN1FDRLkJnPAt6EYb8~zSkxgpLEbFNhc76h5iO2EQ9TfgoQuyNzX7DaYKQurvoOu8rfwbe15Hlu7Zb66mV-bXz5~eL9uH3EntFdE3gPrxpsjy2ab5Ob6M4nNcFuDzo3XAqHaPV-52GDJYU8kshD43DXqMf-X20WDIvi7v662jh2PZ8-srmh61C7d3CIIWNYPsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
              </div>
              <div className="col-9 ">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={<span className="text-light">Xanthe Neal</span>}
                  menuVariant="light"
                  color="white"
                  className="p-spacing chat-nav"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <FaUser className="text-dark nav-icon-space" />
                    {/* <FontAwesomeIcon
                      icon={faUser}
                      className="text-dark nav-icon-space"
                    /> */}
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <FaMountain className="text-dark nav-icon-space" />
                    {/* <FontAwesomeIcon
                      icon={FaMountain}
                      className="text-dark nav-icon-space"
                    /> */}
                    Tweeter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <FaSignOutAlt className="text-dark nav-icon-space" />
                    {/* <FontAwesomeIcon
                      icon={FaSignOutAlt}
                      className="text-dark nav-icon-space"
                    /> */}
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>

          <div className="col-sm-9 text-light themebg">
            <br />
            <div className="container">
              <h1 className="chat-right-h1">FRONT-END DEVELOPERS</h1>
              <hr className="chat-line" />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Nellie Francis</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Suspendisse enim tellus, elementum quis dictum sed,
                      sodales at mauris 😀
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Annaliese Huynh</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Orci varius natoque penatibus et magnis dis parturient
                      montes 😀
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Xanthe Neal</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Etiam eleifend fermentum ipsum eu rhoncus. In non justo
                      aliquam, imperdiet metus id, tincidunt orci 😍
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Nellie Francis</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Suspendisse enim tellus, elementum quis dictum sed,
                      sodales at mauris 😀
                    </span>
                  </div>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-4">
                  <hr className="chat-line" />
                </div>
                <div className="col-4">
                  <p className="text-center chat-line-text">August 3, 2020</p>
                </div>
                <div className="col-4">
                  <hr className="chat-line" />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Nellie Francis</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Suspendisse enim tellus, elementum quis dictum sed,
                      sodales at mauris 😀
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Annaliese Huynh</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Orci varius natoque penatibus et magnis dis parturient
                      montes 😀
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Xanthe Neal</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Etiam eleifend fermentum ipsum eu rhoncus. In non justo
                      aliquam, imperdiet metus id, tincidunt orci 😍
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 trim-space">
                  <img
                    src="https://res.cloudinary.com/ckgraphics/image/upload/v1644925390/tweeterclone/undraw_profile_pic_ic5t_rkejzu_lqnnhr.png"
                    alt=""
                    className="chat-avatar"
                  />
                </div>
                <div className="col-10 text-left">
                  <div className="row">
                    <span className="chat-user col-6">Nellie Francis</span>
                    <span className="col-6 chat-date">yesterday at 2:29AM</span>
                  </div>
                  <div className="data">
                    <span className="chat-msg col-6">
                      Suspendisse enim tellus, elementum quis dictum sed,
                      sodales at mauris 😀
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-10">
                  <input
                    type="email"
                    className="form-control chat-msg-form"
                    id="exampleFormControlInput1"
                    placeholder="Type a message here"
                  />
                </div>
                <div className="col-2 ">
                  <button
                    type="button"
                    className="form-control btn-lg btn btn-primary button-color"
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;