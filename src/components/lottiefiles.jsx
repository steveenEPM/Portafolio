/**
 * Este componentes muestra  imagenes Optenidas por lotifiles
 */
import { Player } from '@lottiefiles/react-lottie-player';
import { createRef } from 'react';

const Imagen = ({url,size}) => {

    const ref = createRef()

    return (
        <div>
            <Player
                ref={ref}
                autoplay
                loop
                src={url}
                style={{ height: size, width: size }}
            />
        </div>
    )

}

export default Imagen