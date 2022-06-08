import styles from "../styles/components/HeroMain.module.scss";
import cx from "classnames";
import { Image, Grid, Input } from "@nextui-org/react";
import Button from './shared/Button';

interface HeroMain {
    title: string,
    description?: string,
    imageBlock: string,
    waitlist?: Boolean
}

const HeroMain: React.FC<HeroMain> = ({title, description, imageBlock, waitlist}) => {
    return (
        <div className={cx('wrapper', styles.container)}>
            <Grid.Container  
                justify="center" 
                alignItems="center">
                <Grid xs={12} md={5} justify="center">
                    <div className={cx(styles.container__left, 'mb1')}>
                        <h2>{ title }</h2>
                        <p>{ description }</p>

                        <form>
                            <Input
                                size="lg"
                                placeholder="Email"
                                labelPlaceholder="Your email"
                            />

                            <Button className={cx(styles.container__left_button)}>
                                {"I'm interested!"}
                            </Button>
                        </form>
                    </div>
                </Grid>

                <Grid xs={12} md={7} justify="center">
                    <div className={styles.container__right}>
                        <Image 
                            showSkeleton
                            src={imageBlock}  
                            alt="Nft collage image"  
                            objectFit="cover"/>
                    </div>
                </Grid>
            </Grid.Container>
        </div>
    )
}


export default HeroMain;