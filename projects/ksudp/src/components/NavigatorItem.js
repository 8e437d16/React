import React from 'react'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@media (min-width: 1000px) {
    li {
        list-style: none;
    }

    .mn_li1 {
        display: inline-block;
        text-align: center;
        margin: 0 30px;
            .mn_a1 {
                display: block;
                font-size: 19px;
                font-weight: 500;
                color: #444;
                padding: 33px 0;
            }

            
        a, a:link {
            color: #555;
            text-decoration: none;
        }

        .depth2-wrap {
                display: none;
                position: absolute;
                top: 85px;
                left: 0;
                z-index: 1000;
                width: 1200px;
                padding: 0 0 0 270px;
                text-align: left;
                font-weight: normal;
                box-sizing: border-box;

                .depth1-tit {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 270px;
                    height: 100%;
                    border-right: 1px solid #ddd;
                    padding-right: 35px;
                    box-sizing: border-box;

                    strong {
                        position: relative;
                        display: block;
                        color: #323b50;
                        font-size: 25px;
                        font-weight: 500;
                        padding-bottom: 20px;
                        padding-top: 43px;
                        line-height: 1;
                    }

                    .stxt {
                        display: block;
                        font-size: 15px;
                        font-weight: 300;
                        margin-top: 7px;
                        line-height: 1.4em;
                        color: #444;
                        word-break: keep-all;
                        position: relative;
                        z-index: 500;
                    }
                }
            }

            }
}
`

export default function NavigatorItem(props) {
  return (
    <>
        <GlobalStyle />
        <li className="mn_li1 first has-sub over"> 
            <a className="mn_a1 over" href={props.href}>
                <span>
                    {props.name}
                </span>
            </a>
            <div className="depth2-wrap">
                <div class="depth1-tit mn-tbox1">
                    <strong>전자공학과</strong>
                    <span class="stxt"></span>
                </div>
            </div>
        </li>
    </>
  )
}
