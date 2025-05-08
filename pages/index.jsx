import Head from "next/head";
import LandingHeader from "@/components/header/landingHeader/landingHeader";
import LandingServices from "@/components/landing/services";
import Hero from "@/components/landing/hero";
import LandingTestimonials from "@/components/testimonials/testimonials";
import LandingCTA from "@/components/landing/cta";
import Faq from "./resources/faq";
// import { createClient } from 'next-sanity'

export default function Home({ landingHeader, testimonialsText }) {
  return (
    <>
      <Head>
        <title>Insurance LEB</title>
        <meta property="og:title" content="LB Insurance" key="title" />
        <meta
          name="description"
          content="LB Insurance life medical insurance"
        />
      </Head>
      <div className="h-full overflow-hidden">
        <main className="h-full">
          <Hero />
          <LandingServices />
          <LandingHeader landingHeader={landingHeader} />
          {/* <LandingTestimonials testimonialsText={testimonialsText} /> */}
          <LandingCTA />
          <Faq />
        </main>
      </div>
    </>
  );
}
