import Imagenes from '../components/lottiefiles'
import ImgPro1 from '../asset/project1.png'
import PetShop from '../asset/petShop.png'
import Waves from '../asset/blob (5).svg'
import ApkPokemon from '../asset/project2.jpeg'
import IconPoke from '../asset/pokemon.png'
import IconClima from '../asset/dia.png'
import ApkClima from '../asset/climaA.jpeg'
import Paella from '../asset/paella.png'
import SweetAlert2 from '../components/SweetAlet'
import SweetAlert from '../components/SweetAlet2'
import ApkRestaurant from '../asset/apkResturant.png'

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
                    <Items src={IconPoke} alt={"pokemon"} label={"Pokemon"}
                        eClick={() => SweetAlert(ApkPokemon, "https://github.com/steveenEPM/pokemonApk.git")}
                    />
                    <Items src={IconClima} alt={"clima"} label={"Clima"}
                        eClick={() => SweetAlert(ApkClima, "https://github.com/steveenEPM/apkClima.git","https://expo.dev/accounts/drago_scuro/projects/climaapk/builds/594a899f-61fa-4674-b5b1-da84db95410a")}
                    />
                    <Items src={Paella} alt={"Restaurant s"} label={"Restaurant S"}
                        eClick={() => SweetAlert2(ApkRestaurant, "https://restaurant-taupe.vercel.app/", "https://github.com/steveenEPM/Restaurant.git")}
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

//https://github.com/steveenEPM/apkClima.git