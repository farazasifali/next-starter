import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import 'assets/styles/style.scss';
import { isRTL } from 'utils/translation.helpers';

function MyApp({ Component, pageProps }: AppProps) {
  //Getting router instance
  const router = useRouter();
  //Determint content direction
  const RTL = isRTL(router.locale as string);
  //Return JSX
  return (
    <div dir={RTL ? 'rtl' : 'ltr'}>
      <Component {...pageProps} x={5} />
    </div>
  )
}

export default appWithTranslation(MyApp);
