import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Box2,
    Inputlabel,
    Select,
    Option,
    B,
    H1,
    H2,
    Button,
    Image,
    Input
} from "./styles";
import Hamburguer from "../../assents/Burguer.jpg";

function App() {

    const [pedidos, setPedidos] = useState([]);
    const navigate = useNavigate()
    const pedidoBurguer = useRef()
    const pedidodrink = useRef()
    const pedidoName = useRef()

    async function addPedido() {
        const { data: newPedido } = await axios.post("http://localhost:3005/pedido",
            {
                Name: pedidoName.current.value,
                Burguer: pedidoBurguer.current.value,
                drink: pedidodrink.current.value
            });


        setPedidos([...pedidos, newPedido]);
        navigate("/pedidos")
    }




    return (

        <Box>
            <H2>WWW.</H2>
            <H1>HAMBURGUERIA</H1>

            <Image alt='Burguer' src={Hamburguer} />
            <H2></H2>
            <Box2>
                <H2>Faça seu Pedido</H2>
                <Inputlabel>
                    <B>Nome</B>
                    <Input ref={pedidoName} placeholder="nome" />
                </Inputlabel>
                <Inputlabel>
                    <B>Burguer</B>
                    <Select ref={pedidoBurguer}>
                        <Option ></Option>
                        <Option value="X Salada">X Salada</Option>
                        <Option value="X Frango">X Frango</Option>
                        <Option value="X Bacon">X Bacon</Option>
                        <Option value="X Da Casa">X Da Casa</Option>
                        <Option value="Cachorro Quente">Cachorro Quente</Option>
                    </Select>
                </Inputlabel>
                <Inputlabel>
                    <B>Soft Drink</B>
                    <Select ref={pedidodrink}>
                        <Option ></Option>
                        <Option value="Coca Cola Lata">Coca Cola Lata</Option>
                        <Option value="Guarana Antatica Lata">Guarana Antatica Lata</Option>
                        <Option value="Agua 500ml">Agua 500ml</Option>
                        <Option value="Suco Laranja 500ml">Suco Laranja 500ml</Option>
                    </Select>
                </Inputlabel>
                <Button onClick={addPedido}>Finalizar Pedido</Button>

            </Box2>
        </Box>
    );
}

export default App;