import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeScreen from 'screens/home.screen';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'home'])),
  }
});

const Home: NextPage = () => <HomeScreen />

export default Home
