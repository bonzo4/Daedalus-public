import { Image, Grid, Card } from '@nextui-org/react';
import cx from 'classnames';

interface IImageBlock  {
    title?: string,
    description?: string,
    image: string,
    blockTitle: string,
    blockDescription: string, 
}

const ImageBlock: React.FC<IImageBlock> = ({title, description, image, blockTitle, blockDescription}) => {
    return (
        <section className={cx('imageBlock', 'wrapper')}> 
            { title && 
                <div className={cx('imageBlock__top')}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            }

            <Grid.Container gap={2} justify="center">
                <Grid>
                    <Image src={image} alt="Elysian Image" showSkeleton/>
                </Grid>

                <Grid>
                    <h3>{blockTitle}</h3>
                    <p>{blockDescription}</p>
                </Grid>
            </Grid.Container>
        </section>
    )
}


export default ImageBlock;