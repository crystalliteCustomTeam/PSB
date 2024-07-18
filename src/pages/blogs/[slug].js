import { useRouter } from 'next/router'

export default function slug({params}) {
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
}
