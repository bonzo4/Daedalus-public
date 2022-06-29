import Button from '@/components/shared/Button';
import cx from "classnames";
import styles from '@/styles/components/PortalBanner.module.scss';
import { Grid } from '@nextui-org/react';
import { withGlobalProvider } from "@/context/GlobalProvider.js";
import { svgHtml } from '@/utils/index.js';
import Html from '@/components/shared/Html';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface IPortBanner {
    portalRouteText: String,
    walletInfo: string,
    setDrawerActivity?: Function

}

const PortalBanner: React.FC<IPortBanner> = ({ portalRouteText, walletInfo, setDrawerActivity }) => {
    const handleRequestingWallet = () => {
        return "12312412412";
    }

    const handleOpenDrawer = () => {
        if (setDrawerActivity) {
            setDrawerActivity();
        }
    }

    return (
        <div className={cx(styles.portalBanner__container)}>
            <Grid.Container alignItems='center'>
                <Grid xs={6} className={cx(styles.portalBanner__left)}>
                    <div onClick={handleOpenDrawer} className={cx(styles.portalBanner__barMenu, 'flex', 'items-center', 'mr-1', 'cursor-pointer')}>
                        <Html html={svgHtml('barMenu')} />
                    </div>

                    <h2>{portalRouteText}</h2>
                </Grid>

                <Grid xs={6} justify="flex-end" className={cx(styles.portalBanner__right)}>
                    <WalletMultiButton className={cx('bg-purple', '')} />
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default withGlobalProvider(PortalBanner);