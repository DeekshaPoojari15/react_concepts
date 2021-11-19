import About from './About'
import Contact from './Contact'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  

function First() {
  return (
    <Router> 
    <div> 
      <Routes>
      <Route exact path="/about" element={<About/>} />  
      <Route exact path="/contact" element={<Contact/>} />  
      </Routes>
    </div>  
  </Router>
  );
}

export default First;