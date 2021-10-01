import { Container } from '@mui/material';
import './App.css';
import News from './components/news/News';

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <News></News>
    </Container>
  );
}

export default App;
