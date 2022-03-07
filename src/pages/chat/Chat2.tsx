import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "../../Components/NavBar/Nav";
import classes from "./Chat2.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import { AuthContext } from "../../context/Auth.context";
import { BASE_URL } from "../../constants/contants";
// import { Item } from "framer-motion/types/components/Reorder/Item";
import {memberObj, eachMember} from "../../interfaces/index"


const Chat2 = () => {

  const {user} = useContext(AuthContext)
  let params = useParams();
  const[isFetchingConversation, setIsFetchingConversation] = useState(false);
  const[isFetchingMessage, setIsFetchingMessage] = useState(false);
  const[conversation, setConversation] = useState<Array<memberObj>>([]);
  const[message, setMessage] = useState<Record<string, any> | null>(null);
  const[getConversationError, setGetConversationError] = useState(null);




  useEffect(() => {
    const fetchConversation = async() =>{
      try{
        setIsFetchingConversation(true);
        const {data} = await axios.get(`${BASE_URL}conversation/${user.user._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        console.log(data, 'User Conversation')
        const info = data.data
        // let user2 = info.map((item:any) =>{ return item.members}).find((el:any)=> el !== user.user._id)
        // console.log(user2)
        // conversation.firstName + " " + conversation.lastName
        setConversation(info);
        setIsFetchingConversation(false)
      }
      catch(e : any){
        console.log(e)
        setIsFetchingConversation(false)
        setGetConversationError(e)
      }
    } 
    fetchConversation()
  }, [user.token, user.user._id])

  return (
    <div className={classes.container}>
      <div className={classes.nav_top}>
        <Navbar />
      </div>
      <div className={classes.main}>
        <div className={classes.nav_left}>
          <div className={classes.search}>
            <form action="" className={classes.form}>
              <input
                type="text"
                placeholder="search"
                className={classes.text}
              />
              <BiSearchAlt2 className={classes.icon} />
            </form>
          </div>

          {/*  {!user.user.profilePic ?
                <div className={classes.profileImg}>{user.user.firstName[0] + " " + user.user.lastName[0]}</div>
                  :
                <img
                src={user.user.profilePic}
                className={classes.profileImgI}
                alt="profile"
              />
              } */}

          {/* list of conversations */}
          <div className={classes.friends}>
          {conversation.map((item:any) =>
            <div className={classes.friend}>
            <figure className={classes.avatar}>

              <img src={`${item.members.filter((member:any) => member._id !== user.user._id )[0].profilePic}`} alt="" className={classes.img} />
            </figure>
            <p className={classes.name}>{item.members.filter((member:any) => member._id !== user.user._id )[0].firstName + " " + item.members.filter((member:any) => member._id !== user.user._id )[0].lastName}</p>
          </div>)
          }
          </div>
          <div className={classes.profile}>
            <Link to="/profile" className={classes.person}>
              <figure className={classes.profile_avatar}>
                <img src={user.user.profilePic} alt="" className={classes.profile_img} />
              </figure>
              <p className={classes.profile_name}>{user.user.firstName + " " + user.user.lastName }</p>
              <MdArrowDropDown className={classes.arrow} />
            </Link>
          </div>
        </div>


        <div className={classes.nav_right}>
          <div className={classes.chat_head}>
            <div className={classes.heading}>
              <figure className={classes.chat_avatar}>
                <img src="" alt="" className={classes.chat_img} />
              </figure>
              <p className={classes.chat_name}>Blessing Abel</p>
              <HiOutlinePhoneMissedCall className={classes.chat_arrow} />
            </div>
          </div>
          <div className={classes.chat_body}>
            <div className={classes.chat_boxA}>
              <div className={`${classes.chat_caseA} ${classes.chat_case2A}`}>
                <p className={classes.chat_messageA}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeA}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxB}>
              <div className={`${classes.chat_caseB} ${classes.chat_case2B}`}>
                <p className={classes.chat_messageB}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeB}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxA}>
              <div className={`${classes.chat_caseA} ${classes.chat_case2A}`}>
                <p className={classes.chat_messageA}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeA}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxB}>
              <div className={`${classes.chat_caseB} ${classes.chat_case2B}`}>
                <p className={classes.chat_messageB}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeB}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxA}>
              <div className={`${classes.chat_caseA} ${classes.chat_case2A}`}>
                <p className={classes.chat_messageA}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeA}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxB}>
              <div className={`${classes.chat_caseB} ${classes.chat_case2B}`}>
                <p className={classes.chat_messageB}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeB}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxA}>
              <div className={`${classes.chat_caseA} ${classes.chat_case2A}`}>
                <p className={classes.chat_messageA}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeA}>12:30pm</span>
              </div>
            </div>

            <div className={classes.chat_boxB}>
              <div className={`${classes.chat_caseB} ${classes.chat_case2B}`}>
                <p className={classes.chat_messageB}>
                  Hello! Hope you are doing great!
                </p>
                <span className={classes.chat_timeB}>12:30pm</span>
              </div>
            </div>
          </div>
          <div className={classes.chat_form}>
            <div className={classes.form_body}>
              <form className={classes.form_case}>
                <textarea
                  name=""
                  id=""
                  placeholder="Type a message here"
                  className={classes.form_text}
                ></textarea>
              </form>
              <MdInsertEmoticon className={classes.form_emoji} />
              <AiOutlineSend className={classes.form_send} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat2;

/**
 *
 */
