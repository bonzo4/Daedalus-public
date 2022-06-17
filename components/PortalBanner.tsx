import Button from '@/components/shared/Button';
import cx from "classnames";
import styles from '@/styles/components/PortalBanner.module.scss'; 
import { Grid } from '@nextui-org/react';
import { withGlobalProvider } from "@/context/GlobalProvider";

interface IPortBanner{
    portalRouteText: String,
    walletInfo: string
}

const PortalBanner:React.FC<IPortBanner> = ({portalRouteText, walletInfo}) => {
    const handleRequestingWallet = () => {
        return "12312412412";
    }

    return (
        <div className={cx(styles.portalBanner__container)}>
            <Grid.Container alignItems='center'>
                <Grid xs={6} className={cx(styles.portalBanner__left)}>
                    <h2>{portalRouteText}</h2>
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

export default withGlobalProvider(PortalBanner);