
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layout/layout.module.scss';

const Layout = ({children}) => (
    <div className={styles.container}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout;
