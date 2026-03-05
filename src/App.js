import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import TaskComponent from './components/TaskComponent';
import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first component</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat maiores provident autem accusantium ratione ullam consectetur eos ipsa amet fuga architecto itaque est quasi reprehenderit ea fugit, sunt at cupiditate.</p>
      </header>
      {/* we bind our component */}
      <MyFirstComponent/>
      <TaskComponent/>
      <MySecondComponent/>
      <MyThirdComponent/>
    </div>
  );
}

export default App;
