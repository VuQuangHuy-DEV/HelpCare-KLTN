// next
import Head from 'next/head';
// @mui
import { Divider } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';

//config
import { nameApp } from 'src/config-global';

// ----------------------------------------------------------------------

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Head>
        <title> Về chúng tôi | {nameApp}</title>
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png"/> 
      </Head>

      <AboutHero />

      <AboutWhat />

      <AboutVision />

      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

      <AboutTeam />

      <AboutTestimonials />
    </>
  );
}
