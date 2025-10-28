import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
//import tailwindConfig from '../tailwind.config.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/" element={<SignUp />} />
        <Route path="/login"element={<Login/>}/>
        <Route path="/"/>
      </Routes>
    </Router>
  );
}

export default App;
