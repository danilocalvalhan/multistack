import { useState } from "react";
import { Pets } from "../../@types/pets";

export function UseIndex(){
    const [listaPets, setListaPets] = useState(
        [
            {
              id: 1,
              name: 'Bidu',
              textHistory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At a sunt tempora. Velit vel tenetur maiores esse, temporibus vitae placeat est quis magnam sunt consectetur et nostrum a ullam autem?',
              image: "https://brazilianpetfoods.com.br/wp-content/uploads/2020/04/dog-885752_1280-1.jpg"
            },
            {
              id: 2,
              name: 'Dengoso',
              textHistory: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At a sunt tempora. Velit vel tenetur maiores esse, temporibus vitae placeat est quis magnam sunt consectetur et nostrum a ullam autem?',
              image: "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
            }
          ]
    )

    const [petSelecionado, setPetSelecionado] = useState<Pets | null>(null);
    const [email, setEmail] = useState('');
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');
    function Adotar(){
      return
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