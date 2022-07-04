import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pets } from "../../@types/pets";
import { ApiService } from "../../services/apiService";

export function UseIndex(){
    const [listaPets, setListaPets] = useState<Pets[]>([]),
          [petSelecionado, setPetSelecionado] = useState<Pets | null>(null),
          [email, setEmail] = useState(''),
          [valor, setValor] = useState(''),
          [mensagem, setMensagem] = useState('');

    useEffect(() => {
      ApiService.get('/pet')
        .then((resposta) => {
          setListaPets(resposta.data);
        })
    }, [])      

    useEffect(()=>{
      if (petSelecionado === null){
        limparFormulario();
      }
    }, [petSelecionado])

    function Adotar(){
      if (petSelecionado !== null){
        if (validarDadosAdoption()){
          ApiService.post('/adoption', {
            pet_id: petSelecionado.id,
            email: email,
            valor: valor
          })
            .then(() => {
              setPetSelecionado(null);
              setMensagem('Pet adotado com sucesso!');
              limparFormulario();
            })
            .catch((error: AxiosError) => {
              setMensagem(error.response?.data.message);
            })
        } else {
          setMensagem('Preencha todos os campos corretamente');
        }
      }
    }

    function validarDadosAdoption(){  
      return email.length > 0 && valor.length > 0;
    }

    function limparFormulario(){
      setEmail('');
      setValor('');
    }

    return {
      listaPets,
      petSelecionado,
      setPetSelecionado,
      email,
      setEmail,
      valor,
      setValor,
      mensagem, 
      setMensagem,
      Adotar
    };
}