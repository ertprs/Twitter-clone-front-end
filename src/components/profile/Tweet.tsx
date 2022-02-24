import React from "react";
// import Tweetnav from "./TweetNav"

const Tweet = () => {
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                className="col-sm-12 tweet-avatar"
                src="https://res.cloudinary.com/dveib1w9c/image/upload/v1645025986/tweeter/498741548cb5ed1dc33ed9cb80dd8860_ncrgcc.png"
                alt=""
              />
            </div>
            <div className="col-6">
              <h6 className="user-name-tweet col-12">Peyton Lyons</h6>
              <h6 className="user-name-date col-12">24 August at 20:43 </h6>
            </div>
            <div className="col-sm-4"></div>
          </div>
          <p>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
          <img
            className="card-img-top tweetimage"
            src="https://res.cloudinary.com/dveib1w9c/image/upload/v1645018165/tweeter/76776d7ccd43c1602fbc6aa3a6ee5ac5_ekahcu.png"
            alt=""
          />
          <div className="row">
            <div className="col-7"></div>
            <div className="col-5">
              <div className="row">
                <div className="col-sm-4 tweet-under">449 Comments</div>
                <div className="col-sm-4 tweet-under">59k Retweets</div>
                <div className="col-sm-4 tweet-under">234 Saved</div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-3">
              <i className="far fa-comment font-ic"> </i> Comments
            </div>
            <div className="col-sm-3">
              <i className="fa fa-retweet font-ic"></i> Retweeted
            </div>
            <div className="col-sm-3">
              <i className="far fa-heart font-ic"></i> Liked
            </div>
            <div className="col-sm-3">
              <i className="far fa-bookmark font-ic"></i> Saved
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-1">
              <img
                className="card-img-top sendimage"
                src="https://res.cloudinary.com/dveib1w9c/image/upload/v1645018165/tweeter/76776d7ccd43c1602fbc6aa3a6ee5ac5_ekahcu.png"
                alt=""
              />
            </div>
            <div className="col-11">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Tweet;
