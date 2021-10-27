import styled from "styled-components";

export const Conatiner = styled.div`
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
h1 {
    padding: 0 90px;
}
.select {
    padding: 0 90px;
}
.tabela{
    padding: 0 90px;
}
.pesquisa {
    display: flex;
    margin-bottom: 10px;
    margin-left: 69%;
    
    input{
            border: 1px  solid #6c757d;
            float: left;
            border-radius: 5px;
            background-color: transparent;
            width: 300px;
            height: 50px;
            text-align: center;
    }
    button {
                width: 50px;
                height: 50px;
                margin-left: 5px;
                border-radius: 10px;
                background-color: #404040;
                border: -items: center;
    }
    .icon{
        width: 25px;
        height: 25px;
        margin-left: 5px;
        margin-bottom: 0;
        cursor: pointer;
        border-radius: 10px;
        align-items: center;
        border: none;
        color: #FFF;
    }
}
.resultados {

    
    margin-left: 69%;
    width: 300px;
    height: 50px;
    margin-bottom: 80px;

}
.item{
    border: 1px  solid #6c757d;
    border-radius: 5px;
    background-color: transparent;
    display: block;
    width: calc(100% - 20px;);
    height: 150px;
    padding: 5px;
    background-color: #a6a6a6;
}
    .item:hover{
        width: calc(100% - 20px;);
        padding: 5px;
        cursor: pointer;
        background-color: #FFF;
    }
`;
