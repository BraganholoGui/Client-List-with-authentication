import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';
import * as S from './styles'
import DataTable from "react-data-table-component";
import { FaPencilAlt } from 'react-icons/fa';

function Home() {
  const url = '/clients';
  const history = useHistory();
  const [userList, setuserList] = useState([]);
  
  const customStyles = {
    headCells: {
      style: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontWeight: 700,
        fontSize: '15px',
        color: '#466486',
      },
    },
    rows: {
      style: {
        // width: "100%",
        backgroundColor: '#ffffff',
        fontSize: '15px',

      },
      stripedStyle: {
        backgroundColor: '#dbe7f1',
      },
    },
    cells: {
      style: {
        color: '#466486',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
    },
    noData: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#466486',
      },
    }
  };

  const columns = [
    {
      name: "Nome",
      selector: (row:any) => row.name,
      sortable: true,
      grow: 1,
      wrap: true
    },
    {
      name: "Data",
      selector: (row:any) => row.id,
      sortable: true,
      grow: 1,
      wrap: true
    },
    {
      name: "Documento",
      selector: (row:any) => row.document,
      sortable: true,
      grow: 2,
      wrap: true
    },
    {
      name: "Banco",
      selector: (row:any) => row.bank.bankName,
      sortable: true,
      grow: 2,
      wrap: true
    },
    {
      name: "Agência",
      selector: (row:any) => row.bank.agency,
      sortable: true,
      grow: 1,
      wrap: true
    },
    {
      name: "Conta",
      selector: (row:any) => row.bank.account,
      sortable: true,
      grow: 1,
      wrap: true
    },
    {
      name: "Editar",
      selector: (row:any) => <S.ButtonEdit><FaPencilAlt/></S.ButtonEdit>,
      sortable: true,
      grow: 1,
      wrap: true
    },
  ];

  useEffect(() => {
    toast('success', 'Bem vindo!');
    async function loadData() {
      await api.get(url)
        .then(async (response: any) => {
          if (response && response.data) {
            setuserList(response.data)
          }
        });
    }
    loadData();
  }, []);

  function toast(icon: any, msg: any) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    }).fire({
      icon: icon,
      title: msg
    });
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    history.push('/login')
    document.location.reload()
  }
  return (
    <S.ContainerHome>
      <S.Header>
        <S.HeaderTitle>
          Lista de Clientes
        </S.HeaderTitle>
        <button onClick={logout}>Logout</button>
      </S.Header>
      <S.ContainerTable>
        <DataTable
          columns={columns}
          data={userList}
          pagination
          striped
          noHeader
          customStyles={customStyles}
          responsive
          paginationComponentOptions={{ rowsPerPageText: 'Linhas por página:' }}
          paginationIconLastPage={null}
          paginationIconFirstPage={null}
        />
      </S.ContainerTable>
    </S.ContainerHome>
  );
}

export default Home;
