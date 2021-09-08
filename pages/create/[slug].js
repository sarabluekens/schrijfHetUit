// ------------------------------------------------------------

import Message from '../../components/Message';
import styles from '../../styles/detail.module.css'
// import Metadata from '../components/Metadata'
// import { useRouter } from "next/router";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;


const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export const getStaticPaths = async () => {
    const data = await client.getEntries({ content_type: 'message' })

    const paths = data.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    //  geeft een array terug van 1 element!
    const { items } = await client.getEntries({
        content_type: 'message',
        'fields.slug': params.slug
    })

    // redirect als de gevraagde url niet bestaat
    if (!items.length) {
        return {
            redirect: {
                destination: "/404",
                permanent: false
            }
        }
    }

    return {
        // zet array om naar object
        props: { message: items[0] },
        revalidate: 1,
    }
}

export default function readMessage({ message }) {
    // fallback, die een loading state toont tewijl next de data opvraagd en pagina genereerd
    if (!message)
        return (
            <>
                <div>Working on it!...</div>
                {console.log("maken")}
            </>
        )
    let colorScheme = message.fields.mood;

    let classHappy = styles.happy;
    let classSad = styles.sad;
    let classNeutral = styles.neutral;
    let classAngry = styles.angry;
    let classLove = styles.love;

    return (
        <section className={colorScheme === "happy" ? classHappy : colorScheme === "sad" ? classSad : colorScheme === "love" ? classLove : colorScheme === "angry" ? classAngry : classNeutral}>
            <Message key={message.fields.slug} message={message} link={"/"} />
        </section>
    )
}
