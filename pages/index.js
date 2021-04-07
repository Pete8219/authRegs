import Link from 'next/link'
import { Button, Card } from 'semantic-ui-react'

const  CategoryList = ( {data }) => {
  if(!data) {
    return (
      <p>Loading ...</p>
    )
  }
  
  return (
    <div className="notes-container">
      <h1>Выберите категорию</h1>
        <div className="grid wrapper">
            { data.map( category => {
              return (
                <div key ={ category._id}>
                    <Card>
                      <Card.Content>
                          <Card.Header>
                            <Link href={`/${category._id}`}>
                                <a>{category.title}</a>
                            </Link>
                          </Card.Header>

                      </Card.Content>
                      <Card.Content extra>
                      <Link href={`/${category._id}`}>
                        <Button primary>View</Button>
                      </Link>
                      <Link href={`/${category._id}/edit`}>
                        <Button primary>Edit</Button>
                      </Link>
                      </Card.Content>
                     </Card>
                </div>  
              )
              
            })}
      </div> 
    </div>
  )
}

export async function getStaticProps() {
  const result = await fetch(`${process.env.SERVER}/api/categories`)
  
  const { data } = await result.json()


  return {
    props: { data }
  }

}

export default CategoryList
