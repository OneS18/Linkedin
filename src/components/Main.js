import styled from "styled-components";
import PostModal from "./PostModal";
import { useState } from "react";
import { connect } from "react-redux";

import React from "react";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
    }
  };
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button onClick={handleClick}>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src="/images/ellipsis.svg" alt="" />
          </button>
        </SharedActor>
        <Description>Description</Description>
        <SharedImg>
          <a>
            <img src="/images/reactjs.jpg" alt="" />
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <button>
              <img
                src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                alt=""
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
                alt=""
              />
              <span>19</span>
            </button>
          </li>
          <li>
            <a>2 comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="/images/like-icon.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comment-icon.svg" alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/share-icon.svg" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/send-icon.svg" alt="" />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display:flex;
      align-items: center;
      font-weight: 600;
      }
      &:first-child {
          display:flex;
          align-items:center;
          padding:8px 16px 0px 16px;
          img {
              width: 48px;
              border-radius: 50%;
              nargin-right:8px;
          }
          button {
              margin: 4px 0 ;
              flex-grow: 1;
              border-radius:35px;
              padding-left:16px;
              border: 1px solid rgba(0,0,0,0.15);
              background-color:white;
              text-align:left;
          }
      }
      &:nth-child(2) {
          display:flex;
          flex-wrap:wrap;
          justify-content:space-around;
          padding-bottom: 4px;

          button {
              img {
                margin: 0 4px 0 -2px;
                width:20px;
              }
              span {
                  color:#000000099;
              }
          }
      }
       
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: no-wrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &::nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0, 6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 10px;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9dadb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  oferflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #00000099;
    border: none;
    background: white;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
