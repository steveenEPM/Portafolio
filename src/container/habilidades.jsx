import Container from '../styles/styleCompont/habilidades'
import Items from '../components/itemsHab'
import Imagen from '../components/lottiefiles'
import Blod from '../asset/blob1.svg'

export default function Habilidades() {

    return (
        <Container className='contaienr' style={{backgroundColor:"rgba(255,0,0,.1)"}}>
            <div>
                <h2>Habilidades</h2>
                <Items label={"Manejo de lenguajes de programacion Python, Javascrip, Java, Html y css."} />
                <Items label={"Manejo de base de datos Relacionales (MySql, Postgress y SQL."} />
                <Items label={"Manejo de base de datos NoSql."} />
                <Items label={"Manejo en React.js, React-Native, node.js."} />
                <Items label={"Manejo de metodologias Scrum."} />
                <Items label={"Conocimiento de servicios web (Json y Rest Api)."} />
                <Items label={"Manejo de herramientas de versonamiento de códigos (Github)."} />
                <Items label={"Utilizacion de buenas practicas."} />
            </div>
            <div className='imagen'>
                <img src={Blod} width={650} height={650} alt='blod.jpg' className='blodImg1' />
                <div className='imgLoti'>
                    <Imagen url={"https://assets5.lottiefiles.com/packages/lf20_5poosr3d.json"} size={550}/>
                </div>

            </div>
        </Container>
    )

}