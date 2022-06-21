import type { NextPage } from 'next'
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
    </div>
  )
}

export default Home
