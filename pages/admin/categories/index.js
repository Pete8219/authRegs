import Link from 'next/link'
import { Button, Card, Icon, Label, Menu, Table} from 'semantic-ui-react'

const  CategoryList = ( {data }) => {

  
  return (
    <div >
      <h1>Список категорий</h1>
        <div className="table-container">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Название категории</Table.HeaderCell>
                        <Table.HeaderCell>{'  '}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { data.map( (category, index) => {
                        return (
                            <Table.Row key={category._id}>
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>{category.title}</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        )
                
                    })}
                </Table.Body>
            </Table>
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
