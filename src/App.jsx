import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Read from './Read';
import Create from './Create';
import Update from './Update';
import CreateMy from './CreateMy';

const App = () => {
  <h2>Read Operations</h2> 
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Create />}></Route> */}
          <Route path="/" element={<CreateMy />}></Route>
          {/* <Route path="/read" element={<Read />}></Route> */}
          {/* <Route path="/update" element={<Update />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
