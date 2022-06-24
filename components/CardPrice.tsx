import { Card,  Grid, Image } from '@nextui-org/react';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import cx from 'classnames';
import ButtonLink from "@/components/shared/ButtonLink";

type Card = {
    link: string,
    image: string,
    title: string,
    subtitle?: string,
    price: string
}

interface ICardPrice {
    list: Array<Card>
    buttonText: string
}

const CardPrice:React.FC<ICardPrice> = ({list, buttonText}) => {
    return (
        <Grid.Container gap={1} wrap="wrap">
        {list && list.map((each, index) => {
                return (
                    <Grid key={index} xs={6} sm={4} md={3} >
                        <Card className={cx(cardStyles.cardPrice__card)}>
                            <Card.Header css={{ p: 0 }}>
                                <Image src={each.image} alt='Partner Image'/>
                            </Card.Header>

                            <Card.Body>
                                { each.subtitle &&
                                    <p className={cx(cardStyles.cardPrice__subtitle)}>
                                        { each.subtitle }
                                    </p>
                                }
                                <div className={cx(cardStyles.cardPrice__headline)}>
                                    <h2 className={cx(cardStyles.cardPrice__title)}>{each.title}</h2>
                                    <p>{each.price} SOL</p>
                                </div>
                            </Card.Body>

                            <Card.Footer>
                                <ButtonLink href={each.link} buttonClass={true} className={cx(cardStyles.cardPrice__button)}>
                                    Partnership Request
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

export default CardPrice;