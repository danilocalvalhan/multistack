import type { NextPage } from 'next'
import ListGenerator from '../ui/components/list/list'
import TitleGenerator  from '../ui/components/title/title'



const Home: NextPage = () => {
  return (
    <div>
      <TitleGenerator 
        firstTitle = '' 
        secondTitle={
        <span>
          Com um pequeno valor mensal, você <br/>
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      }/>

      <ListGenerator
      pet={[
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
      ]}
      />
    </div>
  )
}

export default Home
