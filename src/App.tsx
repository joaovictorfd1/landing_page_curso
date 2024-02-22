import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { Box} from '@mui/material';
import Page from './components/Main/main';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <Page />
      <Footer />
    </Box>
  );
}

export default App;
