import Link from "next/link";
import { useEffect} from 'react'
import { useRouter} from 'next/router'
import Metadata from '../components/Metadata'
import Image from 'next/image';

export default function Custom404() {

    // auto redirect
    const router = useRouter();
    useEffect( ()=> {
        setTimeout (() => {
            router.push("/");
        }, 5000)
    }, [])

  return (
    <>postduif
        <Metadata page="404"/>
        <div>
            <h1>Page not found</h1>
            <p>Ai. Het lijkt erop dat de postduif een verkeerde afslag heeft genomen. Probeer het later eens opnieuw...</p>
            image
            <Image src="/img/postduif.png"width="800" height="800"/>
        <p>This page auto redirects to the <Link href="/">Homepage</Link> in 5 seconds</p>  
        </div>
    </>
  )
}