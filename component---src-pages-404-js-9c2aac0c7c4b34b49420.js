(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(0),r=n.n(a),i=n(143),o=n(149),c=n(186),u=n.n(c),s=n(145);var l="3398366313";t.default=function(e){var t,n,a=e.data.allSitePage.edges;return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:"right-margin"}),r.a.createElement("div",{className:u.a.text},r.a.createElement("div",null,"404 ERROR"),r.a.createElement("br",null),"The link provided doesn't exist. Visit a ",r.a.createElement(i.Link,{to:a[(t=0,n=a.length,Math.floor(Math.random()*(n-t)+t))].node.path},"random page"),". Or go ",r.a.createElement(i.Link,{to:"/"},"home"),"."),r.a.createElement("div",{className:u.a.leftMargin})))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(144),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},145:function(e,t,n){"use strict";var a=n(146),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(155),s=n.n(u),l=n(147),d=n.n(l),p=n(143);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(p.StaticQuery,{query:f,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{property:"og:image",content:d.a},{property:"og:url",content:"https://bennmcgregor.com"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var f="1025518380"},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Benn McGregor",description:"Come on in!",author:"Benn McGregor"}}}}},147:function(e,t,n){e.exports=n.p+"static/facebook-logo-69c2ff98cf485ac41ab19ed76f7c4edf.jpg"},148:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(150);t.a=function(e){var t=e.children;return r.a.createElement("div",null,t)}},150:function(e,t,n){},186:function(e,t,n){e.exports={container:"_404-module--container--1LDR8",text:"_404-module--text--3bF64",leftMargin:"_404-module--leftMargin--3XqzM"}}}]);
//# sourceMappingURL=component---src-pages-404-js-9c2aac0c7c4b34b49420.js.map