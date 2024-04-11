import './App.css';
import Header from './components/Header';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import HeaderDateTime from './components/HeaderDateTime';
import NewsList from './components/NewsList';

function App() {
  return (
    <Container style={{ width: '720px' }}>
        <Header />
        <HeaderDateTime />
        <Divider />
        <NewsList />
    </Container>
  );
}

export default App;
