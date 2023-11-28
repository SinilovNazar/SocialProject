import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import AnalyticsPage from './pages/Analytics';
import CreatingProcesses from './pages/CreatingProcesses';
import Breadcrumbs from './components/Breadcrumbs';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header />
        <div className='wrapper'>
          <Breadcrumbs />
          <Routes>
            <Route path="/Analitycs" element={<AnalyticsPage />} />
            <Route path="/Analitycs/CreatingProcesses" element={<CreatingProcesses />} />
            <Route path='*' element={<Navigate to='/Analitycs' />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
