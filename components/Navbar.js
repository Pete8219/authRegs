import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand">AuthRegs App</a>
            </Link>
            <Link href="/new">
                <a className="create">Create user</a>
            </Link>
        </nav>
    )
}

export default Navbar