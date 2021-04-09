import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import  NewUser   from './new'
import { createUser } from './new'
import { Form, Button, Card, Icon, Label, Menu, Table, TableCell, Popup, Modal} from 'semantic-ui-react'

const  UsersList = ( { data }) => {

  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  const [open, setOpen] = useState(false)




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

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open = {open}
        trigger = {<Button>Show Modal</Button>}
      >
        <Modal.Content>
          <NewUser/>
        </Modal.Content>

        <Modal.Actions>
          <Button color='blue' onClick={ () => setOpen(false)}>
            Закрыть
          </Button>
        </Modal.Actions>
        

      </Modal>


      <h1>Список пользователей</h1>
        <div className="table-container">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Пользователь</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Роль</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                       
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
    
  }

}

export default UsersList
