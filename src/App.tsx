import Chat from './components/chat';
import Home from './components/home';
import Question from './components/question';
import { Route, Routes } from 'react-router-dom';
import './styles/layoutCSS.css';

function App() {


  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/chat' Component={Chat} />
    </Routes>
  );
}

export default App;

