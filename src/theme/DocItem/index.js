import React from 'react';
import DocItem from '@theme-original/DocItem';
import Head from '@docusaurus/Head';

export default function DocItemWrapper(props) {
  const { content } = props;
  const { frontMatter } = content;
  const image = frontMatter.image || 'https://startupengineer.work/img/saas-banner.png';

  return (
    <>
      <Head>
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </Head>
      <DocItem {...props} />
    </>
  );
}