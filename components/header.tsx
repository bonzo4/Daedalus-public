import Button from './shared/Button';
import { Image, Grid, Input } from '@nextui-org/react';
import cx from 'classnames';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
    const pageData = {
        logoUrl: 'https://images.prismic.io/anatta-design/f5ef2d09-77e6-45e2-a6f4-3edf73b25250_daedalus-labs-symbol-full-color-version-rgb-12in%40300ppi+1.png?auto=compress,format'
    }
    return (
        <header className={cx(styles.header, 'header') }>
            <div className={cx('wrapper')}>
                <Grid.Container justify="space-between" alignItems="center">
                    <Grid>
                        <Image src={pageData.logoUrl} alt="Daedalus logo" showSkeleton objectFit="cover" width={50} height={50}/>
                    </Grid>

                    {/* <Grid>
                        <Input size="lg" placeholder='Search collection' contentLeft={

                        } />
                    </Grid> */}

                    <Grid>
                        <nav className={cx(styles.header__nav)}>
                            <Button 
                                type="link"
                                text="Collections"
                                href="/collections"
                                className={cx(styles.header__nav_text)}
                            />

                            <Button 
                                type="link"
                                text="Calendar"
                                href="/calendar"
                                className={cx(styles.header__nav_text)}
                            />

                            <Button 
                                type="link"
                                text="FAQ"
                                href="/faq"    
                                className={cx(styles.header__nav_text)}
                            />
                            
                            <div>
                                <Button
                                    type="button"
                                    text="Select Wallet"
                                    href=""
                                />
                            </div>
                        </nav>
                    </Grid>
                </Grid.Container>
            </div>
        </header>
    )
}

export default Header;