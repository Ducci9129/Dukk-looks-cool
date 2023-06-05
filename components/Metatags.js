// Component for metatags

// Use twitter card validator to test: https://cards-dev.twitter.com/validator

import Head from 'next/head';

export default function Metatags({
  title = 'Fancy',
  description = 'I fixed the embed message, now it dosent look stupid lol',
  image = 'https://media.moddb.com/images/members/5/4550/4549205/duck.jpg',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
        
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="boring.samalander.dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <link rel="icon" href="https://boring.samalander.repl.co//favicon.ico" type="image/x-icon"/>
    </Head>
  );
}