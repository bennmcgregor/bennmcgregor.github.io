(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{134:function(e,t,A){"use strict";A.r(t),A.d(t,"query",function(){return u});var a=A(0),n=A.n(a),r=A(145),i=A(149),s=A(151),o=A(156),l=A(165),c=A(164),g=A.n(c);t.default=function(e){var t=e.data,A=t.markdownRemark,a=t.image;return n.a.createElement(i.a,null,n.a.createElement(s.a,{displayType:"blog"}),n.a.createElement(r.a,{title:A.frontmatter.title,"keywords-":["gatsby","application","react"]}),n.a.createElement("div",{className:g.a.container},n.a.createElement("div",{className:"right-margin"}),n.a.createElement("div",{className:g.a.content},n.a.createElement("p",null,n.a.createElement("b",null,A.frontmatter.title),n.a.createElement("br",null),Object(l.a)(A.frontmatter.date),n.a.createElement("br",null),n.a.createElement("br",null),A.frontmatter.description,n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(o.a,{imagePath:a.childImageSharp.fluid}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.html}})),n.a.createElement("div",{className:g.a.leftMargin})))};var u="2181503138"},143:function(e,t,A){"use strict";A.r(t),A.d(t,"graphql",function(){return B}),A.d(t,"StaticQueryContext",function(){return u}),A.d(t,"StaticQuery",function(){return d});var a=A(0),n=A.n(a),r=A(4),i=A.n(r),s=A(142),o=A.n(s);A.d(t,"Link",function(){return o.a}),A.d(t,"withPrefix",function(){return s.withPrefix}),A.d(t,"navigate",function(){return s.navigate}),A.d(t,"push",function(){return s.push}),A.d(t,"replace",function(){return s.replace}),A.d(t,"navigateTo",function(){return s.navigateTo});var l=A(144),c=A.n(l);A.d(t,"PageRenderer",function(){return c.a});var g=A(28);A.d(t,"parsePath",function(){return g.a});var u=n.a.createContext({}),d=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function B(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,A){var a;e.exports=(a=A(148))&&a.default||a},145:function(e,t,A){"use strict";var a=A(146),n=A(0),r=A.n(n),i=A(4),s=A.n(i),o=A(155),l=A.n(o),c=A(147),g=A.n(c),u=A(143);function d(e){var t=e.description,A=e.lang,n=e.meta,i=e.keywords,s=e.title;return r.a.createElement(u.StaticQuery,{query:B,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:A},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{property:"og:image",content:g.a},{property:"og:url",content:"https://bennmcgregor.com"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var B="1025518380"},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Benn McGregor",description:"Come on in!",author:"Benn McGregor"}}}}},147:function(e,t,A){e.exports=A.p+"static/facebook-logo-69c2ff98cf485ac41ab19ed76f7c4edf.jpg"},148:function(e,t,A){"use strict";A.r(t);A(29);var a=A(0),n=A.n(a),r=A(4),i=A.n(r),s=A(47),o=A(2),l=function(e){var t=e.location,A=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:A},A.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,A){"use strict";var a=A(0),n=A.n(a);A(150);t.a=function(e){var t=e.children;return n.a.createElement("div",null,t)}},150:function(e,t,A){},151:function(e,t,A){"use strict";var a=A(6),n=A.n(a),r=A(0),i=A.n(r),s=A(143),o=A(152),l=A.n(o),c=A(153),g=A.n(c),u=function(e){function t(t){var A;return(A=e.call(this,t)||this).breakpoint=600,A.state={width:900},A}n()(t,e);var A=t.prototype;return A.updateDimensions=function(){window.innerWidth<this.breakpoint?this.setState({width:300}):this.setState({width:900})},A.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},A.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},A.render=function(){return"post"===this.props.displayType?B:"main"===this.props.displayType?this.state.width>=this.breakpoint?d("BENN MCGREGOR"):d(i.a.createElement("img",{src:g.a,alt:"logo",style:{width:"25px"}})):"blog"===this.props.displayType?this.state.width>=this.breakpoint?f("BENN'S BLOG"):f(i.a.createElement("img",{src:g.a,alt:"logo",style:{width:"25px"}})):void 0},t}(i.a.Component);function d(e){return i.a.createElement("div",null,i.a.createElement("div",{className:l.a.mainContainer},i.a.createElement("div",{style:{margin:"0 0 0 2rem"}},e),i.a.createElement(s.Link,{to:"/#work",style:{margin:"0 0 0 1.45rem"},state:{pleasant:"reasonably"},className:"header-link"},"WORK"),i.a.createElement(s.Link,{to:"/#about",style:{margin:"0 1.45rem"},className:"header-link"},"ABOUT")))}var B=i.a.createElement("div",{className:l.a.postContainer},i.a.createElement("div",{className:l.a.rightMargin}),i.a.createElement("div",{className:l.a.links},i.a.createElement(s.Link,{to:"/#work",state:{pleasant:"reasonably"},className:"header-link"},"BACK")),i.a.createElement("div",{className:l.a.leftMargin}));function f(e){return i.a.createElement("div",null,i.a.createElement("div",{className:l.a.mainContainer},i.a.createElement(s.Link,{to:"/blog",style:{margin:"0 0 0 2rem"},className:"header-link"},e),i.a.createElement(s.Link,{to:"/blog/about",style:{margin:"0 0 0 1.45rem"},className:"header-link"},"ABOUT"),i.a.createElement(s.Link,{to:"/blog/explore",style:{margin:"0 1.45rem"},state:{pleasant:"reasonably"},className:"header-link"},"EXPLORE"),i.a.createElement(s.Link,{to:"/",state:{pleasant:"reasonably"},className:"header-link"},"HOME")))}t.a=u},152:function(e,t,A){e.exports={mainContainer:"header-module--mainContainer--1vcsg",postContainer:"header-module--postContainer--1IxcJ",links:"header-module--links--39-lW",rightMargin:"header-module--rightMargin--cmo-S",leftMargin:"header-module--leftMargin--1oAA1"}},153:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdwAAAHcCAYAAAB8oxv1AAAACXBIWXMAAAsSAAALEgHS3X78AAAHhElEQVR4nO3dQYoDMQwAQSnk/1/2PiBHZ5olVB3nMiBjGp28M3MGAHjUy3gB4HmCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAi8b39xztmPj8CV3b16p9q9hO+7vZc2XAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYDA25Dh9+zucazwv9hwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA93DhB51z1rnCd92+M23DBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAgILgAEBBcAAoILAAHBBYCA4AJAQHABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgIDgAkBAcAEgILgAEBBcAAjszByDBoBn2XABICC4ABAQXAAICC4ABAQXAAKCCwABwQWAgOACQEBwASAguAAQEFwACAguAAQEFwACggsAAcEFgKfNzB/U7hK9wcR1kQAAAABJRU5ErkJggg=="},156:function(e,t,A){"use strict";var a=A(6),n=A.n(a),r=A(0),i=A.n(r),s=A(157),o=A.n(s),l=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return"string"==typeof this.props.imagePath?i.a.createElement("img",{src:this.props.imagePath,alt:"",style:this.props.styles?this.props.styles:null}):i.a.createElement(o.a,{fluid:this.props.imagePath,style:this.props.styles?this.props.styles:null})},t}(r.Component);t.a=l},157:function(e,t,A){"use strict";var a=A(7);t.__esModule=!0,t.default=void 0;var n,r=a(A(6)),i=a(A(48)),s=a(A(161)),o=a(A(162)),l=a(A(0)),c=a(A(4)),g=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},d=function(e){var t=g(e),A=t.fluid?t.fluid.src:t.fixed.src;return!!u[A]||(u[A]=!0,!1)},B=[];var f=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){B.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),B.push([e,t])},p=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',A=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+A+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+A+"/>":"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+a+n+"<img "+s+o+t+i+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=l.default.forwardRef(function(e,t){var A=e.style,a=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,o.default)({},r,{onLoad:a,onError:n,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},A)}))});E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var A;A=e.call(this,t)||this;var a=!0,n=!0,r=!1,s=t.fadeIn,o=d(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,n=!1,r=!0),"undefined"==typeof window&&(a=!1,n=!1),t.critical&&(a=!0,n=!1,r=!1);var c=!(A.props.critical&&!A.props.fadeIn);return A.state={isVisible:a,imgLoaded:n,IOSupported:r,fadeIn:s,hasNoScript:c,seenBefore:o},A.imageRef=l.default.createRef(),A.handleImageLoaded=A.handleImageLoaded.bind((0,i.default)((0,i.default)(A))),A.handleRef=A.handleRef.bind((0,i.default)((0,i.default)(A))),A}(0,r.default)(t,e);var A=t.prototype;return A.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},A.handleRef=function(e){var t=this;this.state.IOSupported&&e&&f(e,function(){t.setState({isVisible:!0})})},A.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},A.render=function(){var e=g(this.props),t=e.title,A=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,i=e.imgStyle,s=void 0===i?{}:i,c=e.placeholderStyle,u=void 0===c?{}:c,d=e.placeholderClassName,B=e.fluid,f=e.fixed,C=e.backgroundColor,m=e.Tag,h="boolean"==typeof C?"lightgray":C,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,u),Q=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),I={title:t,alt:this.state.isVisible?"":A,style:w,className:d};if(B){var y=B;return l.default.createElement(m,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(y.srcSet)},l.default.createElement(m,{style:{width:"100%",paddingBottom:100/y.aspectRatio+"%"}}),y.base64&&l.default.createElement(E,(0,o.default)({src:y.base64},I)),y.tracedSVG&&l.default.createElement(E,(0,o.default)({src:y.tracedSVG},I)),h&&l.default.createElement(m,{title:t,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,y.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:y.srcSetWebp,sizes:y.sizes}),l.default.createElement("source",{srcSet:y.srcSet,sizes:y.sizes}),l.default.createElement(E,{alt:A,title:t,src:y.src,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,o.default)({alt:A,title:t},y))}}))}if(f){var b=f,L=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:b.width,height:b.height},r);return"inherit"===r.display&&delete L.display,l.default.createElement(m,{className:(a||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(b.srcSet)},b.base64&&l.default.createElement(E,(0,o.default)({src:b.base64},I)),b.tracedSVG&&l.default.createElement(E,(0,o.default)({src:b.tracedSVG},I)),h&&l.default.createElement(m,{title:t,style:{backgroundColor:h,width:b.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:b.height}}),this.state.isVisible&&l.default.createElement("picture",null,b.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:b.srcSetWebp,sizes:b.sizes}),l.default.createElement("source",{srcSet:b.srcSet,sizes:b.sizes}),l.default.createElement(E,{alt:A,title:t,width:b.width,height:b.height,src:b.src,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,o.default)({alt:A,title:t,width:b.width,height:b.height},b))}}))}return null},t}(l.default.Component);C.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var m=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),h=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});C.propTypes={resolutions:m,sizes:h,fixed:m,fluid:h,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var w=C;t.default=w},164:function(e,t,A){e.exports={container:"description-template-module--container--2BBNo",content:"description-template-module--content--3st4g",leftMargin:"description-template-module--leftMargin--3tHGv"}},165:function(e,t,A){"use strict";A(68);t.a=function(e){var t=e.split("-");return{"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"November",12:"December"}[t[1]]+" "+parseInt(t[2])+", "+t[0]}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-e120851439edc38db3e2.js.map