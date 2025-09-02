import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
