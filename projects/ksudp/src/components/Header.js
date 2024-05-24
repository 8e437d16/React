import React from "react";
import styled from "styled-components";

export default function Header() {
  const globalStyle = styled`
    .div-cont {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    };

    .glnk-sec {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    };

    .whome {
      background: #d71920;
    }
  `;

  return (
    <div>
      <div>
        <div className="global-wrap div-cont">
          <div className="glnk-sec">
            <a href="/" className="whome">
              <span>대표홈</span>
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
