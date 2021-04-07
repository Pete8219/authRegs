import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button, Form, Loader, Checkbox } from 'semantic-ui-react'
import { useRouter } from 'next/router'

const NewUser = () => {
    const [form, setForm] = useState( {
        name:'',
        email: '',
        password: '',
        isAdmin: false
     })
     const [isSubmitting, setIsSubmitting] = useState(false)
     const [errors, setErrors] = useState({})
     const router = useRouter()

     useEffect(()=> {
        if(isSubmitting) {

            if(Object.keys(errors).length == 0 ) {
                console.log('yapp')
                createUser()
                
                
            } else {
                setIsSubmitting(false)
            }
        }
     },[errors])

     const createUser = async () => {
         try {
             const res = await fetch(`${process.env.SERVER}/api/users`, {
                 method: 'POST',
                 headers: {
                     "Accept": "application/json",
                     "Content-Type": "application/json"

                 },
                 body: JSON.stringify(form)
             })
             router.push(`${process.env.SERVER}/admin/users`)
         } catch (error) {
             console.log(error)
         }
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         
         let errs = validate()
         
         setErrors(errs)
         setIsSubmitting(true)
    /*      setForm( {
            name:'',
            email: '',
            password: '',
            isAdmin: false

        }) */
     }

     const handleChange = (e) => {
         const target = e.target
        
        const value = target.type === 'checkbox' ? console.log('dfgdfgdf') : target.value
        const name = target.name
         setForm({
             ...form,
             [name]: value
         })
     }

     const handleChecked = (e) => {
         if (e.target.checked) {
             console.log(e.target.value)
         }
     }

     const validate = () => {
         let err = {}

         if(!form.name) {
             err.name = 'Name is required'
         }
         if(!form.email) {
             err.email = 'Email is required'
         }

         return err

     }

     return(
         <div className="form-container">
             <h1>Новый пользователь</h1>
             <div>
                 {
                 isSubmitting
                    ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSubmit}>
                        <Form.Input
                            fluid
                            error={errors.name ? { content: 'Введите имя пользователя', pointing: 'below'}: null}
                            label="Имя"
                            placeholder='Name'
                            name='name'
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            error={errors.password ? { content: 'Введите пароль', pointing: 'below'}: null}
                            label='Пароль'                            
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                        /> 
                          <Form.Input
                            fluid
                            error={errors.email ? { content: 'Введите email', pointing: 'below'}: null}
                            label='Email'                            
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                        /> 
                            <Form.Field>
                           <label>
                               Поставить админом??
                           
                           <input
                             type="checkbox"
                             name='isAdmin'
                             checked={form.isAdmin}
                             onChange={handleChange}
                              />
                          </label>
                          </Form.Field>
                           
                            
                            
                             
                        

                        <Button type='submit'>Create</Button>   

                    </Form>
                }
             </div>
         </div>
     )


}

export default NewUser