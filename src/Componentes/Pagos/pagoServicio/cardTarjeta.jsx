import { Card, Button } from 'antd';

function CardTarjeta({ id, price, number }) {
  return (
    <Card
      type="inner"
      //   title={service.nameService}
      extra={<a href={`/pagos/${id}`}>Regresar</a>}
    >
      <p>El valor a pagar es: {price}</p>
      <p>El número de la tarjeta con la que realizara el pago es: {number}</p>
    </Card>
  );
}

export default CardTarjeta;
