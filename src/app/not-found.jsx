import Link from 'next/link'
const NotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <p>Sorry, The page that you are looking for doesn't exist.</p>
            <Link href='/'>Return to Home</Link>
        </div>
    )
}

export default NotFound
