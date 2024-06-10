import { Inter, Roboto_Mono, Hanken_Grotesk } from "next/font/google";
import "../../../public/assets/css/bootstrap-icons.css";
import "../../../public/assets/css/boxicons.min.css";
import "../../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../../public/assets/css/slick-theme.css";
import "../../../public/assets/css/animate.min.css";
import "../../../public/assets/css/slick.css";
import "../../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/custom.css";
import ScrollProgress from "@/components/common/ScrollProgress";
import ThemeSwitch from "@/components/common/Theme";
import useWow from "../../hooks/useWow";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Script from "next/script";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hankenGrotesk",
  display: "swap",
});


export const metadata = {
  icons: [{ rel: 'ico', url: '/favicon.ico' }],
}


export default async function RootLayout({ children, params: { locale } }) {
  // useWow();

  const locales = ["az"];
  const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (err) {
    notFound();
  }

  
  return (
    <html
      lang={locale}
      style={{scrollBehavior:'smooth'}}
      className={`${inter.variable} ${hankenGrotesk.variable}`}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <head>
          <link
            rel="icon"
            href="/1doc-logo.svg"
            type="image/x-icon"
            sizes="16x16"
          />
          <title>1DOC || Elektron Sənəd İdarəetmə və İmzalama Platforması</title>
        </head>

        <body>
          <ScrollProgress />
          <ThemeSwitch />
          {children}
          <ToastContainer/>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        </body>
       
      </NextIntlClientProvider>
    
    </html>
  );
}
