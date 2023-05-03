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
    gap: 12px;
    flex-direction: column;
   
   
    h2{
        font-size: 22px;
        margin: 0%;
    }


    button {       
        display:flex;
        flex-direction: row;
        gap:12px;
        background-color: inherit;
        border:none;
        margin-bottom: 12px;
        cursor:pointer;
    }

`

export default Container

