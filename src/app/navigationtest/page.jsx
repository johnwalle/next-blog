'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const navigationTestPage = () => {
    const router = useRouter();
    const pathname = usePathname();

    const clickhandler = () => {
        console.log(pathname);
        router.push('/about')
    }

    return (
        <div>
            <Link href='/' prefetch={false} >Home</Link>
            <button onClick={clickhandler}>Redirect to About page</button>
        </div>
    )
}

export default navigationTestPage
