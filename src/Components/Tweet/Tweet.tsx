import classes from "./Tweet.module.css";
import { FiMessageSquare, FiHeart, FiBookmark } from "react-icons/fi";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";

const Tweet = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.profile}>
            <img
              src="https://th.bing.com/th/id/OIP.PYAaF5TzN61zDH-_r7TdRAHaE8?w=196&h=131&c=7&r=0&o=5&pid=1.7"
              alt="pix"
              className={classes.profile__img}
            />
          </div>
          <div className={classes.person}>
            <p className={classes.person_name}>Peyton Lyons</p>
            <p className={classes.person_date}>24 August at 20:43</p>
          </div>
        </div>
        <div className={classes.tweet}>
          <p>
            "Traveling - It leaves you speechless, then turns you into a
            storyteller
          </p>
        </div>
        <div className={classes.main}>
          <img
            src="https://guardian.ng/wp-content/uploads/2020/04/journey-of-man.jpg"
            alt="journey"
            className={classes.main_img}
          />
        </div>
        <div>
          <ul className={classes.second}>
            <li>499 Comments</li>
            <li> 59k Retweets</li>
            <li>234 Saved</li>
          </ul>
        </div>
        <div className={classes.action}>
          <div className={classes.actions}>
            <button>
              <span>
                <FiMessageSquare className={classes.icons} />
                <span className={classes.button}>Comments</span>
              </span>
            </button>
            <button>
              <span>
                <IoIosRepeat className={classes.icons} />
                <span className={classes.button}>Retweets</span>
              </span>
            </button>
            <button>
              <span>
                <FiHeart className={classes.icons} />
                <span className={classes.button}>Likes</span>
              </span>
            </button>
            <button>
              <span>
                <FiBookmark className={classes.icons} />
                <span className={classes.button}>Saved</span>
              </span>
            </button>
          </div>
        </div>
        <div className={classes.last}>
          <div className={classes.profile2}>
            <img
              src="https://th.bing.com/th?q=Cute+Female+Nurse&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=strict&t=1&mw=247"
              alt="pix"
              className={classes.profile2_img}
            />
          </div>
          <form action="" className={classes.form}>
            <textarea
              placeholder="Tweet your reply"
              // rows= {5} cols= {40}
              // className={classes.input}
            ></textarea>
            <span className={classes.iconBox}>
              <AiOutlineSend className={classes.icon} />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
