import Container from '../styles/styleCompont/contact'

export default function Contacts() {

    return (
        <Container>
            <h2>
                Contacto
            </h2>
            <div>
                <button>
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>Numero de telefono: </span> <span style={{marginLeft:4}}>+593 098 212 1296</span>
                </button>
                <button >
                    <i className="fa-solid fa-envelope"></i>
                    <span>Correo:</span> <span style={{marginLeft:4}}>steveen.pm@gmail.com</span>
                </button>
                <button >
                    <i class="fa-brands fa-linkedin"></i>
                    <span>Linkeding:</span>  <span style={{marginLeft:4}}>https://www.linkedin.com/in/steveen-pm-26a139241/</span>
                </button>
            </div>
        </Container>
    )

}

