(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{133:function(A,e,t){"use strict";t.r(e),t.d(e,"query",function(){return o});var n=t(0),a=t.n(n),r=t(145),g=t(146),i=t(151),c=t(166),B=t.n(c);e.default=function(A){var e=A.data.markdownRemark;return a.a.createElement(g.a,null,a.a.createElement(r.a,{title:e.frontmatter.title,"keywords-":["gatsby","application","react"]}),a.a.createElement(i.a,{displayType:"post"}),a.a.createElement("div",{className:B.a.container},a.a.createElement("div",{className:"right-margin"}),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html},className:B.a.content}),a.a.createElement("div",{className:B.a.leftMargin})))};var o="861893041"},143:function(A,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return u}),t.d(e,"StaticQueryContext",function(){return C}),t.d(e,"StaticQuery",function(){return E});var n=t(0),a=t.n(n),r=t(4),g=t.n(r),i=t(142),c=t.n(i);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return i.withPrefix}),t.d(e,"navigate",function(){return i.navigate}),t.d(e,"push",function(){return i.push}),t.d(e,"replace",function(){return i.replace}),t.d(e,"navigateTo",function(){return i.navigateTo});var B=t(144),o=t.n(B);t.d(e,"PageRenderer",function(){return o.a});var s=t(28);t.d(e,"parsePath",function(){return s.a});var C=a.a.createContext({}),E=function(A){return a.a.createElement(C.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:g.a.object,query:g.a.string.isRequired,render:g.a.func,children:g.a.func}},144:function(A,e,t){var n;A.exports=(n=t(149))&&n.default||n},145:function(A,e,t){"use strict";var n=t(147),a=t(0),r=t.n(a),g=t(4),i=t.n(g),c=t(155),B=t.n(c),o=t(148),s=t.n(o),C=t(143);function E(A){var e=A.description,t=A.lang,a=A.meta,g=A.keywords,i=A.title;return r.a.createElement(C.StaticQuery,{query:u,render:function(A){var n=e||A.site.siteMetadata.description;return r.a.createElement(B.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:e},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{property:"og:image",content:s.a},{property:"og:url",content:"https://bennmcgregor.com"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(g.length>0?{name:"keywords",content:g.join(", ")}:[]).concat(a)})},data:n})}E.defaultProps={lang:"en",meta:[],keywords:[]},E.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=E;var u="1025518380"},146:function(A,e,t){"use strict";var n=t(0),a=t.n(n);t(150);e.a=function(A){var e=A.children;return a.a.createElement("div",null,e)}},147:function(A){A.exports={data:{site:{siteMetadata:{title:"Benn McGregor",description:"Come on in!",author:"Benn McGregor"}}}}},148:function(A,e,t){A.exports=t.p+"static/facebook-logo-69c2ff98cf485ac41ab19ed76f7c4edf.jpg"},149:function(A,e,t){"use strict";t.r(e);t(29);var n=t(0),a=t.n(n),r=t(4),g=t.n(r),i=t(47),c=t(2),B=function(A){var e=A.location,t=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json))};B.propTypes={location:g.a.shape({pathname:g.a.string.isRequired}).isRequired},e.default=B},150:function(A,e,t){},151:function(A,e,t){"use strict";var n=t(6),a=t.n(n),r=t(0),g=t.n(r),i=t(143),c=t(152),B=t.n(c),o=t(153),s=t.n(o),C=function(A){function e(e){var t;return(t=A.call(this,e)||this).breakpoint=600,t.state={width:900},t}a()(e,A);var t=e.prototype;return t.updateDimensions=function(){window.innerWidth<this.breakpoint?this.setState({width:300}):this.setState({width:900})},t.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},t.render=function(){return"post"===this.props.displayType?u:"main"===this.props.displayType?this.state.width>=this.breakpoint?E("BENN MCGREGOR"):E(g.a.createElement("img",{src:s.a,alt:"logo",style:{width:"25px"}})):"blog"===this.props.displayType?this.state.width>=this.breakpoint?l("BENN'S BLOG"):l(g.a.createElement("img",{src:s.a,alt:"logo",style:{width:"25px"}})):void 0},e}(g.a.Component);function E(A){return g.a.createElement("div",null,g.a.createElement("div",{className:B.a.mainContainer},g.a.createElement("div",{style:{margin:"0 0 0 2rem"}},A),g.a.createElement(i.Link,{to:"/#work",style:{margin:"0 0 0 1.45rem"},state:{pleasant:"reasonably"},className:"header-link"},"WORK"),g.a.createElement(i.Link,{to:"/#about",style:{margin:"0 1.45rem"},className:"header-link"},"ABOUT"),g.a.createElement(i.Link,{to:"/blog",className:"header-link"},"BLOG")))}var u=g.a.createElement("div",{className:B.a.postContainer},g.a.createElement("div",{className:B.a.rightMargin}),g.a.createElement("div",{className:B.a.links},g.a.createElement(i.Link,{to:"/#work",state:{pleasant:"reasonably"},className:"header-link"},"BACK")),g.a.createElement("div",{className:B.a.leftMargin}));function l(A){return g.a.createElement("div",null,g.a.createElement("div",{className:B.a.mainContainer},g.a.createElement(i.Link,{to:"/blog",style:{margin:"0 0 0 2rem"},className:"header-link"},A),g.a.createElement(i.Link,{to:"/blog/about",style:{margin:"0 0 0 1.45rem"},className:"header-link"},"ABOUT"),g.a.createElement(i.Link,{to:"/",style:{margin:"0 1.45rem"},state:{pleasant:"reasonably"},className:"header-link"},"HOME")))}e.a=C},152:function(A,e,t){A.exports={mainContainer:"header-module--mainContainer--1vcsg",postContainer:"header-module--postContainer--1IxcJ",links:"header-module--links--39-lW",rightMargin:"header-module--rightMargin--cmo-S",leftMargin:"header-module--leftMargin--1oAA1"}},153:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdwAAAHcCAYAAAB8oxv1AAAACXBIWXMAAAsSAAALEgHS3X78AAAHhElEQVR4nO3dQYoDMQwAQSnk/1/2PiBHZ5olVB3nMiBjGp28M3MGAHjUy3gB4HmCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAi8b39xztmPj8CV3b16p9q9hO+7vZc2XAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYDA25Dh9+zucazwv9hwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA93DhB51z1rnCd92+M23DBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAjszByDBoBn2XABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgKfNzB/U7hK9wcR1kQAAAABJRU5ErkJggg=="},166:function(A,e,t){A.exports={container:"description-template-module--container--2BBNo",content:"description-template-module--content--3st4g",leftMargin:"description-template-module--leftMargin--3tHGv"}}}]);
//# sourceMappingURL=component---src-templates-description-template-js-d231d7578c658447dca5.js.map