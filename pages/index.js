import Link from 'next/link'
import { Button, Card } from 'semantic-ui-react'

const  Home = ( {data }) => {
  if(!data) {
    return (
      <p>Loading ...</p>
    )
  }
  
  return (
    <div>
      <h1>Home Page</h1>
        
            { data.map( user => {
              return (
                <Card>{user.name}{' '}{user.email}</Card>
                  
              )
              
            })}
       
    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch('http://localhost:3000/api/users')
  
  const { data } = await result.json()

  console.log(data)

  return {
    props: { data }
  }

}

export default Home
