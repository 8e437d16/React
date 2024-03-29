import React from "react";
import Book  from "./Book";

function BookLibrary(props) {
    return (
        <div>
            <Book name="처음 만난 React" numberOfPage={300} />
            <Book name="처음 만난 JSX" numberOfPage={400} />
            <Book name="처음 만난 Component" numberOfPage={500} />
        </div>
    );
}

// 소문자로 시작하면 DOM 요소, 대문자로 시작하면 사용자 요소
// HTLM 태그와 사용자 컴포넌트 

export default BookLibrary;