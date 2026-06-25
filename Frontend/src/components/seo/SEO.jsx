import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, type = "website", image }) => {
  const siteName = "Care Maintenance";
  const defaultDescription = "Professional maintenance services for your home and business.";
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "WebSite",
          "name": title || siteName,
          "description": description || defaultDescription,
          "url": url,
          ...(image ? { "image": image } : {})
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
