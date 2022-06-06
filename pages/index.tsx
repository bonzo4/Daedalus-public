import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layout';
import HeroMain from '../components/HeroMain';
import ImageBlock from '../components/ImageBlock';

const Home: NextPage = () => {
  const pageData = { 
    heroSection: {
      title: 'Whitelist partnerships made easy.',
      content: 'Find high quality buyers at the click of a button.',
      waitlist: true,
      imageBlock: 'https://images.prismic.io/anatta-design/03d30ce4-0c63-4f60-98a6-c42100ed8de8_heroimage.png?auto=compress,format'
    },

    blockSection: {
      title: 'Elysian NFTs',
      subtitle: 'A Web3 brand with infinite curiosity.',
      image: 'https://images.prismic.io/anatta-design/291be2b1-081b-481c-ba8b-4bb408e14baf_julian-hochgesang-39BKKhuy11k-unsplash+1.png?auto=compress,format',
      blockTitle: 'Enter the Fields of Elysium',
      blockDescription: "As a heroic soul fades, its flame is rekindled as an Elysian. As one with the afterlife, these storytellers explore the brightest corners of possibility–unafraid of what was once $MYTH. <br /> Stake your Elysian for $MYTH and participate in the Elysium ecosystem. Get access to the ElysianDAO, Discord, and community."
    }
  }
   

  return (
    <div>
      <Head>
        <title>Daedalus Labs</title>
        <meta name="description" content="Whitelist!" />
      </Head>

      <Layout>
        <HeroMain 
          description={pageData.heroSection.content}
          imageBlock={pageData.heroSection.imageBlock}
          title={pageData.heroSection.title}
          waitlist={pageData.heroSection.waitlist}
        />

        <ImageBlock 
          title={pageData.blockSection.title}
          description={pageData.blockSection.subtitle}
          image={pageData.blockSection.image}
          blockTitle={pageData.blockSection.blockTitle}
          blockDescription={pageData.blockSection.blockDescription}
        />
      </Layout>
    </div>
  )
}

export default Home
