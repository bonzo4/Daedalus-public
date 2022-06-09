import cx from 'classnames';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
    const data = {
        subFooterBrand:{
            title: 'Daedalus Labs',
            description: 'The best NFT marketplace website in the world and feel your experience in selling or buy our work',
        },
        subFooter: [
            {
                list_title: 'About',
                list: [
                    {
                        'title': 'Term & Condition',
                        'link': '/term',
                    }
                ]
            },
            {
                list_title: 'Company',
                list: [
                    {
                        'title': 'About',
                        'link': '/about',
                    }
                ]
            },
            {
                list_title: 'Contact',
                list: [
                    {
                        'title': '+123456789',
                        'link': '123456789',
                        'link_type': 'phone'
                    },
                    {
                        'title': 'adorableprogrammer@gmail.com',
                        'link': 'adorableprogrammer@gmail.com',
                        'link_type': 'email'
                    },
                    {
                        'title': '<svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8566 2.77452C23.5839 1.74804 22.7807 0.939621 21.7609 0.665272C19.9124 0.166748 12.5 0.166748 12.5 0.166748C12.5 0.166748 5.08767 0.166748 3.2391 0.665272C2.21927 0.939665 1.41606 1.74804 1.14344 2.77452C0.648132 4.63506 0.648132 8.51692 0.648132 8.51692C0.648132 8.51692 0.648132 12.3988 1.14344 14.2593C1.41606 15.2858 2.21927 16.0605 3.2391 16.3349C5.08767 16.8334 12.5 16.8334 12.5 16.8334C12.5 16.8334 19.9123 16.8334 21.7609 16.3349C22.7807 16.0605 23.5839 15.2858 23.8566 14.2593C24.3519 12.3988 24.3519 8.51692 24.3519 8.51692C24.3519 8.51692 24.3519 4.63506 23.8566 2.77452ZM10.0757 12.0414V4.99249L16.271 8.51701L10.0757 12.0414Z" fill="white" fill-opacity="0.5"/></svg>',
                        'link': '/twitter',
                        'link_type': 'external'
                    },
                    {
                        'title': '<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.075 11.875C15.075 12.6375 14.5125 13.2625 13.8 13.2625C13.1 13.2625 12.525 12.6375 12.525 11.875C12.525 11.1125 13.0875 10.4875 13.8 10.4875C14.5125 10.4875 15.075 11.1125 15.075 11.875ZM9.2375 10.4875C8.525 10.4875 7.9625 11.1125 7.9625 11.875C7.9625 12.6375 8.5375 13.2625 9.2375 13.2625C9.95 13.2625 10.5125 12.6375 10.5125 11.875C10.525 11.1125 9.95 10.4875 9.2375 10.4875ZM22.4375 2.575V25C19.2884 22.2171 20.2955 23.1383 16.6375 19.7375L17.3 22.05H3.125C1.7125 22.05 0.5625 20.9 0.5625 19.475V2.575C0.5625 1.15 1.7125 0 3.125 0H19.875C21.2875 0 22.4375 1.15 22.4375 2.575ZM18.875 14.425C18.875 10.4 17.075 7.1375 17.075 7.1375C15.275 5.7875 13.5625 5.825 13.5625 5.825L13.3875 6.025C15.5125 6.675 16.5 7.6125 16.5 7.6125C13.5307 5.98511 10.0428 5.98481 7.1625 7.25C6.7 7.4625 6.425 7.6125 6.425 7.6125C6.425 7.6125 7.4625 6.625 9.7125 5.975L9.5875 5.825C9.5875 5.825 7.875 5.7875 6.075 7.1375C6.075 7.1375 4.275 10.4 4.275 14.425C4.275 14.425 5.325 16.2375 8.0875 16.325C8.0875 16.325 8.55 15.7625 8.925 15.2875C7.3375 14.8125 6.7375 13.8125 6.7375 13.8125C6.92139 13.9412 7.22461 14.1081 7.25 14.125C9.35986 15.3065 12.3568 15.6937 15.05 14.5625C15.4875 14.4 15.975 14.1625 16.4875 13.825C16.4875 13.825 15.8625 14.85 14.225 15.3125C14.6 15.7875 15.05 16.325 15.05 16.325C17.8125 16.2375 18.875 14.425 18.875 14.425Z" fill="white" fill-opacity="0.5"/></svg>',
                        'link': '/discord',
                        'link_type': 'external'
                    }
                ]
            },
        ]
    }
    return (
        <footer className={cx(styles.footer, 'wrapper')}>
            <div className={cx(styles.footer__subfooter, 'footer__subfooter')}>
                <div className={cx(styles.footer__subfooter_left, 'foofer__subfooter_brand')}>
                    <h2 dangerouslySetInnerHTML={{ __html: data.subFooterBrand.title }}></h2>
                    <p>{ data.subFooterBrand.description }</p>
                </div>

                <div className={cx(styles.footer__subfooter_right)}>
                    { 
                        data.subFooter && data.subFooter.map((each, index) => (
                            <ul key={index} className={cx(styles.footer__subfooter_right_block)}>
                                <li>
                                    {each.list_title}
                                </li>

                                { each.list &&  each.list.map((contentBlock, contentIndex) => {
                                    return (
                                        <li key={contentIndex}>
                                            <a href="" dangerouslySetInnerHTML={{ __html: contentBlock.title}}>
                                            </a>
                                        </li>  
                                        )
                                    })     
                                } 
                            </ul>
                        ))
                    }
                </div>
            </div>

            <div className={cx(styles.footer__copyright)}>
                <h3>Copyright © {new Date().getFullYear()} Daedalus</h3>   
            </div>         
        </footer>
    )
}

export default Footer;


