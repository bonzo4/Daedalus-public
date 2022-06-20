import { Card,  Grid, Image } from '@nextui-org/react';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import cx from 'classnames';
import ButtonLink from "@/components/shared/ButtonLink";

type Card = {
    link: string,
    image: string,
    title: string,
    subtitle?: string,
    authorImage: string
}

interface ICardAuthor {
    list: Array<Card>
}

const CardAuthor:React.FC<ICardAuthor> = ({list}) => {
    return (
        <Grid.Container gap={1}>
        {              
            list && list.map((each, index) => {
                return (
                    <Grid key={index} xs={6} sm={4} md={3} >
                        <Card className={cx(cardStyles.cardAuthor__card)}>
                            <Card.Header css={{ p: 0 }}>
                                <Image src={each.image} alt='Partner Background Image' className={cx(cardStyles.cardAuthor__image)}/>                       
                            </Card.Header>

                            <Card.Body css={{ overflowY: 'visible' }}>
                                <div className={cx(cardStyles.cardAuthor__headline)}>
                                    <div className={cx(cardStyles.cardAuthor__author_container)}>
                                        <Image 
                                            src={each.authorImage} 
                                            alt='Author Image' 
                                            width={80} 
                                            height={80} 
                                            className={cx(cardStyles.cardAuthor__author_image)}
                                            objectFit="contain"
                                        />
                                    </div>

                                    <h2 className={cx(cardStyles.cardAuthor__title)}>{each.title}</h2>

                                    <p>{each.subtitle}</p>
                                </div>
                            </Card.Body>

                            <Card.Footer>
                                <ButtonLink href={each.link} buttonClass={true} className={cx(cardStyles.cardAuthor__button)}>
                                    Follow
                                </ButtonLink>
                            </Card.Footer>
                        </Card>
                    </Grid>
                )
            })  
        }
    </Grid.Container> 
    )
}

export default CardAuthor;