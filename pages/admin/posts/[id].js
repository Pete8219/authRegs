import { useState } from 'react'
import { Card, Form, Input, Button } from 'semantic-ui-react'

export default function Post({ data }) {
    console.log(data)

    const [form, setForm] = useState({
        title: data.title,
        body: data.body,
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form>
                <Form.Input
                    fluid
                    name='title'
                    value={form.title}
                    onChange={changeHandler}
                />
                    
                
            </Form>
           
        </div>
    )
}

export const getStaticProps = async (ctx) => {
    const res = await fetch(`${process.env.SERVER}/api/posts/${ctx.params.id}`)

    const { data }  = await res.json()
    
    return {
        props: {
            data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.SERVER}/api/posts`)
    const { data } = await res.json()
    
    
    const ids = data.map(post => post._id )
    
    const paths = ids.map(id =>  ({params: { id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }
    
    
}
