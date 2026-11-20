"use client";

import { useLayoutEffect } from "react";

type Props = { pageCss?: string; bodyClass?: string; mainClass?: string };

function apply({ pageCss, bodyClass, mainClass }: Props) {
  const b = document.body;
  if (pageCss) b.setAttribute("data-cb-page-css", pageCss);
  else b.removeAttribute("data-cb-page-css");
  b.className = bodyClass ?? "";
  const main = document.getElementById("main");
  if (main) main.className = mainClass ?? "";
}

/**
 * The source stylesheet scopes most rules with body[data-cb-page-css~="…"] and body classes.
 * The inline script applies them before first paint on a full load; the layout effect keeps them
 * right on client-side navigations between pages.
 */
export function PageAttrs(props: Props) {
  useLayoutEffect(() => {
    apply(props);
  }, [props.pageCss, props.bodyClass, props.mainClass]); // eslint-disable-line react-hooks/exhaustive-deps

  const script = `(function(p){var b=document.body;if(p.c)b.setAttribute('data-cb-page-css',p.c);b.className=p.b||'';var m=document.getElementById('main');if(m)m.className=p.m||'';})(${JSON.stringify({
    c: props.pageCss ?? "",
    b: props.bodyClass ?? "",
    m: props.mainClass ?? "",
  })})`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
