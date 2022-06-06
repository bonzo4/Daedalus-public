import styles from "../styles/components/HeroMain.module.scss";
import cx from "classnames";
import { Image } from "@nextui-org/react";

interface HeroMain {
    title: string,
    description?: string,
    imageBlock: string,
    waitlist?: Boolean
}

const HeroMain: React.FC<HeroMain> = ({title, description, imageBlock, waitlist}) => {
    return (
        <div className={cx(styles.container, 'wrapper')}>
            <div className={styles.container__left}>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>

            <div className={styles.container__right}>
                <Image 
                    showSkeleton
                    src={imageBlock}  
                    alt="Nft collage image"  
                    objectFit="cover"/>
            </div>
        </div>
    )
}


export default HeroMain;