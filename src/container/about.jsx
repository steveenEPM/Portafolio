import Imagen from "../components/lottiefiles"
import Blod from '../asset/blob8.svg'
import '../styles/abouts.css'

export default function Abouts() {

    return (
        <div className="contaienr abouts" style={{ alignItems: "flex-start" }}>
        
            <div>
                <h2>
                    Acerca de mi
                </h2>
                <p>
                    Soy estudiante de ultimo semestre de Ingeniería de Sistemas de la Universidad
                    Técnica Manabi. Actualmente realizo proyectos independientes sobre aplicaciones
                    Web y Movil.
                </p>
                <p>
                    Soy una persona que cuenta con la capacidad analizar, proponer y dar soluciones en el contexto del
                    problema, soy responsable, con iniciativa, autodidacta, autónomo. trabajo en equipo.
                </p>
            </div>
            <div className="imagen">
                <img src={Blod} width={650} height={650} alt='blod.jpg' className='blodImg1' style={{top:-45}}/>
                <div className='imgLoti' style={{top:-720}}>
                    <Imagen url={"https://assets9.lottiefiles.com/private_files/lf30_5u6A5U.json"} size={550} />
                </div>
            </div>
        </div>
    )

}


//               


