import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
.global {
  position: relative;
  width: 100%;
  height: 40px;
  background: #ececec;
  z-index: 700;
}

.div-cont {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  .glnk-sec {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;

      a {
          float: left;
          font-size: 13px;
          text-align: center;
          height: 40px;
          line-height: 38px;
          width: 100px;

          span {
              display: inline-block;
              color: #fff;
          }
      }

      a.whome {
          background: #d71920;
      }
  }

  .srvc-lnk {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;

      a {
          float: left;
          font-size: 12px;
          color: #666;
          padding: 2px;
          margin: 10px 15px 0 15px;
          position: relative;

          &:nth-child(n+2)::after {
            content: '';
            position: absolute;
            left: -15px;
            top: 2px;
            width: 1px;
            height: 12px;
            background: #a6a6a6;
          }

          &::visited {
              text-decoration: none;
          }
      }

      .toppop-ctrl {
          float: left;
          position: relative;

          button {
              border: 0;
              text-align: center;
              background: #939396;
              padding: 10px 20px;

              span {
                  display: block;
                  font-size: 12px;
                  color: #fff;
                  padding-right: 18px;
                  position: relative;
                  
                  &::after {
                      content: '';
                      position: absolute;
                      right: 0;
                      top: 50%;
                      margin-top: -3px;
                      width: 0;
                      height: 0;
                      transition: all .3s ease;
                      border-left: 4px solid transparent;
                      border-right: 4px solid transparent;
                      border-top: 5px solid #666;
                  }

                  i {
                      font-style: normal;
                      font-weight: 600;
                      color: #fb701b;
                  }
              }
          }
      }
  }
}
`;

export default function Header() {
  const toggleTopWidePopups = () => { };

  return (
    <div>
      <GlobalStyle />
      <div className="global">
        <div className="global-wrap div-cont">
          <div className="glnk-sec">
            <a href="/" className="whome">
              <span>대표홈</span>
            </a>
          </div>

          <div className="srvc-lnk">
            <a href="/" className="home">
              <span>홈</span>
            </a>

            <a href="/" className="login">
              <span>로그인</span>
            </a>

            <a href="/" className="amenu">
              <span>사이트맵</span>
            </a>

            <div className="toppop-ctrl">
              <button
                type="button"
                onClick={toggleTopWidePopups}
                className="btn-wctrl"
              >
                <span className="closed">
                  팝업 <i>0</i>건
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
