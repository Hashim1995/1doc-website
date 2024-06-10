
import Home2About from "@/components/about/Home2About";
import Home2Banner from "@/components/banner/Home2Banner";
import Home2Contact from "@/components/contact/Home2Contact";
import Footer2 from "@/components/footer/Footer2";
import Header1 from "@/components/header/Header1";
import Home2service from "@/components/service/Home2service";
import Home2WorkProcess from "@/components/workProcess/Home2WorkProcess";

import {useTranslations} from 'next-intl';



 export const metadata = {
  icons: {
    icon: "/public/favicon.ico",
  },
}
export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Header1 />
      <Home2Banner />
      {/* <Home2BannerMarquee /> */}
      <Home2About />
      {/* <LogoMarquee /> */}
      <Home2service />
      <Home2WorkProcess />
      {/* <Home2horizontalScroll /> */}
      {/* <Home2CaseStudySlide /> */}
      {/* <Home2Testimonial /> */}
      {/* <Home2pricingPlan /> */}
      <Home2Contact />
      {/* <Home2Blog /> */}
      <Footer2 />
    </>
  );
}
