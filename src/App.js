import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  useEffect( () =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));

      //single user
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res=> res.json())
      .then(data=> setSingleUser(data));

      //random user
      fetch('https://randomuser.me/api')
      .then(res=> res.json())
      .then(data => setRandomUser(data.results[0]))
  },[] )
  const handleLike = () =>{
      const color = likeColor ? '' : 'primary';
      setLikeColor(color);
  }
  return (
    <div >
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
      <h1>Name:{singleUser.name}</h1>
      <h2>random name: {randomUser.name?.first} {randomUser.name?.last}</h2>
      {
        users.map(user => <li>{user.name}</li>)
      }


    
    </div>
  );
}

export default App;
