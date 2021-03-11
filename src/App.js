import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const handleLike = () =>{
      const color = likeColor ? '' : 'primary';
      setLikeColor(color);
  }
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
