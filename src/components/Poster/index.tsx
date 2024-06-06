import { Container } from "./styles"
import Link from 'next/link';
import { useRouter } from 'next/router'

interface PosterProps {
    title: string;
    imgUrl: string;
}
export const Poster: React.FC<PosterProps> = ({ title, imgUrl }) => {
    const router = useRouter()

    return (
        <Container onClick={() => router.push('/movie')}>
            <div className="image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
        </Container>
    )
}