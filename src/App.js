import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Videos from './Pages/Videos';
import VideoDetail from './Pages/VideoDetail';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Videos />}/>
        <Route path='/video/:videoId' element={<VideoDetail />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;


