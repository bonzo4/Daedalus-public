import ButtonLink from './shared/ButtonLink';
import { Image, Grid, Input } from '@nextui-org/react';
import cx from 'classnames';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
    const pageData = {
        logoUrl: 'https://images.prismic.io/daedaluslabs/503acd4a-3154-4c3f-84e3-565952b5f66a_DaedaluSide.png?auto=compress,format'
    }
    return (
        <header className={cx(styles.header, 'header') }>
            <div className={cx('wrapper')}>
                <Grid.Container justify="space-between" alignItems="center">
                    <Grid>
                        <ButtonLink href="/">
                            <Image src={pageData.logoUrl} alt="Daedalus logo" showSkeleton objectFit="cover" width={240} height={50}/>
                        </ButtonLink>
                    </Grid>

                    <Grid>
                        <nav className={cx(styles.header__nav)}>
                            <ButtonLink
                                buttonClass={true}
                                href="/login"    
                                >
                                Join US
                            </ButtonLink>
                           
                        </nav>
                    </Grid>
                </Grid.Container>
            </div>
        </header>
    )
}

export default Header;