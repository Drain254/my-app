import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import TaskComponent from './components/TaskComponent';
import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import MyfourthComponent from './components/MyFourthComponent';
import MyFifthComponent from './components/MyFifthComponent';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>This is my first component</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores provident autem accusantium ratione ullam consectetur eos ipsa amet fuga architecto itaque est quasi reprehenderit ea fugit, sunt at cupiditate.</p>
      </header>
      <nav>
        <Link to='/first' className='mylinks'>go to first</Link>
        <Link to='/second' className='mylinks'>go to second</Link>
        <Link to='/third' className='mylinks'>go to third</Link>
        <Link to='/task' className='mylinks'>go to task</Link>
        <Link to='/fourth'className='mylinks'>go to fourth</Link>
        <Link to='/fifith'className='mylinks'>go to fifth</Link>
      </nav>
      <Routes>
        <Route path='/first' element={<MyFirstComponent/>}/>
        <Route path='/second' element={<MySecondComponent/>}/>
        <Route path='/third' element={<MyThirdComponent/>}/>
        <Route path='/task' element={<TaskComponent/>}/>
        <Route path='/fourth' element={<MyfourthComponent/>}/>
        <Route path='/fifth' element={<MyFifthComponent/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
