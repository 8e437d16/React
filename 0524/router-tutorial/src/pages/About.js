import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  let detail = searchParams.get("detail");
  let mode = searchParams.get("mode");

  detail = detail === null ? "false" : detail;
  mode = mode === null ? 0 : mode;

  const onToggleDetail = () => {
    setSearchParams({
      mode,
      detail: detail === "true" ? false : true,
    });
  };

  const onIncreaseMode = () => {
    setSearchParams({ mode: parseInt(mode) + 1, detail });
  };

  return (
    <>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </>
  );
}
