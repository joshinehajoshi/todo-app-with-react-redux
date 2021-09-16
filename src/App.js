import './App.css';
import AddToDo from './components/AddToDo/AddToDo';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddToDo />
        <List />
      </header>
    </div>
  );
}

export default App;
