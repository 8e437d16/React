import logo from './logo.svg';
import Session from 'react-session-api';
import './App.css';

function App() {
  const saveSession = () => {
    let jsonData = [{ "name": "홍길동", "age": 24 }, { "name": "성춘향", "age": 16 }];
    Session.set("jsonData", jsonData);
  };

  const loadSession = () => {
    let jsonData = Session.get("jsonData");
    alert(jsonData[1].age);
  };

  return (
    <div>
      <h3>session test</h3>

      <button onClick={() => saveSession()}>Session 저장</button>
      <button onClick={() => loadSession()}>Session 읽기</button>
    </div>
  );
}

export default App;
