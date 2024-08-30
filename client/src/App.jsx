import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css"
import Header from './component/layout/Header';
import Home from './component/pages/Home';
import Insert from './component/pages/Insert';
import toast, { Toaster } from 'react-hot-toast';
import Update from './component/pages/Update';
function App() {
  return (
    <>
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/insert' element={<Insert></Insert>}></Route>
          <Route path='/update/:id' element={<Update></Update>}></Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
