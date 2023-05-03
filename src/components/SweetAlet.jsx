/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const SweetAlert2 = (url, link, github) => {

    const MySwal = withReactContent(Swal)



    const HtmlJSX = () => {

        return (
            <Element>
                <img src={url} alt={url} width={450} height={250} />

                <div>
                    <button
                        onClick={() => window.location.href=link }
                    >
                        <i className="fa-sharp fa-solid fa-globe" style={{ color: "#a1a1a1" }}></i>
                        Visitar
                    </button>
                    <button
                        onClick={()=> window.location.href=github }
                    >
                        <i className="fa-brands fa-github" style={{ color: "#616161" }}></i>
                        Git hub
                    </button>
                </div>
            </Element>
        )
    }


    MySwal.fire({
        title: <h3 style={{fontSize:18,fontWeight:"bold",fontStyle:"normal"}}>Pet Shop</h3>,
        html: <HtmlJSX />,
        confirmButtonText: 'Cerrar',
        confirmButtonColor:'rgba(255,0,0,1)'


    })

}

const Element = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:7px;
        margin-block: 2%;

        button {
            padding: .5% 4%;
            display: flex;
            flex-direction: row;
            border:none;
            gap:15px;
            background-color: inherit;
            color:gray;
            cursor: pointer;
        }

    }

`

export default SweetAlert2