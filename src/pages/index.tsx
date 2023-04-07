// next
import Head from 'next/head';
// @mui
import { Container } from '@mui/material';
// layouts
import DashboardLayout from '../layouts/dashboard';
// components
import { useSettingsContext } from '../components/settings';
// sections
import { PredictionForm } from '../sections/prediction';

// ----------------------------------------------------------------------

PredictionPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PredictionPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Prediction | AlgoTagger</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <PredictionForm />
      </Container>
    </>
  );
}
