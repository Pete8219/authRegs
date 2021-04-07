import Link from 'next/link'
import { Button, Card, Icon, Label, Menu, Table} from 'semantic-ui-react'

const  UsersList = ( {data }) => {

  
  return (
    <div >
      <h1>Список пользователей</h1>
        <div className="table-container">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Пользователь</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Роль</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { data.map( (user, index) => {
                        return (
                            <Table.Row key={user._id}>
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.isAdmin ? 'Админ': 'Пользователь'}</Table.Cell>
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
  const result = await fetch(`${process.env.SERVER}/api/users`)
  
  const { data } = await result.json()


  return {
    props: { data }
  }

}

export default UsersList
