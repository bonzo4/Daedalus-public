import { Image, Grid, Card } from '@nextui-org/react';
import cx from 'classnames';
import styles from '../styles/components/ImageBlock.module.scss';
import Button from './shared/Button'

interface IImageBlock  {
    title?: string,
    description?: string,
    image: string,
    blockTitle: string,
    blockDescription: string, 
}

const ImageBlock: React.FC<IImageBlock> = ({title, description, image, blockTitle, blockDescription}) => {
    return (
        <section className={cx(styles.imageBlock, 'imageBlock', 'wrapper')}> 
            { title && 
                <div className={cx(styles.imageBlock__top, 'imageBlock__top')}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            }

            <Grid.Container gap={1} justify="center" wrap="nowrap">
                <Grid xs={6}>
                    <Image src={image} alt="Elysian Image" showSkeleton/>
                </Grid>

                <Grid xs={6} alignItems="center">
                    <div className={cx(styles.imageBlock__bottom_text)}>
                        <h3>{blockTitle}</h3>
                        <p dangerouslySetInnerHTML={{ __html: blockDescription}}></p>

                        <Button 
                            type="button"
                            text="Buy on Magic Den"
                        />
                    </div>
                </Grid>
            </Grid.Container>
        </section>
    )
}


export default ImageBlock;