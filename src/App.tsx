import './App.scss';
import Steps from './components/steps';
import AnalyticsPage from './pages/Analytics';


function App() {
  return (
    <div className="App">
      <header />
      <div className='wrapper'>
        <AnalyticsPage />
        <Steps /> 
      </div>
    </div>
  );
}

export default App;
