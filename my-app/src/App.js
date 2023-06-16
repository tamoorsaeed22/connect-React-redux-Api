import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './Redux/Users/usersSlice';

function App() {
  const dispatch = useDispatch()
  const {users, isLoading, error} = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getUsers())
    // console.log(typeof users)
  }, [dispatch])
  if(error)
    return <div>{error.message}</div>
  return isLoading?<div>Loading ...</div>:users.map(user => <div key={user.cell}>
    <span>{user.name.last}</span>
    <span>{user.gender}</span>
    </div>)
}

export default App;