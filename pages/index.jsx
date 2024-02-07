import Head from "next/head";
import LandingHeader from "@/components/header/landingHeader/landingHeader";
import LandingServices from "@/components/landing/services";
import LandingTestimonials from "@/components/testimonials/testimonials";
import LandingCTA from "@/components/landing/cta";
import Faq from "./resources/faq";
// import { createClient } from 'next-sanity'

export default function Home({ landingHeader, testimonialsText }) {
  return (
    <>
      <Head>
        <title>ShieldHub Insurance</title>
        <meta property="og:title" content="ShieldHub Insurance" key="title" />
        <meta
          name="description"
          content="ShieldHub Insurance life medical insurance"
        />
      </Head>
      <div className="h-full overflow-hidden">
        <main className="h-full">
          <LandingHeader landingHeader={landingHeader} />
          <LandingServices />
          {/* <LandingTestimonials testimonialsText={testimonialsText} /> */}
          <LandingCTA />
          <Faq />
        </main>
      </div>
    </>
  );
}
