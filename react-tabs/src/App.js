import './App.scss';
import Experience from './pages/Experience/Experience';

function App(props) {
  const { jobs, active } = props;
  return (
    <div className='App'>
      <Experience title='Experience' jobs={jobs} active={active} />
    </div>
  );
}

export default App;
