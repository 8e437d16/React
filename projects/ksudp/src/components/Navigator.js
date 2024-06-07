import React from 'react'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .navi-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        background: gray;
        margin-left: 5%;
        margin-right: 5%;

        .logo-wrap {
            

            span {
                display: block;

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

        .menu-wrap {

            ul {
                li {
                    display: inline-block;
                    text-align: center;
                    margin: 0 30px;

                    a {
                        display: block;
                        height: 100%;
                        font-size: 19px;
                        font-weight: 500;
                        color: #444;
                        padding: 20px 0;
                        text-decoration: none;


                    }
                }
            }
        }
    }
`;

export default function Navigator() {
    const depUrl = "."
    const depName = "전자공학과";
    const rootMenus = ["학과소개", "입시안내", "교과과정", "취업진로", "학생활동", "커뮤니티"];

    return (
        <>
            <GlobalStyle />
            <div className="navi-wrap">
                <div className="logo-wrap">
                    <a href={depUrl}>
                        <span>
                            <img src="https://cms2.ks.ac.kr/resources/_Img/Common/logo.png" />
                            <em>{depName}</em>
                        </span>
                    </a>
                </div>

                <div className="menu-wrap">
                    <ul>
                        {rootMenus.map((menu, index) => (
                            <li>
                                <a href="">
                                    <span>{menu}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}
