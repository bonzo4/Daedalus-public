import PortalHeader from '../components/PortalHeader';
import Footer from '../components/Footer';
import styles from '../styles/layout/layout.module.scss';

const PortalLayout = ({children}: any) => (
    <div className={styles.container}>
        <PortalHeader />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default PortalLayout;
