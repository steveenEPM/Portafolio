import Imagenes from '../components/lottiefiles'
import ImgPro1 from '../asset/project1.png'
import PetShop from '../asset/petShop.png'
import Waves from '../asset/blob (5).svg'
import SweetAlert2 from '../components/SweetAlet'
import Items from '../components/itemsProje'
import '../styles/projets.css'

export default function Projets() {


    return (
        <div className="contaienr projets">
            <div>
                <h2 style={{ marginBottom: 25 }}>Proyectos personales </h2>
                <div className='lista'>
                    <Items src={PetShop} alt={"petshop"} label={"Pet Shop"}
                        eClick={() => SweetAlert2(ImgPro1, "https://pet-shop-sandy.vercel.app/", "https://github.com/steveenEPM/petShop.git")}
                    />
                </div>
            </div>
            <div className='imagen'>
                <img src={Waves} width={650} height={650} alt='blod.jpg' className='blodImg1' />
                <div className='imgLoti' style={{ top: -304 }}>
                    <Imagenes url={"https://assets4.lottiefiles.com/packages/lf20_eeuhulsy.json"} size={450} />
                </div>

            </div>
        </div >
    )

}