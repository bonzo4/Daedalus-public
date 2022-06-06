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
                wrap="nowrap"
                justify="space-between" 
                gap={2} 
                alignItems="center">
                <Grid xs={5}>
                    <div className={styles.container__left}>
                        <h2>{ title }</h2>
                        <p>{ description }</p>

                        <form>
                            <Input
                                size="lg"
                                placeholder="Email"
                                labelPlaceholder="Your email"
                            />

                            <Button
                                type="button" 
                                text="I'm interested!"
                                className={cx(styles.container__left_button)}
                            />
                        </form>
                    </div>
                </Grid>

                <Grid xs={7} justify="flex-end">
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