import { useState, useContext, useEffect } from 'react';

// Context Api
import { FormContext } from '../context/FormContext';



const VoucherApi = () => {
  const { resetCredentials, changeMode, credentials, editCredentials } = useContext(FormContext)

  const [voucher, setVoucher] = useState([])

  const [refresh, setRefresh] = useState(0)

  const accessPoint = 'http://127.0.0.1:8000/api'

  const updateToken = () => {
    let newToken = ''
    return newToken = JSON.parse(sessionStorage.getItem('token'))
  }

  const configUri = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${updateToken()}`,
    }
  }

  const indexVoucher = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${updateToken()}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch(`${accessPoint}/voucher`, requestOptions)
      .then(response => response.json())
      .then(result => setVoucher(result))
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  // Add New Voucher Information
  const addVoucher = async () => {
    await fetch(`${accessPoint}/voucher`, {
      method: 'POST',
      ...configUri,
      body: JSON.stringify(credentials)
    }).then((res) => res.json())
      .then((data) => console.log(data))


  }

  // Find Voucher Information
  const findVoucher = async (id) => {
    sessionStorage.setItem('queryId', id)

    await fetch(`${accessPoint}/voucher/${id}`, {
      method: 'GET',
      ...configUri
    })
      .then((res) => res.json())
      .then((data) => editCredentials(data))
    // .then((data) => console.log(data))


  }

  // Edit Voucher Information
  const editVoucher = async () => {

    let queryId = 0;
    queryId = sessionStorage.getItem('queryId')

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${updateToken()}`);

    const urlencoded = new URLSearchParams();
    urlencoded.append("name", credentials.name);
    urlencoded.append("quantity", credentials.quantity);
    urlencoded.append("price", credentials.price);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    // console.log(queryId)

    await fetch(`${accessPoint}/voucher/${queryId}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setRefresh((perviousState) => perviousState + parseInt(1))

  }

  const config = {
    indexVoucher: indexVoucher,
    addVoucher: addVoucher,
    findVoucher: findVoucher,
    editVoucher: editVoucher,
    voucher,
    refresh
  }


  return { ...config }

}

export default VoucherApi