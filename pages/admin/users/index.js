import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Button, Card, Icon, Label, Menu, Table, TableCell, Popup} from 'semantic-ui-react'

const  UsersList = ( { data }) => {

  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)


  const handleDelete = async (id) => {

        try {
          const res = await fetch(`${process.env.SERVER}/api/users/${id}`, {
            method: "DELETE"
          })
          router.push("/admin/users")
      
        } catch (error) {
          console.log(error)
        }
        

}  
  
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
                        <Table.HeaderCell>Удалить</Table.HeaderCell>
                       
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { data.map( (user, index) => {
                        return (
                            <Table.Row key={user._id}>
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>
                                  <Link href={`/admin/user/${user._id}/edit`}>
                                      {user.name}
                                  </Link>   
                                </Table.Cell>
                                  
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.isAdmin ? 'Админ': 'Пользователь'}</Table.Cell>
                                <Table.Cell>
                                     <Popup
                                        trigger={<Icon name='user delete' size='large' onClick={() =>  handleDelete(user._id) }/>}
                                        content='Удалить пользователя'
                                        position='top left'
                                    /> 
                                  </Table.Cell>
                             
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
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }

}

export default UsersList
