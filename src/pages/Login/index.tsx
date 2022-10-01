import React, { useEffect, useState } from 'react';
import api from '../../services/api';
function Login() {
  const url = '/clients';
  const [plaintiffList, setPlaintiffList] = useState([]);

  useEffect(() => {
    async function loadData() {
      await api.get(url)
        .then(async (response:any) => {
          console.log(response)
          if (response && response.data) {
            setPlaintiffList(response.data)
          }
        });
    }
    loadData();
  }, []);
  return (
    <div>
      Login
    </div>
  );
}

export default Login;
