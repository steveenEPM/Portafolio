import Imagen from '../asset/Imagen.jpeg'
import '../styles/homes.css'


export default function Home() {

    const size = 250

    return (
        <div className="bacground homes">
            <div className="contenido">
                <img src={Imagen} alt="Steveen Pinzon" width={size} height={size} />

                <div className="texto">
                    <h1 className="h1">
                        Steveen Eduardo Pinzon Morales
                    </h1>
                    <span>
                        Desarrollador Full Stack
                    </span>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="rgb(255,255,255)" fillOpacity="1" d="M0,320L24,309.3C48,299,96,277,144,272C192,267,240,277,288,256C336,235,384,181,432,149.3C480,117,528,107,576,122.7C624,139,672,181,720,176C768,171,816,117,864,117.3C912,117,960,171,1008,197.3C1056,224,1104,224,1152,240C1200,256,1248,288,1296,272C1344,256,1392,192,1416,160L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </div>
    )

}