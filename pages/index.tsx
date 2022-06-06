import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layout';
import HeroMain from '../components/HeroMain';

const Home: NextPage = () => {
  const pageData = { 
    heroSection: {
      title: 'Whitelist partnerships made easy.',
      content: 'Find high quality buyers at the click of a button.',
      waitlist: true,
      images: [
        'https://images.prismic.io/anatta-design/75834339-77f8-4d16-9907-36884a541f6c_Rectangle+18.png?auto=compress,format',
        'https://images.prismic.io/anatta-design/d2ec0ff7-f158-4aa3-89a2-294586031e69_Rectangle+20.png?auto=compress,format',
        'https://images.prismic.io/anatta-design/92f268c2-b1a0-4781-b1d3-dd99437a85c2_Rectangle+19.png?auto=compress,format',
        'https://images.prismic.io/anatta-design/7f077286-4c4a-4546-9ddc-afbaf20a369e_Rectangle+17.png?auto=compress,format',
        'https://images.prismic.io/anatta-design/00ca3905-574b-4004-91dd-f2b43ce09c9b_Rectangle+16.png?auto=compress,format',
        'https://images.prismic.io/anatta-design/05c4df02-3942-49ef-9056-c7285a9055df_Rectangle+15.png?auto=compress,format',
        'https://images.prismic.io/anatta-design/c09e09f6-b5b8-4fab-b7cc-904a01b61cb9_Rectangle+21.png?auto=compress,format'
      ]
    },

    blockSection: {
      title: 'Elysian NFTs',
      subtitle: 'A Web3 brand with infinite curiosity.',
      image: 'https://images.prismic.io/anatta-design/291be2b1-081b-481c-ba8b-4bb408e14baf_julian-hochgesang-39BKKhuy11k-unsplash+1.png?auto=compress,format',
      block_title: 'Enter the Fields of Elysium',
      block_description: "As a heroic soul fades, its flame is rekindled as an Elysian. As one with the afterlife, these storytellers explore the brightest corners of possibility–unafraid of what was once $MYTH. <br /> Stake your Elysian for $MYTH and participate in the Elysium ecosystem. Get access to the ElysianDAO, Discord, and community."
    }
  }
   

  return (
    <div>
      <Head>
        <title>Daedalus Labs</title>
        <meta name="description" content="Whitelist!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HeroMain 
          description={pageData.heroSection.content}
          images={pageData.heroSection.images}
          title={pageData.heroSection.title}
          waitlist={pageData.heroSection.waitlist}
        />

      </Layout>
    </div>
  )
}

export default Home
