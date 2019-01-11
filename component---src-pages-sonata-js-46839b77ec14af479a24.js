(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,a,t){"use strict";t.r(a);var c=t(6),i=t.n(c),n=t(212),d=t(0),s=t.n(d),r=t(139),b=t(146),f=t(142),p=t(47),l=t.n(p),o=t(213),g=t.n(o),u=t(160),m=t(214),w=t.n(m),h=t(215),j=t.n(h),x=function(e){function a(a){var t;return(t=e.call(this,a)||this).breakpoint=900,t.state={leftImageIndex:0,rightImageIndex:1,singleImageIndex:0,hasClicked:!1,width:1200},t.nextSlide=t.nextSlide.bind(l()(l()(t))),t.previousSlide=t.previousSlide.bind(l()(l()(t))),t}i()(a,e);var t=a.prototype;return t.updateDimensions=function(){window.innerWidth<this.breakpoint?this.setState({width:600}):this.setState({width:1200})},t.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},t.previousSlide=function(){var e=this.props.imgUrls.length-1,a=this.state.leftImageIndex;if(this.state.width<this.breakpoint){var t=0===this.state.singleImageIndex?e:this.state.singleImageIndex-1;this.setState({singleImageIndex:t,hasClicked:!0}),t%2?this.setState({leftImageIndex:t-1,rightImageIndex:t}):this.setState({leftImageIndex:t,rightImageIndex:t+1})}else{var c=0===a?e-1:a-2,i=c+1;this.setState({leftImageIndex:c,rightImageIndex:i,singleImageIndex:c,hasClicked:!0})}},t.nextSlide=function(){var e=this.props.imgUrls.length-1,a=this.state.rightImageIndex;if(this.state.width<this.breakpoint){var t=this.state.singleImageIndex===e?0:this.state.singleImageIndex+1;this.setState({singleImageIndex:t,hasClicked:!0}),t%2?this.setState({leftImageIndex:t-1,rightImageIndex:t}):this.setState({leftImageIndex:t,rightImageIndex:t+1})}else{var c=a===e?1:a+2,i=c-1;this.setState({leftImageIndex:i,rightImageIndex:c,singleImageIndex:i,hasClicked:!0})}},t.render=function(){return this.state.width>=this.breakpoint?s.a.createElement("div",{className:g.a.carousel},s.a.createElement("div",{className:g.a.imageContainer},s.a.createElement(v,{clickFunction:this.previousSlide,hasClicked:this.state.hasClicked}),s.a.createElement(y,{clickFunction:this.nextSlide,hasClicked:this.state.hasClicked}),s.a.createElement(I,{url:this.props.imgUrls[this.state.leftImageIndex]}),s.a.createElement(I,{url:this.props.imgUrls[this.state.rightImageIndex]}))):s.a.createElement("div",{className:g.a.carousel},s.a.createElement("div",{className:g.a.imageContainer},s.a.createElement(v,{clickFunction:this.previousSlide,hasClicked:this.state.hasClicked}),s.a.createElement(y,{clickFunction:this.nextSlide,hasClicked:this.state.hasClicked}),s.a.createElement(I,{url:this.props.imgUrls[this.state.singleImageIndex]})))},a}(s.a.Component),v=function(e){var a=e.clickFunction,t=e.hasClicked;return s.a.createElement("div",{className:g.a.slideArrowLeft,onClick:a},t?"":s.a.createElement("img",{src:j.a,style:{height:"2.5rem"},alt:"error"}))},y=function(e){var a=e.clickFunction,t=e.hasClicked;return s.a.createElement("div",{className:g.a.slideArrowRight,onClick:a},t?"":s.a.createElement("img",{src:w.a,style:{height:"2.5rem"},alt:"error"}))},I=function(e){var a=e.url,t=100*a.aspectRatio;return s.a.createElement("div",{className:g.a.imageSlide,style:{width:t+"vh"}},s.a.createElement(u.a,{imagePath:a,styles:{margin:"0 auto",minHeight:"320px",minWidth:"247.27px",maxHeight:"3300px"}}))},S=x,E=(t(216),t(150)),C=t(218),k=t.n(C),N=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e="none";return("opening"===this.props.pageDisplay||this.props.showOpening)&&(e="block"),s.a.createElement("div",{style:{display:e},className:k.a.container},s.a.createElement("div",{className:k.a.close},s.a.createElement("div",{className:k.a.rightMargin}),s.a.createElement("div",{className:k.a.links},s.a.createElement(E.a,{input:"CLOSE",handleClick:this.props.toggleNotes,className:k.a.link})),s.a.createElement("div",{className:k.a.leftMargin})),s.a.createElement("div",{className:k.a.text},s.a.createElement("div",{className:"right-margin"}),s.a.createElement("div",{className:k.a.textContent},s.a.createElement("i",null,"Piano Sonata"),s.a.createElement("br",null),s.a.createElement("br",null),"Benn McGregor, 2018",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("i",null,"Performance Notes"),s.a.createElement("br",null),s.a.createElement("br",null),"The main characteristic of movement 1 is its shifts in texture between clarity and density. Keep these shifts in mind above all else, and use them to tell a story.",s.a.createElement("br",null),s.a.createElement("br",null),"Liberty may be taken with tempo changes and pedalling indications if it is felt that those changes will illuminate new aspects of the piece or add more clarity to its progression. Dynamics and the structures they delineate must be carefully considered, but may also be subject to alteration.",s.a.createElement("br",null),s.a.createElement("br",null),'Specifically addressing the section beginning at bar 168, think of it being composed of two different parts: the smoothly rising duet melody, and the short accented "power chords" that rise from below to overtake the melody. Aim to create as much independence as possible between these two parts by emphasizing the legato nature of the melody with pedal, while using no pedal on the power chords.'),s.a.createElement("div",{className:k.a.leftMargin})))},a}(s.a.Component),M=t(149),P=t(219),R=t.n(P),z=t(159),D=t.n(z),A=t(220),L=t.n(A),B=function(e){function a(){for(var a,t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(a=e.call.apply(e,[this].concat(c))||this)._handlePlayPause=function(){a.props.media.playPause()},a}i()(a,e);var t=a.prototype;return t.shouldComponentUpdate=function(e){var a=e.media;return this.props.media.isPlaying!==a.isPlaying},t.render=function(){var e=this.props,a=e.className,t=e.style,c=e.media;return s.a.createElement("img",{src:c.isPlaying?L.a:D.a,className:a,style:t,onClick:this._handlePlayPause,alt:"play/pause button"})},a}(d.Component),q=Object(M.withMediaProps)(B),H=M.controls.SeekBar,G=M.controls.CurrentTime,O=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){return"carousel"===this.props.show?s.a.createElement(M.Media,null,s.a.createElement("div",{className:"media "+R.a.mediaContainer},s.a.createElement(M.Player,{src:this.props.file,autoPlay:"false"}),s.a.createElement(q,{className:R.a.controlButton}),s.a.createElement("div",{className:R.a.playing},s.a.createElement(G,{className:R.a.time}),s.a.createElement(H,{className:R.a.slider})))):null},a}(d.Component),F=t(221),T=t.n(F),Z=function(e){var a=e.display,t=e.url,c=e.toggleNotes;return s.a.createElement("div",{className:T.a.menu},s.a.createElement("div",{className:T.a.links},s.a.createElement(r.Link,{to:"/#work",style:{margin:"1.45rem 1.45rem 1.45rem 2rem"},className:"header-link"},"BACK"),s.a.createElement(E.a,{input:"NOTES",handleClick:c})),s.a.createElement("div",{className:T.a.audio},s.a.createElement(O,{show:a,file:t})))},W=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={pageDisplay:"carousel",showOpening:!1},t}i()(a,e);var t=a.prototype;return t.toggleNotes=function(e){"opening"===this.state.pageDisplay||this.state.showOpening?this.setState({pageDisplay:"carousel",showOpening:!1}):this.setState({showOpening:!0})},t.render=function(){var e=this;return s.a.createElement(r.StaticQuery,{query:"726499729",render:function(a){return s.a.createElement(b.a,null,s.a.createElement(f.a,{title:"Sonata","keywords-":["gatsby","application","react"]}),s.a.createElement(N,{pageDisplay:e.state.pageDisplay,showOpening:e.state.showOpening,toggleNotes:e.toggleNotes.bind(e)}),s.a.createElement(Z,{display:e.state.pageDisplay,url:a.file.publicURL,toggleNotes:e.toggleNotes.bind(e)}),s.a.createElement(S,{imgUrls:a.allFile.edges.map(function(e){return e.node.childImageSharp.fluid})}))},data:n})},a}(d.Component);a.default=W},139:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return l}),t.d(a,"StaticQuery",function(){return o});var c=t(0),i=t.n(c),n=t(4),d=t.n(n),s=t(138),r=t.n(s);t.d(a,"Link",function(){return r.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var b=t(140),f=t.n(b);t.d(a,"PageRenderer",function(){return f.a});var p=t(29);t.d(a,"parsePath",function(){return p.a});var l=i.a.createContext({}),o=function(e){return i.a.createElement(l.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}o.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func}},140:function(e,a,t){var c;e.exports=(c=t(145))&&c.default||c},142:function(e,a,t){"use strict";var c=t(143),i=t(0),n=t.n(i),d=t(4),s=t.n(d),r=t(148),b=t.n(r),f=t(144),p=t.n(f),l=t(139);function o(e){var a=e.description,t=e.lang,i=e.meta,d=e.keywords,s=e.title;return n.a.createElement(l.StaticQuery,{query:g,render:function(e){var c=a||e.site.siteMetadata.description;return n.a.createElement(b.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{property:"og:image",content:p.a},{property:"og:url",content:"https://bennmcgregor.com"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(i)})},data:c})}o.defaultProps={lang:"en",meta:[],keywords:[]},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=o;var g="1025518380"},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Benn McGregor",description:"Come on in!",author:"Benn McGregor"}}}}},144:function(e,a,t){e.exports=t.p+"static/facebook-logo-69c2ff98cf485ac41ab19ed76f7c4edf.jpg"},145:function(e,a,t){"use strict";t.r(a);t(28);var c=t(0),i=t.n(c),n=t(4),d=t.n(n),s=t(48),r=t(2),b=function(e){var a=e.location,t=r.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};b.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},a.default=b},146:function(e,a,t){"use strict";var c=t(0),i=t.n(c);t(147);a.a=function(e){var a=e.children;return i.a.createElement("div",null,a)}},147:function(e,a,t){},150:function(e,a,t){"use strict";var c=t(6),i=t.n(c),n=t(0),d=t.n(n),s=t(161),r=t.n(s),b=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this;return d.a.createElement("div",{className:r.a.text,style:this.props.styles?this.props.styles:null,onMouseEnter:this.props.handleMouseEnter?function(){return e.props.handleMouseEnter(e.props.hoverArg)}:null,onMouseLeave:this.props.handleMouseLeave?function(){return e.props.handleMouseLeave(e.props.hoverArg)}:null,onClick:this.props.handleClick?function(){return e.props.handleClick(e.props.clickArg)}:null},this.props.input)},a}(n.Component);a.a=b},159:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNOCA1djE0bDExLTdMOCA1eiIvPjwvc3ZnPgo="},160:function(e,a,t){"use strict";var c=t(6),i=t.n(c),n=t(0),d=t.n(n),s=t(166),r=t.n(s),b=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){return"string"==typeof this.props.imagePath?d.a.createElement("img",{src:this.props.imagePath,alt:"",style:this.props.styles?this.props.styles:null}):d.a.createElement(r.a,{fluid:this.props.imagePath,style:this.props.styles?this.props.styles:null})},a}(n.Component);a.a=b},161:function(e,a,t){e.exports={text:"text-module--text--2QOO7"}},212:function(e){e.exports={data:{allFile:{edges:[{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/3475e7c1fbbb122689ff9a41d7cd7277/8484e/aa2.jpeg",srcSet:"/static/3475e7c1fbbb122689ff9a41d7cd7277/6ad16/aa2.jpeg 200w,\n/static/3475e7c1fbbb122689ff9a41d7cd7277/8f1ca/aa2.jpeg 400w,\n/static/3475e7c1fbbb122689ff9a41d7cd7277/8484e/aa2.jpeg 800w,\n/static/3475e7c1fbbb122689ff9a41d7cd7277/150f3/aa2.jpeg 1200w,\n/static/3475e7c1fbbb122689ff9a41d7cd7277/bea14/aa2.jpeg 1600w,\n/static/3475e7c1fbbb122689ff9a41d7cd7277/67033/aa2.jpeg 2400w,\n/static/3475e7c1fbbb122689ff9a41d7cd7277/ea258/aa2.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/51333b80d18cbe20e2a7128a963a9460/8484e/ab3.jpeg",srcSet:"/static/51333b80d18cbe20e2a7128a963a9460/6ad16/ab3.jpeg 200w,\n/static/51333b80d18cbe20e2a7128a963a9460/8f1ca/ab3.jpeg 400w,\n/static/51333b80d18cbe20e2a7128a963a9460/8484e/ab3.jpeg 800w,\n/static/51333b80d18cbe20e2a7128a963a9460/150f3/ab3.jpeg 1200w,\n/static/51333b80d18cbe20e2a7128a963a9460/bea14/ab3.jpeg 1600w,\n/static/51333b80d18cbe20e2a7128a963a9460/67033/ab3.jpeg 2400w,\n/static/51333b80d18cbe20e2a7128a963a9460/ea258/ab3.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/8a28490c26969ba0acfd1eb57ad07546/8484e/ac4.jpeg",srcSet:"/static/8a28490c26969ba0acfd1eb57ad07546/6ad16/ac4.jpeg 200w,\n/static/8a28490c26969ba0acfd1eb57ad07546/8f1ca/ac4.jpeg 400w,\n/static/8a28490c26969ba0acfd1eb57ad07546/8484e/ac4.jpeg 800w,\n/static/8a28490c26969ba0acfd1eb57ad07546/150f3/ac4.jpeg 1200w,\n/static/8a28490c26969ba0acfd1eb57ad07546/bea14/ac4.jpeg 1600w,\n/static/8a28490c26969ba0acfd1eb57ad07546/67033/ac4.jpeg 2400w,\n/static/8a28490c26969ba0acfd1eb57ad07546/ea258/ac4.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/fc431cb7af38e0cfaefdf0524565d1b5/8484e/ad5.jpeg",srcSet:"/static/fc431cb7af38e0cfaefdf0524565d1b5/6ad16/ad5.jpeg 200w,\n/static/fc431cb7af38e0cfaefdf0524565d1b5/8f1ca/ad5.jpeg 400w,\n/static/fc431cb7af38e0cfaefdf0524565d1b5/8484e/ad5.jpeg 800w,\n/static/fc431cb7af38e0cfaefdf0524565d1b5/150f3/ad5.jpeg 1200w,\n/static/fc431cb7af38e0cfaefdf0524565d1b5/bea14/ad5.jpeg 1600w,\n/static/fc431cb7af38e0cfaefdf0524565d1b5/67033/ad5.jpeg 2400w,\n/static/fc431cb7af38e0cfaefdf0524565d1b5/ea258/ad5.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/9bce9109977dde5f75e69892857fdba8/8484e/ae6.jpeg",srcSet:"/static/9bce9109977dde5f75e69892857fdba8/6ad16/ae6.jpeg 200w,\n/static/9bce9109977dde5f75e69892857fdba8/8f1ca/ae6.jpeg 400w,\n/static/9bce9109977dde5f75e69892857fdba8/8484e/ae6.jpeg 800w,\n/static/9bce9109977dde5f75e69892857fdba8/150f3/ae6.jpeg 1200w,\n/static/9bce9109977dde5f75e69892857fdba8/bea14/ae6.jpeg 1600w,\n/static/9bce9109977dde5f75e69892857fdba8/67033/ae6.jpeg 2400w,\n/static/9bce9109977dde5f75e69892857fdba8/ea258/ae6.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/972c7c6b4bb01cb602112652dd16cc62/8484e/af7.jpeg",srcSet:"/static/972c7c6b4bb01cb602112652dd16cc62/6ad16/af7.jpeg 200w,\n/static/972c7c6b4bb01cb602112652dd16cc62/8f1ca/af7.jpeg 400w,\n/static/972c7c6b4bb01cb602112652dd16cc62/8484e/af7.jpeg 800w,\n/static/972c7c6b4bb01cb602112652dd16cc62/150f3/af7.jpeg 1200w,\n/static/972c7c6b4bb01cb602112652dd16cc62/bea14/af7.jpeg 1600w,\n/static/972c7c6b4bb01cb602112652dd16cc62/67033/af7.jpeg 2400w,\n/static/972c7c6b4bb01cb602112652dd16cc62/ea258/af7.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/4cc05f1a5cad14069a66c481cb4b53c0/8484e/ag8.jpeg",srcSet:"/static/4cc05f1a5cad14069a66c481cb4b53c0/6ad16/ag8.jpeg 200w,\n/static/4cc05f1a5cad14069a66c481cb4b53c0/8f1ca/ag8.jpeg 400w,\n/static/4cc05f1a5cad14069a66c481cb4b53c0/8484e/ag8.jpeg 800w,\n/static/4cc05f1a5cad14069a66c481cb4b53c0/150f3/ag8.jpeg 1200w,\n/static/4cc05f1a5cad14069a66c481cb4b53c0/bea14/ag8.jpeg 1600w,\n/static/4cc05f1a5cad14069a66c481cb4b53c0/67033/ag8.jpeg 2400w,\n/static/4cc05f1a5cad14069a66c481cb4b53c0/ea258/ag8.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/7b6536cc7701fbc7601d0c45ceb325a3/8484e/ah9.jpeg",srcSet:"/static/7b6536cc7701fbc7601d0c45ceb325a3/6ad16/ah9.jpeg 200w,\n/static/7b6536cc7701fbc7601d0c45ceb325a3/8f1ca/ah9.jpeg 400w,\n/static/7b6536cc7701fbc7601d0c45ceb325a3/8484e/ah9.jpeg 800w,\n/static/7b6536cc7701fbc7601d0c45ceb325a3/150f3/ah9.jpeg 1200w,\n/static/7b6536cc7701fbc7601d0c45ceb325a3/bea14/ah9.jpeg 1600w,\n/static/7b6536cc7701fbc7601d0c45ceb325a3/67033/ah9.jpeg 2400w,\n/static/7b6536cc7701fbc7601d0c45ceb325a3/ea258/ah9.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/e781c50e48bef2acfc179f181fe083d0/8484e/ai10.jpeg",srcSet:"/static/e781c50e48bef2acfc179f181fe083d0/6ad16/ai10.jpeg 200w,\n/static/e781c50e48bef2acfc179f181fe083d0/8f1ca/ai10.jpeg 400w,\n/static/e781c50e48bef2acfc179f181fe083d0/8484e/ai10.jpeg 800w,\n/static/e781c50e48bef2acfc179f181fe083d0/150f3/ai10.jpeg 1200w,\n/static/e781c50e48bef2acfc179f181fe083d0/bea14/ai10.jpeg 1600w,\n/static/e781c50e48bef2acfc179f181fe083d0/67033/ai10.jpeg 2400w,\n/static/e781c50e48bef2acfc179f181fe083d0/ea258/ai10.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/0bc17f59cc632b5684a61eee16899fee/8484e/aj11.jpeg",srcSet:"/static/0bc17f59cc632b5684a61eee16899fee/6ad16/aj11.jpeg 200w,\n/static/0bc17f59cc632b5684a61eee16899fee/8f1ca/aj11.jpeg 400w,\n/static/0bc17f59cc632b5684a61eee16899fee/8484e/aj11.jpeg 800w,\n/static/0bc17f59cc632b5684a61eee16899fee/150f3/aj11.jpeg 1200w,\n/static/0bc17f59cc632b5684a61eee16899fee/bea14/aj11.jpeg 1600w,\n/static/0bc17f59cc632b5684a61eee16899fee/67033/aj11.jpeg 2400w,\n/static/0bc17f59cc632b5684a61eee16899fee/ea258/aj11.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/47cc8da53920f9baf047a8d888d5ad10/8484e/ak12.jpeg",srcSet:"/static/47cc8da53920f9baf047a8d888d5ad10/6ad16/ak12.jpeg 200w,\n/static/47cc8da53920f9baf047a8d888d5ad10/8f1ca/ak12.jpeg 400w,\n/static/47cc8da53920f9baf047a8d888d5ad10/8484e/ak12.jpeg 800w,\n/static/47cc8da53920f9baf047a8d888d5ad10/150f3/ak12.jpeg 1200w,\n/static/47cc8da53920f9baf047a8d888d5ad10/bea14/ak12.jpeg 1600w,\n/static/47cc8da53920f9baf047a8d888d5ad10/67033/ak12.jpeg 2400w,\n/static/47cc8da53920f9baf047a8d888d5ad10/ea258/ak12.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/e8e2e49168f94bffecd59a2d256cdc45/8484e/al13.jpeg",srcSet:"/static/e8e2e49168f94bffecd59a2d256cdc45/6ad16/al13.jpeg 200w,\n/static/e8e2e49168f94bffecd59a2d256cdc45/8f1ca/al13.jpeg 400w,\n/static/e8e2e49168f94bffecd59a2d256cdc45/8484e/al13.jpeg 800w,\n/static/e8e2e49168f94bffecd59a2d256cdc45/150f3/al13.jpeg 1200w,\n/static/e8e2e49168f94bffecd59a2d256cdc45/bea14/al13.jpeg 1600w,\n/static/e8e2e49168f94bffecd59a2d256cdc45/67033/al13.jpeg 2400w,\n/static/e8e2e49168f94bffecd59a2d256cdc45/ea258/al13.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/f4b93e4dbb428cfb7a690435ae149095/8484e/am14.jpeg",srcSet:"/static/f4b93e4dbb428cfb7a690435ae149095/6ad16/am14.jpeg 200w,\n/static/f4b93e4dbb428cfb7a690435ae149095/8f1ca/am14.jpeg 400w,\n/static/f4b93e4dbb428cfb7a690435ae149095/8484e/am14.jpeg 800w,\n/static/f4b93e4dbb428cfb7a690435ae149095/150f3/am14.jpeg 1200w,\n/static/f4b93e4dbb428cfb7a690435ae149095/bea14/am14.jpeg 1600w,\n/static/f4b93e4dbb428cfb7a690435ae149095/67033/am14.jpeg 2400w,\n/static/f4b93e4dbb428cfb7a690435ae149095/ea258/am14.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/56d6bb4b1c8c3effc0ee0e872092a510/8484e/an15.jpeg",srcSet:"/static/56d6bb4b1c8c3effc0ee0e872092a510/6ad16/an15.jpeg 200w,\n/static/56d6bb4b1c8c3effc0ee0e872092a510/8f1ca/an15.jpeg 400w,\n/static/56d6bb4b1c8c3effc0ee0e872092a510/8484e/an15.jpeg 800w,\n/static/56d6bb4b1c8c3effc0ee0e872092a510/150f3/an15.jpeg 1200w,\n/static/56d6bb4b1c8c3effc0ee0e872092a510/bea14/an15.jpeg 1600w,\n/static/56d6bb4b1c8c3effc0ee0e872092a510/67033/an15.jpeg 2400w,\n/static/56d6bb4b1c8c3effc0ee0e872092a510/ea258/an15.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/924b31fa8960ce4c062dd79ea9a9cbd8/8484e/ao16.jpeg",srcSet:"/static/924b31fa8960ce4c062dd79ea9a9cbd8/6ad16/ao16.jpeg 200w,\n/static/924b31fa8960ce4c062dd79ea9a9cbd8/8f1ca/ao16.jpeg 400w,\n/static/924b31fa8960ce4c062dd79ea9a9cbd8/8484e/ao16.jpeg 800w,\n/static/924b31fa8960ce4c062dd79ea9a9cbd8/150f3/ao16.jpeg 1200w,\n/static/924b31fa8960ce4c062dd79ea9a9cbd8/bea14/ao16.jpeg 1600w,\n/static/924b31fa8960ce4c062dd79ea9a9cbd8/67033/ao16.jpeg 2400w,\n/static/924b31fa8960ce4c062dd79ea9a9cbd8/ea258/ao16.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/322d82cd84967320fa8891dc9daf8c5c/8484e/ap17.jpeg",srcSet:"/static/322d82cd84967320fa8891dc9daf8c5c/6ad16/ap17.jpeg 200w,\n/static/322d82cd84967320fa8891dc9daf8c5c/8f1ca/ap17.jpeg 400w,\n/static/322d82cd84967320fa8891dc9daf8c5c/8484e/ap17.jpeg 800w,\n/static/322d82cd84967320fa8891dc9daf8c5c/150f3/ap17.jpeg 1200w,\n/static/322d82cd84967320fa8891dc9daf8c5c/bea14/ap17.jpeg 1600w,\n/static/322d82cd84967320fa8891dc9daf8c5c/67033/ap17.jpeg 2400w,\n/static/322d82cd84967320fa8891dc9daf8c5c/ea258/ap17.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/514d15ed90bdcf5ead9491ebbdeb70d6/8484e/aq18.jpeg",srcSet:"/static/514d15ed90bdcf5ead9491ebbdeb70d6/6ad16/aq18.jpeg 200w,\n/static/514d15ed90bdcf5ead9491ebbdeb70d6/8f1ca/aq18.jpeg 400w,\n/static/514d15ed90bdcf5ead9491ebbdeb70d6/8484e/aq18.jpeg 800w,\n/static/514d15ed90bdcf5ead9491ebbdeb70d6/150f3/aq18.jpeg 1200w,\n/static/514d15ed90bdcf5ead9491ebbdeb70d6/bea14/aq18.jpeg 1600w,\n/static/514d15ed90bdcf5ead9491ebbdeb70d6/67033/aq18.jpeg 2400w,\n/static/514d15ed90bdcf5ead9491ebbdeb70d6/ea258/aq18.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/bb072ae6021bcdb6cbc69470e70f2588/8484e/ar19.jpeg",srcSet:"/static/bb072ae6021bcdb6cbc69470e70f2588/6ad16/ar19.jpeg 200w,\n/static/bb072ae6021bcdb6cbc69470e70f2588/8f1ca/ar19.jpeg 400w,\n/static/bb072ae6021bcdb6cbc69470e70f2588/8484e/ar19.jpeg 800w,\n/static/bb072ae6021bcdb6cbc69470e70f2588/150f3/ar19.jpeg 1200w,\n/static/bb072ae6021bcdb6cbc69470e70f2588/bea14/ar19.jpeg 1600w,\n/static/bb072ae6021bcdb6cbc69470e70f2588/67033/ar19.jpeg 2400w,\n/static/bb072ae6021bcdb6cbc69470e70f2588/ea258/ar19.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/90ab8d9fc62ed2cf271213e0393ddea6/8484e/as20.jpeg",srcSet:"/static/90ab8d9fc62ed2cf271213e0393ddea6/6ad16/as20.jpeg 200w,\n/static/90ab8d9fc62ed2cf271213e0393ddea6/8f1ca/as20.jpeg 400w,\n/static/90ab8d9fc62ed2cf271213e0393ddea6/8484e/as20.jpeg 800w,\n/static/90ab8d9fc62ed2cf271213e0393ddea6/150f3/as20.jpeg 1200w,\n/static/90ab8d9fc62ed2cf271213e0393ddea6/bea14/as20.jpeg 1600w,\n/static/90ab8d9fc62ed2cf271213e0393ddea6/67033/as20.jpeg 2400w,\n/static/90ab8d9fc62ed2cf271213e0393ddea6/ea258/as20.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/4ab100327c36cb1b20b1a29b3a7ba3a4/8484e/at21.jpeg",srcSet:"/static/4ab100327c36cb1b20b1a29b3a7ba3a4/6ad16/at21.jpeg 200w,\n/static/4ab100327c36cb1b20b1a29b3a7ba3a4/8f1ca/at21.jpeg 400w,\n/static/4ab100327c36cb1b20b1a29b3a7ba3a4/8484e/at21.jpeg 800w,\n/static/4ab100327c36cb1b20b1a29b3a7ba3a4/150f3/at21.jpeg 1200w,\n/static/4ab100327c36cb1b20b1a29b3a7ba3a4/bea14/at21.jpeg 1600w,\n/static/4ab100327c36cb1b20b1a29b3a7ba3a4/67033/at21.jpeg 2400w,\n/static/4ab100327c36cb1b20b1a29b3a7ba3a4/ea258/at21.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/a7d73da6efbc0cc4ee07e94c77532eef/8484e/au22.jpeg",srcSet:"/static/a7d73da6efbc0cc4ee07e94c77532eef/6ad16/au22.jpeg 200w,\n/static/a7d73da6efbc0cc4ee07e94c77532eef/8f1ca/au22.jpeg 400w,\n/static/a7d73da6efbc0cc4ee07e94c77532eef/8484e/au22.jpeg 800w,\n/static/a7d73da6efbc0cc4ee07e94c77532eef/150f3/au22.jpeg 1200w,\n/static/a7d73da6efbc0cc4ee07e94c77532eef/bea14/au22.jpeg 1600w,\n/static/a7d73da6efbc0cc4ee07e94c77532eef/67033/au22.jpeg 2400w,\n/static/a7d73da6efbc0cc4ee07e94c77532eef/ea258/au22.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/c6a033a37c5cdae747ac7e0f386a1218/8484e/av23.jpeg",srcSet:"/static/c6a033a37c5cdae747ac7e0f386a1218/6ad16/av23.jpeg 200w,\n/static/c6a033a37c5cdae747ac7e0f386a1218/8f1ca/av23.jpeg 400w,\n/static/c6a033a37c5cdae747ac7e0f386a1218/8484e/av23.jpeg 800w,\n/static/c6a033a37c5cdae747ac7e0f386a1218/150f3/av23.jpeg 1200w,\n/static/c6a033a37c5cdae747ac7e0f386a1218/bea14/av23.jpeg 1600w,\n/static/c6a033a37c5cdae747ac7e0f386a1218/67033/av23.jpeg 2400w,\n/static/c6a033a37c5cdae747ac7e0f386a1218/ea258/av23.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/45dfdcea9538e61402e8bd56771d0d5f/8484e/aw24.jpeg",srcSet:"/static/45dfdcea9538e61402e8bd56771d0d5f/6ad16/aw24.jpeg 200w,\n/static/45dfdcea9538e61402e8bd56771d0d5f/8f1ca/aw24.jpeg 400w,\n/static/45dfdcea9538e61402e8bd56771d0d5f/8484e/aw24.jpeg 800w,\n/static/45dfdcea9538e61402e8bd56771d0d5f/150f3/aw24.jpeg 1200w,\n/static/45dfdcea9538e61402e8bd56771d0d5f/bea14/aw24.jpeg 1600w,\n/static/45dfdcea9538e61402e8bd56771d0d5f/67033/aw24.jpeg 2400w,\n/static/45dfdcea9538e61402e8bd56771d0d5f/ea258/aw24.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/149f7d971b1eb4e284046a6f58f63d09/8484e/ax25.jpeg",srcSet:"/static/149f7d971b1eb4e284046a6f58f63d09/6ad16/ax25.jpeg 200w,\n/static/149f7d971b1eb4e284046a6f58f63d09/8f1ca/ax25.jpeg 400w,\n/static/149f7d971b1eb4e284046a6f58f63d09/8484e/ax25.jpeg 800w,\n/static/149f7d971b1eb4e284046a6f58f63d09/150f3/ax25.jpeg 1200w,\n/static/149f7d971b1eb4e284046a6f58f63d09/bea14/ax25.jpeg 1600w,\n/static/149f7d971b1eb4e284046a6f58f63d09/67033/ax25.jpeg 2400w,\n/static/149f7d971b1eb4e284046a6f58f63d09/ea258/ax25.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/d79fa782b98c5e1c2a236a17125c0749/8484e/ay26.jpeg",srcSet:"/static/d79fa782b98c5e1c2a236a17125c0749/6ad16/ay26.jpeg 200w,\n/static/d79fa782b98c5e1c2a236a17125c0749/8f1ca/ay26.jpeg 400w,\n/static/d79fa782b98c5e1c2a236a17125c0749/8484e/ay26.jpeg 800w,\n/static/d79fa782b98c5e1c2a236a17125c0749/150f3/ay26.jpeg 1200w,\n/static/d79fa782b98c5e1c2a236a17125c0749/bea14/ay26.jpeg 1600w,\n/static/d79fa782b98c5e1c2a236a17125c0749/67033/ay26.jpeg 2400w,\n/static/d79fa782b98c5e1c2a236a17125c0749/ea258/ay26.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/ecd98edce4e733c310cfc5def7af3956/8484e/az27.jpeg",srcSet:"/static/ecd98edce4e733c310cfc5def7af3956/6ad16/az27.jpeg 200w,\n/static/ecd98edce4e733c310cfc5def7af3956/8f1ca/az27.jpeg 400w,\n/static/ecd98edce4e733c310cfc5def7af3956/8484e/az27.jpeg 800w,\n/static/ecd98edce4e733c310cfc5def7af3956/150f3/az27.jpeg 1200w,\n/static/ecd98edce4e733c310cfc5def7af3956/bea14/az27.jpeg 1600w,\n/static/ecd98edce4e733c310cfc5def7af3956/67033/az27.jpeg 2400w,\n/static/ecd98edce4e733c310cfc5def7af3956/ea258/az27.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/13e9962200b8b383d46c667b80cb4e70/8484e/ba28.jpeg",srcSet:"/static/13e9962200b8b383d46c667b80cb4e70/6ad16/ba28.jpeg 200w,\n/static/13e9962200b8b383d46c667b80cb4e70/8f1ca/ba28.jpeg 400w,\n/static/13e9962200b8b383d46c667b80cb4e70/8484e/ba28.jpeg 800w,\n/static/13e9962200b8b383d46c667b80cb4e70/150f3/ba28.jpeg 1200w,\n/static/13e9962200b8b383d46c667b80cb4e70/bea14/ba28.jpeg 1600w,\n/static/13e9962200b8b383d46c667b80cb4e70/67033/ba28.jpeg 2400w,\n/static/13e9962200b8b383d46c667b80cb4e70/ea258/ba28.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{aspectRatio:.7727272727272727,src:"/static/cab34a27645adf22f298b064c71b2824/8484e/bb29.jpeg",srcSet:"/static/cab34a27645adf22f298b064c71b2824/6ad16/bb29.jpeg 200w,\n/static/cab34a27645adf22f298b064c71b2824/8f1ca/bb29.jpeg 400w,\n/static/cab34a27645adf22f298b064c71b2824/8484e/bb29.jpeg 800w,\n/static/cab34a27645adf22f298b064c71b2824/150f3/bb29.jpeg 1200w,\n/static/cab34a27645adf22f298b064c71b2824/bea14/bb29.jpeg 1600w,\n/static/cab34a27645adf22f298b064c71b2824/67033/bb29.jpeg 2400w,\n/static/cab34a27645adf22f298b064c71b2824/ea258/bb29.jpeg 2550w",sizes:"(max-width: 800px) 100vw, 800px"}}}}]},file:{publicURL:"/static/sonata-e5c4750fd8984ae14fb921c20af20cd4.mp3"}}}},213:function(e,a,t){e.exports={carousel:"carousel-module--carousel--1Wnd5",imageContainer:"carousel-module--imageContainer--29Xa8",imageSlide:"carousel-module--imageSlide--2fWvW",slideArrowRight:"carousel-module--slideArrowRight--1vyFg",slideArrowLeft:"carousel-module--slideArrowLeft--1L7gi"}},214:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48L3N2Zz4="},215:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvc3ZnPg=="},216:function(e,a,t){"use strict";t(217)("link",function(e){return function(a){return e(this,"a","href",a)}})},217:function(e,a,t){var c=t(13),i=t(24),n=t(17),d=/"/g,s=function(e,a,t,c){var i=String(n(e)),s="<"+a;return""!==t&&(s+=" "+t+'="'+String(c).replace(d,"&quot;")+'"'),s+">"+i+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(s),c(c.P+c.F*i(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},218:function(e,a,t){e.exports={container:"opening-module--container--3ZuGH",close:"opening-module--close--2w3q6",rightMargin:"opening-module--rightMargin--aCDnn",links:"opening-module--links--1kyns",text:"opening-module--text--11PDb",textContent:"opening-module--textContent--cAvrX",leftMargin:"opening-module--leftMargin--DdP4e"}},219:function(e,a,t){e.exports={slider:"audio-player-module--slider--2tb_q",time:"audio-player-module--time--2lv34",controlButton:"audio-player-module--controlButton--g__Z3",mediaContainer:"audio-player-module--mediaContainer--3VqLL",playing:"audio-player-module--playing--30Pjs",playerWrapper:"audio-player-module--playerWrapper--2DFrl",reactPlayer:"audio-player-module--reactPlayer--2RvZV"}},220:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6Ii8+PC9zdmc+"},221:function(e,a,t){e.exports={menu:"menu-module--menu--3X5d9",links:"menu-module--links--2HEVn",audio:"menu-module--audio--FDVh7"}}}]);
//# sourceMappingURL=component---src-pages-sonata-js-46839b77ec14af479a24.js.map