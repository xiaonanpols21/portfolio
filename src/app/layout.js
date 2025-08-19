import { Poppins, Wix_Madefor_Text } from "next/font/google";
import Head from 'next/head';

const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],    
  display: 'swap',       
});

export const metadata = {
  title: "Xiao Nan Pols",
  description: "Front-end developer Xiao Nan Pols",
};

import "../styles/index.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{metadata.title}</title>
            <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sx8ndw6znz");
</script>
        </Head>
        <body className={`${poppins.className}`}>
            {children}
        </body>

    </html>
  );
}
