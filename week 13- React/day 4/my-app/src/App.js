import User from './components/User'
import './App.css';
import users from './users.json'
import 'tachyons'

function App() {

  return (
    <div className="App">
    {
      users.map( (item,indx) => {
        return (
          <User info={item} key={indx}/>
        )
      })
    }
    </div>
  );
}

export default App;