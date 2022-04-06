import CardTarjeta from './cardTarjeta';
import RegistrarUsuarioTarjeta from './registrarUsuarioTarjeta';
import { Form, InputNumber, Input, Button, Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  registerPayment,
  selectPayment,
  selectRegisterCardState,
  selectRegisterPaymentState
} from '../../../store/paymentSlice';
import { findServiceById, selectService } from '../../../store/serviceSlice';
import { selectUser } from '../../../store/userSlice';
import './pagoTarjeta.css';

function PagoServicio() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: userId } = useSelector(selectUser);
  const { serviceId } = useParams();
  // const cards = useSelector(selectUser);
  const services = useSelector(selectService);
  // console.log(cards);
  const { currentCard } = useSelector(selectPayment);

  const registerCardState = useSelector(selectRegisterCardState);
  const registerPaymentState = useSelector(selectRegisterPaymentState);
  const newDataService = {
    bill: serviceId,
    service: services.name,
    description: 'Pago de cita médica',
    price: services.price,
    value: services.price.toString(),
    currency: 'COP',
    dues: '1',
    ip: '190.000.000.000',
    docType: 'CC',
    tax: (services.price - Math.floor(services.price / 1.19)).toString(),
    taxBase: Math.floor(services.price / 1.19).toString()
  };
  const onFinish = (values) => {
    const finalValues = {
      ...values,
      userId,
      cardToken: currentCard.id,
      ...newDataService,
      docNumber: values.docNumber.toString()
    };
    console.log('finalValues', finalValues);
    dispatch(registerPayment(finalValues));
  };
  useEffect(() => {
    dispatch(findServiceById(serviceId));
  }, [dispatch]);

  return (
    <div className="card-payment">
      <div className="inf-container-card">
        <div className="title-container">
          <h2>Información pago</h2>
        </div>

        <CardTarjeta />
      </div>
      <RegistrarUsuarioTarjeta />
    </div>
  );
}

export default PagoServicio;
