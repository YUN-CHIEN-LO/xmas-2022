import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/main.scss"
import Layout from './components/layout/index';
import Home from './pages/Home';
import Error from './pages/Error';

// 是否為手機裝置
const isMobile = require('is-mobile');
console.log(isMobile());

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
