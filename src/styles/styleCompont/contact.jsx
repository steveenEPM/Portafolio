import styled from "styled-components";

const Container = styled.div`

    background-color: rgba(255,0,0,.2);
    padding: 2% 5%;
    position: relative;
    width: -webkit-fill-available;
    max-height: 1200px;
    overflow: hidden;
    font-weight: bold;
    display: flex;
    gap: 22px;
    flex-direction: column;
   
   
    h2{
        font-size: 22px;
        margin: 0%;
    }


    button {       
        display:flex;
        flex-direction: row;
        gap:7px;
        background-color: inherit;
        border:none;
        margin-bottom: 12px;
        align-items: center;
        justify-content: center;

        i {
            font-size: 20px;
            transform: translateY(-3px);
            
        }
        span {
            font-size: 17px;
            
        }
    }

`

export default Container

