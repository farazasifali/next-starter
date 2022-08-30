import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';

interface Props {
}

const HomeScreen: React.FC<Props> = (props): ReactElement => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <h1>{ t('home:title') }</h1>
      <p>{ t('common:welcome_message') }</p>
    </>
  )
}

export default HomeScreen;