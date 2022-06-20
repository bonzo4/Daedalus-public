import { useState, useEffect } from 'react'
import PortalLayout from "@/layout/portal";
import { withGlobalProvider } from "@/context/GlobalProvider";
import CardRegular from '@/components/CardRegular';
import cx from 'classnames';
import cardStyles from '@/styles/components/shared/Card.module.scss';
import { Input } from '@nextui-org/react';

interface IAccount {
    setPortalTextRoute: Function
}

const Admin:React.FC<IAccount> = ({setPortalTextRoute}) => {
    const pageData = {
        cardRegular: [
            {
                'link': "?login=degenz",
                'title': "Degenz",
                'subtitle': 'Pro Account ($949)',
                'image': 'https://images.prismic.io/daedaluslabs/13aae7d5-64b7-4787-bc29-09811b5204f5_download.gif?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
            {
                'link': "?login=degenz",
                'title': "Degenz",
                'subtitle': 'Pro Account ($949)',
                'image': 'https://images.prismic.io/daedaluslabs/13aae7d5-64b7-4787-bc29-09811b5204f5_download.gif?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
            {
                'link': "?login=degenz",
                'title': "Degenz",
                'subtitle': 'Pro Account ($949)',
                'image': 'https://images.prismic.io/daedaluslabs/13aae7d5-64b7-4787-bc29-09811b5204f5_download.gif?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
            {
                'link': "?login=degenz",
                'title': "Degenz",
                'subtitle': 'Pro Account ($949)',
                'image': 'https://images.prismic.io/daedaluslabs/13aae7d5-64b7-4787-bc29-09811b5204f5_download.gif?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
            {
                'link': "?login=kenoko",
                'title': "Kenoko",
                'subtitle': 'Mid Account ($549)',
                'image': 'https://images.prismic.io/daedaluslabs/aa2eaf5e-486e-4a7a-89cb-4b96dde48b1a_kenoko.gif?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
            {
                'link': "?login=kenoko",
                'title': "Kenoko",
                'subtitle': 'Mid Account ($549)',
                'image': 'https://images.prismic.io/daedaluslabs/aa2eaf5e-486e-4a7a-89cb-4b96dde48b1a_kenoko.gif?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
            {
                'link': "?login=nft",
                'title': "NFT League",
                'subtitle': 'Small Account ($249)',
                'image': 'https://images.prismic.io/daedaluslabs/e4bea907-6e67-4fec-aee9-7cb8257f46f3_nft.gif?auto=compress,format',
                'bodyHtml': "",
            },
            {
                'link': "?login=baked",
                'title': "Baked Beaver",
                'subtitle': 'Pro Account ($949)',
                'image': 'https://images.prismic.io/daedaluslabs/8c9f7fa6-94ab-41fe-9613-3cad3b2013d7_baked-beaver.webp?auto=compress,format',
                'bodyHtml': "<p>Need to maintain this account!</p>",
            },
        ]
    }
    const [sliceOfCardRegular, setSliceCardRegular] = useState(pageData.cardRegular);
    
    useEffect(() => {
        setPortalTextRoute('Admin');
    }, [])

    const filterKeyword = (e:any) => {
        const { value } = e.target;

        const output = pageData.cardRegular.filter((each) => each.title.toLowerCase().includes(value.toLowerCase()));  
        setSliceCardRegular([...output]);
    }

    return (
        <PortalLayout>
            <section className={cx('wrapper', 'mb-5')}>
                <label className="block text-gray-700 text-sm font-bold mb-2 hidden" htmlFor="keyword_searching">
                    Searching keyword
                </label>
                <input id="keyword_searching" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" placeholder='Search Account Name' onChange={(e) => filterKeyword(e)}/>
            </section>

            <section className={cx('wrapper')}>
                <CardRegular list={sliceOfCardRegular} cardBodyStyle={cx(cardStyles.cardRegular__headline_left)}/>
            </section>
        </PortalLayout>
    )
}

export default withGlobalProvider(Admin);