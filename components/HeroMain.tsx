import styles from "../styles/components/HeroMain.module.scss";
import Image from 'next/image';

interface HeroMain {
    title: string,
    description?: string,
    images: Array<string>,
    waitlist?: Boolean
}

const HeroMain: React.FC<HeroMain> = ({title, description, images, waitlist}) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__left}>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>

            <div className={styles.container__right}>
                {images.map((url, index) => (
                    <Image src={url} key={index} alt="short image" layout="fill"/>
                ))}
            </div>
        </div>
    )
}


export default HeroMain;