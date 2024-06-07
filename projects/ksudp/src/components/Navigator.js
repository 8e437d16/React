import React from 'react'
import { createGlobalStyle } from "styled-components";
import NavigatorItem from './NavigatorItem';

const GlobalStyle = createGlobalStyle`
@media (min-width: 1000px) {
    .mainNavi-wrap {
        position: absolute;
        left: 0;
        top: 40px;
        width: 100%;
        height: 260px;
        background: #fff;
        z-index: 500;
        border-bottom: 1px solid #ccc;
        overflow: hidden;

        .menu-wrap {
            position: relative;
            width: 1200px;
            margin: 0 auto;
            z-index: 100;

                .mainNavi {
                    height: 84px;
                    padding: 0 0 0 350px;
                div {
                    display: block;
                    unicode-bidi: isolate;
                
                    .depth1-ul {
                            overflow: hidden;
                            text-align: right;
                    }  
                }

                }
        }
    }

    .header {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            z-index: 1000;
        }

        .logo {
            position: absolute;
            left: 0;

            a .slogo {
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

}

`;

export default function Navigator(props) {
    

    return (
        <>
            <GlobalStyle />
            <div className="header">
                    <h1 className="logo">
                        <a href="/electronics/Main.do">
                            <span className="slogo">
                                <img src="https://kscms.ks.ac.kr/resources/_Img/Common/logo.png" org_widht="209" org_height="50" isinit="true" />
                                <em className="logo-txt">전자공학과</em>
                            </span>
                        </a>
                    </h1>
                </div>
            <div className="mainNavi-wrap">
                <div className="menu-wrap">
                    <nav className="mainNavi">
                        <div className="depth1-wrap">
                            <ul className="depth1-ul">
                                <NavigatorItem href="Hello" name="학과소개"/>
                                <NavigatorItem href="Hello" name="입시안내"/>
                                <NavigatorItem href="Hello" name="교과과정"/>
                                <NavigatorItem href="Hello" name="취업진로"/>
                                <NavigatorItem href="Hello" name="학생활동"/>
                                <NavigatorItem href="Hello" name="커뮤니티"/>
                            </ul>
                        </div>
                    </nav>
                </div>            
            </div>
        </>

    )
}
