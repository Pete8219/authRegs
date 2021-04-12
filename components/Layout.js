import Head from 'next/head'

import Navbar from './Navbar'
import { Container } from 'semantic-ui-react'

const Layout = ( { children }) => (
    <>
        <Head>
            <title>Регламенты управления</title>
        </Head>
        <Navbar/>
        <Container>
            
            { children }
            </Container>
    </>
)

export default Layout