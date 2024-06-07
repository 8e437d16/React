import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function App() {
  const [id, setId] = useState("");
  const [cookies, setCookies] = useCookies(["id"]);

  const changeId = (e) => setId(e.target.value);
  const cookieSave = () => setCookies("id", id, { path: '/' });
  const cookieLoad = () => alert(cookies.id);

  return (
    <div>
      <h3>cookie test</h3>
      <input value={id} onChange={changeId} /><br />

      <button onClick={cookieSave}>Cookie 저장</button>
      <button onClick={cookieLoad}>Cookie 불러오기</button>
    </div>
  );
}

export default App;
