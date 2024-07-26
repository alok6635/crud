import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Create from './Create';
import Read from './Read';

const App = () => {
  <h2>Read Operations</h2>
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create/>}></Route>
          <Route path="/read" element={<Read/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
