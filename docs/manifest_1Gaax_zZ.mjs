import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_S0A3qvkc.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":".text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":".text-gradient[data-astro-cid-xvukugm6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/articles","type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":"h1[data-astro-cid-e5ovchgr]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-e5ovchgr]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/services/consultations","type":"page","pattern":"^\\/services\\/consultations\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"consultations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/consultations.astro","pathname":"/services/consultations","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":"h1[data-astro-cid-hhuhl6tg]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-hhuhl6tg]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/services/static-sites","type":"page","pattern":"^\\/services\\/static-sites\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"static-sites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/static-sites.astro","pathname":"/services/static-sites","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":"h1[data-astro-cid-ldkluzut]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-ldkluzut]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/services/other-cms","type":"page","pattern":"^\\/services\\/other-cms\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"other-cms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/other-cms.astro","pathname":"/services/other-cms","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":"h1[data-astro-cid-l4r66jmy]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-l4r66jmy]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/services/wordpress","type":"page","pattern":"^\\/services\\/wordpress\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"wordpress","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/wordpress.astro","pathname":"/services/wordpress","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":".text-gradient[data-astro-cid-ucd2ps2b]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":".text-gradient[data-astro-cid-uw5kdbxl]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/compiled/hoisted.B0UuHrUh.js"}],"styles":[{"type":"external","src":"/compiled/about.-PS6VAp-.css"},{"type":"inline","content":".text-gradient[data-astro-cid-kh7btl4r]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://dawebmastaa.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/articles.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/services/consultations.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/services/other-cms.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/services/static-sites.astro",{"propagation":"none","containsHead":true}],["/media/mikea/86022EF5022EE9BF/web/repos/github.io/src/pages/services/wordpress.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/articles@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/services/consultations@_@astro":"pages/services/consultations.astro.mjs","\u0000@astro-page:src/pages/services/static-sites@_@astro":"pages/services/static-sites.astro.mjs","\u0000@astro-page:src/pages/services/other-cms@_@astro":"pages/services/other-cms.astro.mjs","\u0000@astro-page:src/pages/services/wordpress@_@astro":"pages/services/wordpress.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/articles.astro":"chunks/pages/articles_BzOzc5-n.mjs","/src/pages/services/consultations.astro":"chunks/pages/consultations_5Fc088S5.mjs","/src/pages/contact.astro":"chunks/pages/contact_tmPc6-C2.mjs","/src/pages/index.astro":"chunks/pages/index_E7ikDkv4.mjs","/src/pages/services/other-cms.astro":"chunks/pages/other-cms_DAt4Z-6u.mjs","/src/pages/services.astro":"chunks/pages/services__ptdZG1X.mjs","/src/pages/services/static-sites.astro":"chunks/pages/static-sites_W9XcfGiP.mjs","/src/pages/services/wordpress.astro":"chunks/pages/wordpress_PkZXTaQw.mjs","\u0000@astrojs-manifest":"manifest_1Gaax_zZ.mjs","/astro/hoisted.js?q=0":"compiled/hoisted.B0UuHrUh.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
