import styled from 'styled-components';

export const Formulario=styled.form`
    width: 50%;
    height: 100%;
    margin: auto;
    margin-top: 2%;
    background-color: #fff;

    /* Header do formulario */
    nav.header{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    nav.header > h3{
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 2%;
    }

    /* Main do formulario */
    nav.main{
        width: 100%;
        height: auto;
        margin:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    nav.main span.form-group{
        width: 70%;
       margin-top: 10px;
       display: flex;
       flex-direction: column;
       font-family: Arial, Helvetica, sans-serif;
    }

    nav.main span.form-group input, select{
        margin-top: 2px;
        padding: 10px;
    }
    nav.main span.form-group label{
        margin: 5px 0px 3px 0px;
    }

    nav.main span.form-group label>span{
        color: #c7c7c7;
    }


`;


export const Button=styled.button`
    width: 25%;
    margin: 10px 0px 20px 0px;
    padding: 10px;
    background-color: hsl(198, 48%, 58%);
    cursor: pointer;
    color:hsl(0, 0%, 100%);
    border:1px solid #fff;
    border-radius: 10px;

    &:hover{
        background-color: hsl(198, 70%, 58%);
    }
`;