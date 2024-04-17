import './App.css';
import Box from '@mui/material/Box'
import { Button, Stack, TextField } from '@mui/material';
import logo from './assets/ksu-logo.png'
import { useState } from 'react';

// NameForm -> GenderForm -> DepartmentForm -> EmailForm -> PasswordForm -> Done

function App() {
  const [userInfo, setUserInfo] = useState({
    surName: "",
    firstName: "",
    email: "",
    password: ""
  });

  const { surName, firstName, email, password } = userInfo;

  function validateEmail() {
    return true;
  }

  function handleTextFieldOnChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      background: '#f0f4f9'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        width: '380px', height: '650px', borderRadius: '12px'
      }}>


        <Stack spacing={2} sx={{
          width: '280px',
        }}>

          <Stack alignItems="center">
            <img src={logo} width="84px" height="84px" />
            <h4 style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>경성대학교 회원가입</h4>
          </Stack>

          <div style={{ margin: '10px' }} />

          <TextField
            inputProps={{ maxLength: 32 }}
            autoFocus
            name="surName"
            label="성(선택사항)"
            onChange={handleTextFieldOnChange}
          />
          <TextField
            inputProps={{ maxLength: 64 }}
            label="이름"
            variant="outlined"
            name="firstName"
            onChange={handleTextFieldOnChange}
          />
          <TextField
            inputProps={{ maxLength: 128 }}
            label="이메일"
            variant="outlined"
            name="email"
            onChange={handleTextFieldOnChange}
          />
          <TextField
            inputProps={{ maxLength: 128 }}
            label="비밀번호"
            variant="outlined"
            name="password"
            type="password"
            onChange={handleTextFieldOnChange}
          />

          <div style={{ margin: '10px' }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
            }}>
            <Button sx={{ width: '90' }} variant="contained">확인</Button>
          </Box>
        </Stack>
      </div>
    </Box>
  );
}

export default App;
