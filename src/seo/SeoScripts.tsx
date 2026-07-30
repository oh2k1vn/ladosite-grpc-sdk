import React from "react";
import type {
    SeoScriptsData,
    SeoGlobalConfigResponse,
    SeoGlobalConfigData,
    SeoPageConfigResponse,
    SeoPageConfigData
} from "../generated/Protos/seo";

export interface SeoScriptsProps {
    scripts?: SeoScriptsData;
    schemaMarkup?: string | object;
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    page?: SeoPageConfigResponse | SeoPageConfigData;
}

export function SeoScripts(props: SeoScriptsProps): React.JSX.Element | null {
    const global: SeoGlobalConfigData | undefined =
        (props.global && 'data' in props.global && props.global.data)
            ? props.global.data
            : (props.global as SeoGlobalConfigData | undefined);

    const page: SeoPageConfigData | undefined =
        (props.page && 'data' in props.page && props.page.data)
            ? props.page.data
            : (props.page as SeoPageConfigData | undefined);

    const scripts = props.scripts || global?.scripts;
    const rawSchema = props.schemaMarkup || page?.schemaMarkup || global?.schemaMarkup;

    let schemaHtml: string | undefined;
    if (rawSchema) {
        schemaHtml = typeof rawSchema === 'string' ? rawSchema : JSON.stringify(rawSchema);
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
                    style={{ display: "none" }}
                    dangerouslySetInnerHTML={{ __html: scripts.header }}
                />
            )}

            {/* 3. Body Start Scripts */}
            {scripts?.bodyStart && (
                <div
                    style={{ display: "none" }}
                    dangerouslySetInnerHTML={{ __html: scripts.bodyStart }}
                />
            )}

            {/* 4. Body End Scripts */}
            {scripts?.bodyEnd && (
                <div
                    style={{ display: "none" }}
                    dangerouslySetInnerHTML={{ __html: scripts.bodyEnd }}
                />
            )}
        </React.Fragment>
    );
}
