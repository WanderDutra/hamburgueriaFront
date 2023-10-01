
import React, { useState,useEffect} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Box2,
    H1,
    H2,
    Button,
    Image,
    User
} from "./styles";
import Hamburguer from "../../assents/Burguer.jpg";
import Loot from "../../assents/loot.svg";


function App() {
    const [pedidos, setPedidos] = useState([]);
    const navigate = useNavigate()
async function deletePedido(pedidoid){ 
    await axios.delete(`http://localhost:3005/pedido/${pedidoid}`)
const newPedido = pedidos.filter(pedido => pedido.id !== pedidoid)
setPedidos(newPedido);
}
useEffect(() => {
    async function upPedidos() {
        const { data: newPedido } = await axios.get("http://localhost:3005/pedido");

        setPedidos(newPedido);
    }

    upPedidos()
}, [])

function goBackPage(){
navigate("/")

}

    return (
        <Box>
            <H2>WWW.</H2>
            <H1>HAMBURGUERIA</H1>

            <Image alt='Burguer' src={Hamburguer} />
            <H2></H2>
            <Box2>
                <H2>Pedidos</H2>
                <ul>
                    {pedidos.map((pedido) => (<User Key={pedido.id}>
                        <p>{pedido.Name} :  {pedido.Burguer} - {pedido.drink} </p>
<button onClick={() =>deletePedido(pedido.id)} ><img src={Loot} alt='lataDeLixo' /></button>
                    </User>))}

                </ul>
                <Button onClick={goBackPage} >Voltar</Button>

            </Box2>
        </Box>
    );
}
export default App;