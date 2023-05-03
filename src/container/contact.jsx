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
                    Numero de telefono: +593 098 212 1296
                </button>
                <button >
                    <i className="fa-solid fa-envelope"></i>
                    Correo: steveen.pm@gmail.com
                </button>
            </div>
        </Container>
    )

}

