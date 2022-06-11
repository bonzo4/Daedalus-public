import Layout from '@/layout/index';
import cx from "classnames";
import { Text, Grid } from '@nextui-org/react'; 
import ButtonLink from "@/components/shared/ButtonLink";

function Error({ statusCode }:any) {
  return (
    <Layout>
        <section className={cx('wrapper', 'my3')}>
          <Grid.Container>
            <Grid xs={12} justify="center">
              <Text h2 size={32} weight="bold" css={{ textAlign: 'center', color: 'white' }}>
                {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
              </Text>
            </Grid>

            <Grid xs={12} justify="center" className={cx('mt1')}>
              <ButtonLink href="/" buttonClass={true}>
                Back to Homepage
              </ButtonLink>
            </Grid>
          </Grid.Container>
        </section>
    </Layout>
  )
}

Error.getInitialProps = async ({ req, err, res }:any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  
  return { 
        statusCode, 
    }
}

export default Error