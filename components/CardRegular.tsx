import { Card, Text, Grid, Image } from '@nextui-org/react';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import cx from 'classnames';
import ButtonLink from "@/components/shared/ButtonLink";
import Html from "@/components/shared/Html";

type Card = {
    link: string,
    image: string,
    title: string,
    subtitle?: string,
    bodyHtml?: string
}

interface ICardRegular {
    list: Array<Card>,
    cardBodyStyle?: string,
}

const CardRegular:React.FC<ICardRegular> = ({list, cardBodyStyle}) => {
    return (
        <Grid.Container gap={2}>
        {              
            list && list.map((each, index) => {
                return (
                    <Grid key={index} xs={6} sm={4} md={3} alignItems="stretch">
                        <ButtonLink href={each.link}>
                            <Card className={cx(cardStyles.cardRegular__card)}>
                                <Card.Header css={{ p: 0, }}>
                                    <Image 
                                        src={each.image} 
                                        alt='Partner Image' 
                                        objectFit="cover"
                                        width={280}
                                        className={cx(cardStyles.cardRegular__card_image)}
                                        />
                                </Card.Header>

                                <Card.Body>
                                    <div className={cx(cardStyles.cardRegular__headline, cardBodyStyle)}>
                                        <h2 className={cx(cardStyles.cardPrice__title)}>{each.title}</h2>
                                        <p>{each.subtitle}</p>

                                        {each.bodyHtml && 
                                            <Html html={each.bodyHtml}/>
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                        </ButtonLink>
                    </Grid>
                )
            })  
        }
    </Grid.Container> 
    )
}

export default CardRegular;