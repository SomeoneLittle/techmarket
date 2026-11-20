import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { Footer } from "./Footer";
import { Header, RailBehavior, ToastHost } from "./SiteChrome";
import "@/app/globals.css";

export const siteMetadata: Metadata = {
  title: "Cubebrush: Digital marketplace for 3D, brushes, textures, courses",
  description:
    "Browse 180,803 digital creative assets: 3D models, textures, Photoshop brushes, illustration, tutorials, sound, from 12,466 independent stores. Instant download.",
  icons: { icon: asset("/favicon.svg") },
  other: { "theme-color": "#0e1320" },
};

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('cb_theme_desktop');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

type Props = {
  children: React.ReactNode;
  bodyClass?: string;
  pageCss?: string;
  mainClass?: string;
};

/** Root document shared by every route group (each group needs its own <body> attributes). */
export function SiteDocument({ children, bodyClass, pageCss, mainClass }: Props) {
  return (
    <html data-theme="dark" lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={asset("/sites/cubebrush/css/site.css")} />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={bodyClass} data-cb-page-css={pageCss} data-cb-state="guest" suppressHydrationWarning>
        <a className="cb-skip" href="#main">
          Skip to content
        </a>
        <div className="dh-paper-bg">
          <Header />
          <main className={mainClass} id="main">
            <ToastHost />
            {children}
          </main>
          <Footer />
          <RailBehavior />
        </div>
      </body>
    </html>
  );
}
