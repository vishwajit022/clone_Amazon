import Headers from "./HEADER";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout"
import Login from "./login"
import Sign from "./login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        </Routes>
        <Routes path='/sign' element={<Sign/>}/>
        <Routes>
        <Route path='/checkout' element={<Headers/>}/>
        </Routes>
        <Routes>
          <Route path='/Checkout' element={<Checkout />} />
        </Routes>
       <Routes>
        <Route path='/' element={<Headers/>}/>
       </Routes>
       <Routes>
       <Route path='/' element={<Home/>}/>
       </Routes>

        
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
