import React from 'react'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .logo {
        position: absolute;
        left: 30px;

        a {
            display: block;

            span {
                img {
                    border: 0px;
                    vertical-align: middle;
                }

                em {
                    display: inline-block;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 500;
                    color: #010101;
                    margin-left: 7px;
                    letter-spacing: -0.05em;
                    vertical-align: middle;
                }
            }
        }
    }

    .mainNavi-wrap {
        position: absolute;
        left: 0;
        top: 40px;
        width: 100%;
        background: #fff;
        z-index: 500;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        height: 84px;
    }

`;

export default function Navigator() {
    return (
        <div>
            <GlobalStyle />
            <h1 className="logo">
                <a href="/">
                    <span className="slogo">
                        <img src="https://kscms.ks.ac.kr/resources/_Img/Common/logo.png" org_width="209" org_height="50" isinit="true" />
                        <em className="logo-txt">전자공학과</em>
                    </span>
                </a>
            </h1>

            <div>
                <ul>
                    <li>
                        <a>
                            <span>학과소개</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>입시안내</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>교과과정</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>취업진로</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>학생활동</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>커뮤니티</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
