import React from 'react';
import type {
  SeoGlobalConfigData,
  SeoGlobalConfigResponse,
  SeoPageConfigData,
  SeoPageConfigResponse,
  SeoScriptsData,
} from '../generated/Protos/seo';

export interface SeoScriptsProps {
  scripts?: SeoScriptsData;
  schemaMarkup?: string | object;
  global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
  page?: SeoPageConfigResponse | SeoPageConfigData;
}

function buildDefaultSchema(global?: SeoGlobalConfigData): object | undefined {
  if (!global) return undefined;
  const name = global.siteName || global.brandName || global.defaultTitle;
  if (!name && !global.domain) return undefined;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type':
      global.address?.streetAddress || global.geoLatitude
        ? 'LocalBusiness'
        : 'Organization',
    name: name || 'Organization',
    url: global.domain || undefined,
    logo: global.logo?.url || global.defaultImage || undefined,
    description: global.description || global.defaultDescription || undefined,
  };

  if (
    global.address &&
    (global.address.streetAddress || global.address.addressCountry)
  ) {
    schema['address'] = {
      '@type': 'PostalAddress',
      streetAddress: global.address.streetAddress || undefined,
      addressRegion: global.address.addressRegion || undefined,
      postalCode: global.address.postalCode || undefined,
      addressCountry: global.address.addressCountry || undefined,
    };
  }

  if (global.geoLatitude && global.geoLongitude) {
    schema['geo'] = {
      '@type': 'GeoCoordinates',
      latitude: global.geoLatitude,
      longitude: global.geoLongitude,
    };
  }

  if (global.contactPoints && global.contactPoints.length > 0) {
    schema['contactPoint'] = global.contactPoints.map((cp) => ({
      '@type': 'ContactPoint',
      telephone: cp.telephone || undefined,
      contactType: cp.contactType || undefined,
      email: cp.email || undefined,
      areaServed: cp.areaServed || undefined,
    }));
  }

  if (global.socialLinks) {
    const sameAs = Object.values(global.socialLinks).filter(
      (url) => typeof url === 'string' && url.startsWith('http')
    );
    if (sameAs.length > 0) {
      schema['sameAs'] = sameAs;
    }
  }

  return schema;
}

export function SeoScripts(props: SeoScriptsProps): React.JSX.Element | null {
  const global: SeoGlobalConfigData | undefined =
    props.global && 'data' in props.global && props.global.data
      ? props.global.data
      : (props.global as SeoGlobalConfigData | undefined);

  const page: SeoPageConfigData | undefined =
    props.page && 'data' in props.page && props.page.data
      ? props.page.data
      : (props.page as SeoPageConfigData | undefined);

  const scripts = props.scripts || global?.scripts;
  const rawSchema =
    props.schemaMarkup || page?.schemaMarkup || global?.schemaMarkup;

  let schemaHtml: string | undefined;
  if (rawSchema) {
    schemaHtml =
      typeof rawSchema === 'string' ? rawSchema : JSON.stringify(rawSchema);
  } else {
    const autoSchema = buildDefaultSchema(global);
    if (autoSchema) {
      schemaHtml = JSON.stringify(autoSchema);
    }
  }

  if (!scripts && !schemaHtml) return null;

  return (
    <React.Fragment>
      {/* 1. Schema Markup (JSON-LD) cho Google Search */}
      {schemaHtml && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaHtml }}
        />
      )}

      {/* 2. Header Scripts (GTM, GA4, Meta Pixel, custom scripts) */}
      {scripts?.header && (
        <div
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: scripts.header }}
        />
      )}

      {/* 3. Body Start Scripts */}
      {scripts?.bodyStart && (
        <div
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: scripts.bodyStart }}
        />
      )}

      {/* 4. Body End Scripts */}
      {scripts?.bodyEnd && (
        <div
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: scripts.bodyEnd }}
        />
      )}
    </React.Fragment>
  );
}

