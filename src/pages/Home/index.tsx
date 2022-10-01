import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function Home() {
  const url = '/clients';
  const history = useHistory();
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    async function loadData() {
      await api.get(url)
        .then(async (response:any) => {
          console.log(response)
          if (response && response.data) {
            setuserList(response.data)
          }
        });
    }
    loadData();
  }, []);

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    history.push('/login')
  }
  return (
    <div>
      Home
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
