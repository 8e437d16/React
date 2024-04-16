import './App.css';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import NameForm from './components/NameForm';
import { MenuItem, Select, Stack, TextField } from '@mui/material';
import logo from './assets/ksu-logo.png'

function App() {


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Stack spacing={2} sx={{ width: '320px' }}>
      <Stack alignItems="center">
      <img src={logo} width="96px" height="96px" />
        <h3>경성대학교 회원가입</h3>
      </Stack>

        <div style={{ margin: '10px' }}/>

        <TextField
          label="성(선택사항)"
        />
        <TextField
          error
          label="이름"
          helperText="이름을 입력하세요."
          variant="standard"
        />
      </Stack>
    </Box>
  );
}

export default App;
