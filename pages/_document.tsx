import { Html, Head, Main, NextScript } from "next/document";

export default function Document () {
  return (
    <Html>
      <Head>
        {/* <title>AstralFuel</title> */}
        <meta name="title" content="AstralFuel" />
        <meta name="description" content="AstralFuel is a new meme with big dreams" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://astralfueltoken.io" />
        <meta property="og:title" content="AstralFuel" />
        <meta property="og:description" content="AstralFuel is a new meme with big dreams" />
        <meta property="og:image" content="https://astralfueltoken.io/assets/social.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://astralfueltoken.io" />
        <meta property="twitter:title" content="AstralFuel" />
        <meta property="twitter:description" content="AstralFuel is a new meme with big dreams" />
        <meta property="twitter:image" content="https://astralfueltoken.io/assets/social.png" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
