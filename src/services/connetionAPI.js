// const API = process.env.SERVER_API;
const API = 'http://localhost:4000';

let token = window.localStorage.getItem('token') || '';

const header = {
  // eslint-disable-next-line prettier/prettier
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
};

export const ConnectionAPI = {
  async registrarUsuario(data) {
    const response = await fetch(`${API}/usuarios/`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        ...data
      })
    });
    const json = response.json();
    return json;
  },
  async ingresarUsuario(data) {
    console.log(data);
    const response = await fetch(`${API}/auth/ingreso`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        ...data
      })
    });
    const json = response.json();
    return json;
  },
  async findById(userId) {
    const response = await fetch(`${API}/usuarios/${userId}`, {
      method: 'GET',
      headers: header
    });
    const json = response.json();
    return json;
  },
  async registerService(data) {
    const response = await fetch(`${API}/servicios`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        ...data
      })
    });
    const service = response.json();
    return service;
  },
  async findServiceByPatient(userId) {
    const response = await fetch(`${API}/usuarios/${userId}/servicios`, {
      method: 'GET',
      headers: header
    });
    const services = response.json();
    return services;
  },
  async findServiceById(serviceId) {
    const response = await fetch(`${API}/servicios/${serviceId}`, {
      method: 'GET',
      headers: header
    });
    const service = response.json();
    return service;
  },
  async editService(data) {
    console.log('data', data.serviceId);
    const response = await fetch(`${API}/servicios/${data.serviceId}`, {
      method: 'PUT',
      headers: header,
      body: JSON.stringify(data.newData)
    });
    const serviceEdit = response.json();
    return serviceEdit;
  },
  async deleteService(serviceId) {
    const response = await fetch(`${API}/servicios/${serviceId}`, {
      method: 'DELETE',
      headers: header
    });
    const serviceDelete = response.json();
    return serviceDelete;
  },
  async registerCard(data) {
    console.log('regis', data);
    const response = await fetch(`${API}/pagos/card`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(data)
    });
    const card = response.json();
    return card;
  },
  async registerPayment(data) {
    const response = await fetch(`${API}/pagos`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(data)
    });
    const paymentResult = await response.json();
    return paymentResult;
  }
};
