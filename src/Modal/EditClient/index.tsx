import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';
import * as S from './styles'
import DataTable from "react-data-table-component";
import { FaPencilAlt } from 'react-icons/fa';

function EditCLient(props: any) {
  const url = '/clients';
  const history = useHistory();
  const [clientSelected, setClientSelected] = useState({
    id: '',
    name: '',
    document: '',
    bank: {
      bankName: '',
      code: '',
      agency: '',
      account: ''
    }

  });
  const [clientId, setClientId] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientDocument, setClientDocument] = useState('');
  const [clientBank, setClientBank] = useState('');
  const [clientAgency, setClientAgency] = useState('');
  const [clientAccount, setClientAccount] = useState('');
  const [clientCode, setClientCode] = useState('');
  const [modal, setModal] = useState(true);
  const [userList, setUserlist] = useState([]);

  useEffect(() => {
    setClientSelected(props.clientSelected)
    setUserlist(props.userList)

  }, [])

  useEffect(() => {
    setClientId(clientSelected.id)
    setClientName(clientSelected.name)
    setClientDocument(clientSelected.document)
    setClientBank(clientSelected.bank.bankName)
    setClientAgency(clientSelected.bank.agency)
    setClientAccount(clientSelected.bank.account)
    setClientCode(clientSelected.bank.code)
  }, [clientSelected])

  function updateCLient() {
    localStorage.setItem("clientList", "null")

    userList.map((item: any) => {
      if (item.id == clientId) {
        item.name = clientName,
          item.document = clientDocument,
          item.bank = {
            bankName: clientBank,
            agency: clientAgency,
            account: clientAccount,
            code: clientCode
          }
      }
    })
    props.setUserList(userList)
    localStorage.setItem("clientList", JSON.stringify(userList))
    setModal(!modal)
    props.setModal(!modal)
    toast('success', 'Atualizado com sucesso!');
  }

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
  return (
    <S.ContainerHome>
      <S.Header>
        <S.HeaderTitle>
          Cliente
        </S.HeaderTitle>
      </S.Header>
      <S.ContainerContent>
        <S.Form>
          <S.ContainerFull>
            <S.ContainerHalf>
              <S.Label>
                Nome do usuário
              </S.Label>
              <S.InputForm
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value)
                }}
              />
            </S.ContainerHalf>
            <S.ContainerHalf>
              <S.Label>
                Documento
              </S.Label>
              <S.InputForm
                value={clientDocument}
                onChange={(e) => {
                  setClientDocument(e.target.value)
                }}
              />
            </S.ContainerHalf>
          </S.ContainerFull>
          <S.ContainerFull>
            <S.ContainerHalf>
              <S.Label>
                Banco
              </S.Label>
              <S.InputForm
                value={clientBank}
                onChange={(e) => {
                  setClientBank(e.target.value)
                }}
              />
            </S.ContainerHalf>
            <S.ContainerHalf>
              <S.Label>
                Agência
              </S.Label>
              <S.InputNumberForm
                value={clientAgency}
                onChange={(e) => {
                  setClientAgency(e.target.value)
                }}
              />
            </S.ContainerHalf>
          </S.ContainerFull>
          <S.ContainerFull>
            <S.ContainerHalf>
              <S.Label>
                Conta
              </S.Label>
              <S.InputForm
                value={clientAccount}
                onChange={(e) => {
                  setClientAccount(e.target.value)
                }}
              />
            </S.ContainerHalf>
          </S.ContainerFull>
          <S.ContainerFull>
            <S.ContainerHalf>
              <S.ButtonForm onClick={updateCLient}>Salvar</S.ButtonForm>
            </S.ContainerHalf>
          </S.ContainerFull>
        </S.Form>
      </S.ContainerContent>
    </S.ContainerHome>
  );
}

export default EditCLient;
