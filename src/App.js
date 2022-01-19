import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Signin from './pages/Signin';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
