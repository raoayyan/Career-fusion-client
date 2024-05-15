
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Assessment from './components/Assessment/Assessment';
import Home from './components/Home/home';
import Jobs from './components/Jobs/jobs';
import Quiz from './components/Quiz/quiz';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Resume from './components/Resume/resume';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <div className="content-container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/test" element={<Assessment />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
