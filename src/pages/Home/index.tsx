import React, { useEffect, useState } from 'react';
import api from '../../services/api';
function Home() {
  const url = '/clients';
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
  return (
    <div>
      Home
    </div>
  );
}

export default Home;
