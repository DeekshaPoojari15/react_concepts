import New from './New'
import Welcome from './Welcome'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  

function RouteDemo() {
  return (
    <Router> 
    <div> 
      <Routes>
      <Route exact path="/" element={<New/>} />  
      <Route exact path="/welcome" element={<Welcome />} />  
      </Routes>
    </div>  
  </Router>
  );
}

export default RouteDemo;