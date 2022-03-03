import React from "react";
import Navbar from "../../Components/NavBar/Nav";
import classes from "./Chat2.module.css";
import {BiSearchAlt2} from 'react-icons/bi'

const Chat2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.nav_top}>
        <Navbar />
      </div>
      <div className={classes.main}>
        <div className={classes.nav_left}>  
          <div className={classes.search}>
            <form action="" className={classes.form}>
              <input type= "text" placeholder="search" className={classes.text}/>
              <BiSearchAlt2 className={classes.icon}/>
            </form>
          </div>
          <div className={classes.friends}>friends</div>
          <div className={classes.profile}>profile</div>
        </div>
        <div className={classes.nav_right}>
          <div className={classes.chat_head}>chat head</div>
          <div className={classes.chat_body}>chat body</div>
          <div className={classes.chat_form}>chat form</div>
        </div>
      </div>
    </div>
  );
};

export default Chat2;

/**
 *
 */
