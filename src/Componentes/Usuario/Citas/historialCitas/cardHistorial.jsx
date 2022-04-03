import { Card} from "antd"

function Cita({type, description}){
    return(
        <Card type="inner"  title={type} extra={<a href={'/requestservices'}>Detalles</a>}>
            {description}
        </Card>
    )
}

export default Cita