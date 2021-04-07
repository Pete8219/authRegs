import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand">Регламенты управления</a>
            </Link>
            <div className="menu">
            <Link href="/admin/users">
                <a className="create">Пользователи</a>
            </Link>
             <Link href="/admin/users/new">
                <a className="create">Создать пользователя</a>
            </Link>
            <Link href="/admin/categories/">
                <a className="create">Категории</a>
            </Link>
            <Link href="/admin/posts">
                <a className="create">Регламенты</a>
            </Link>
            </div>
          
        </nav>
    )
}

export default Navbar