import Button from '@/components/shared/Button';
import cx from "classnames";
import styles from '@/styles/components/PortalBanner.module.scss'; 
import { Grid } from '@nextui-org/react';

interface IPortalBanner {
    routeName: String,
    walletInfo?: String, 
}

const PortalBanner:React.FC<IPortalBanner> = ({routeName, walletInfo}) => {
    const handleRequestingWallet = () => {
        return "12312412412";
    }

    return (
        <div className={cx(styles.portalBanner__container)}>
            <Grid.Container alignItems='center'>
                <Grid xs={6} className={cx(styles.portalBanner__left)}>
                    <h2>{routeName}</h2>
                </Grid>

                <Grid xs={6} justify="flex-end" className={cx(styles.portalBanner__right)}>
                    <Button click={handleRequestingWallet}>
                        Select Wallet
                    </Button>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default PortalBanner;