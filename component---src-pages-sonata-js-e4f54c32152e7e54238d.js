(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1XfF":function(e,t,a){e.exports={carousel:"carousel-module--carousel--1Wnd5",imageContainer:"carousel-module--imageContainer--29Xa8",imageSlide:"carousel-module--imageSlide--2fWvW",slideArrowRight:"carousel-module--slideArrowRight--1vyFg",slideArrowLeft:"carousel-module--slideArrowLeft--1L7gi"}},"3J01":function(e,t,a){e.exports={slider:"audio-player-module--slider--2tb_q",time:"audio-player-module--time--2lv34",controlButton:"audio-player-module--controlButton--g__Z3",mediaContainer:"audio-player-module--mediaContainer--3VqLL",playing:"audio-player-module--playing--30Pjs",playerWrapper:"audio-player-module--playerWrapper--2DFrl",reactPlayer:"audio-player-module--reactPlayer--2RvZV"}},IpoU:function(e,t,a){e.exports={menu:"menu-module--menu--3X5d9",links:"menu-module--links--2HEVn",audio:"menu-module--audio--FDVh7"}},QANj:function(e,t,a){"use strict";a.r(t);var n=a("9Hrx"),i=a("q1tI"),l=a.n(i),s=a("Wbzz"),r=a("rvhV"),o=a("JO8M"),c=a("uRdJ"),m=a("1XfF"),d=a.n(m),u=a("gam5"),h=a("VPoK"),g=a.n(h),p=a("a7WZ"),I=a.n(p),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).breakpoint=900,a.state={leftImageIndex:0,rightImageIndex:1,singleImageIndex:0,hasClicked:!1,width:1200},a.nextSlide=a.nextSlide.bind(Object(c.a)(a)),a.previousSlide=a.previousSlide.bind(Object(c.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.updateDimensions=function(){window.innerWidth<this.breakpoint?this.setState({width:600}):this.setState({width:1200})},a.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},a.previousSlide=function(){var e=this.props.imgUrls.length-1,t=this.state.leftImageIndex;if(this.state.width<this.breakpoint){var a=0===this.state.singleImageIndex?e:this.state.singleImageIndex-1;this.setState({singleImageIndex:a,hasClicked:!0}),a%2?this.setState({leftImageIndex:a-1,rightImageIndex:a}):this.setState({leftImageIndex:a,rightImageIndex:a+1})}else{var n=0===t?e-1:t-2,i=n+1;this.setState({leftImageIndex:n,rightImageIndex:i,singleImageIndex:n,hasClicked:!0})}},a.nextSlide=function(){var e=this.props.imgUrls.length-1,t=this.state.rightImageIndex;if(this.state.width<this.breakpoint){var a=this.state.singleImageIndex===e?0:this.state.singleImageIndex+1;this.setState({singleImageIndex:a,hasClicked:!0}),a%2?this.setState({leftImageIndex:a-1,rightImageIndex:a}):this.setState({leftImageIndex:a,rightImageIndex:a+1})}else{var n=t===e?1:t+2,i=n-1;this.setState({leftImageIndex:i,rightImageIndex:n,singleImageIndex:i,hasClicked:!0})}},a.render=function(){return this.state.width>=this.breakpoint?l.a.createElement("div",{className:d.a.carousel},l.a.createElement("div",{className:d.a.imageContainer},l.a.createElement(v,{clickFunction:this.previousSlide,hasClicked:this.state.hasClicked}),l.a.createElement(f,{clickFunction:this.nextSlide,hasClicked:this.state.hasClicked}),l.a.createElement(E,{url:this.props.imgUrls[this.state.leftImageIndex]}),l.a.createElement(E,{url:this.props.imgUrls[this.state.rightImageIndex]}))):l.a.createElement("div",{className:d.a.carousel},l.a.createElement("div",{className:d.a.imageContainer},l.a.createElement(v,{clickFunction:this.previousSlide,hasClicked:this.state.hasClicked}),l.a.createElement(f,{clickFunction:this.nextSlide,hasClicked:this.state.hasClicked}),l.a.createElement(E,{url:this.props.imgUrls[this.state.singleImageIndex]})))},t}(l.a.Component),v=function(e){var t=e.clickFunction,a=e.hasClicked;return l.a.createElement("div",{className:d.a.slideArrowLeft,onClick:t},a?"":l.a.createElement("img",{src:I.a,style:{height:"2.5rem"},alt:"error"}))},f=function(e){var t=e.clickFunction,a=e.hasClicked;return l.a.createElement("div",{className:d.a.slideArrowRight,onClick:t},a?"":l.a.createElement("img",{src:g.a,style:{height:"2.5rem"},alt:"error"}))},E=function(e){var t=e.url,a=100*t.aspectRatio;return l.a.createElement("div",{className:d.a.imageSlide,style:{width:a+"vh"}},l.a.createElement(u.a,{imagePath:t,styles:{margin:"0 auto",minHeight:"320px",minWidth:"247.27px",maxHeight:"3300px"}}))},x=y,N=a("16MM"),w=a("vpAT"),b=a.n(w),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="none";return("opening"===this.props.pageDisplay||this.props.showOpening)&&(e="block"),l.a.createElement("div",{style:{display:e},className:b.a.container},l.a.createElement("div",{className:b.a.close},l.a.createElement("div",{className:b.a.rightMargin}),l.a.createElement("div",{className:b.a.links},l.a.createElement(N.a,{input:"CLOSE",handleClick:this.props.toggleNotes,className:b.a.link})),l.a.createElement("div",{className:b.a.leftMargin})),l.a.createElement("div",{className:b.a.text},l.a.createElement("div",{className:"right-margin"}),l.a.createElement("div",{className:b.a.textContent},l.a.createElement("i",null,"Piano Sonata"),l.a.createElement("br",null),l.a.createElement("br",null),"Benn McGregor, 2018",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,"Performance Notes"),l.a.createElement("br",null),l.a.createElement("br",null),"The main characteristic of movement 1 is its shifts in texture between clarity and density. Keep these shifts in mind above all else, and use them to tell a story.",l.a.createElement("br",null),l.a.createElement("br",null),"Liberty may be taken with tempo changes and pedalling indications if it is felt that those changes will illuminate new aspects of the piece or add more clarity to its progression. Dynamics and the structures they delineate must be carefully considered, but may also be subject to alteration.",l.a.createElement("br",null),l.a.createElement("br",null),'Specifically addressing the section beginning at bar 168, think of it being composed of two different parts: the smoothly rising duet melody, and the short accented "power chords" that rise from below to overtake the melody. Aim to create as much independence as possible between these two parts by emphasizing the legato nature of the melody with pedal, while using no pedal on the power chords.'),l.a.createElement("div",{className:b.a.leftMargin})))},t}(l.a.Component),k=a("w6Kj"),S=a("3J01"),M=a.n(S),D=a("Geh2"),P=a.n(D),j=a("hLt1"),A=a.n(j),L=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this)._handlePlayPause=function(){t.props.media.playPause()},t}Object(n.a)(t,e);var a=t.prototype;return a.shouldComponentUpdate=function(e){var t=e.media;return this.props.media.isPlaying!==t.isPlaying},a.render=function(){var e=this.props,t=e.className,a=e.style,n=e.media;return l.a.createElement("img",{src:n.isPlaying?A.a:P.a,className:t,style:a,onClick:this._handlePlayPause,alt:"play/pause button"})},t}(i.Component),O=Object(k.withMediaProps)(L),H=k.controls.SeekBar,B=k.controls.CurrentTime,W=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return"carousel"===this.props.show?l.a.createElement(k.Media,null,l.a.createElement("div",{className:"media "+M.a.mediaContainer},l.a.createElement(k.Player,{src:this.props.file,autoPlay:"false"}),l.a.createElement(O,{className:M.a.controlButton}),l.a.createElement("div",{className:M.a.playing},l.a.createElement(B,{className:M.a.time}),l.a.createElement(H,{className:M.a.slider})))):null},t}(i.Component),F=a("IpoU"),Z=a.n(F),J=function(e){var t=e.display,a=e.url,n=e.toggleNotes;return l.a.createElement("div",{className:Z.a.menu},l.a.createElement("div",{className:Z.a.links},l.a.createElement(s.Link,{to:"/#work",style:{margin:"1.45rem 1.45rem 1.45rem 2rem"},className:"header-link"},"BACK"),l.a.createElement(N.a,{input:"NOTES",handleClick:n})),l.a.createElement("div",{className:Z.a.audio},l.a.createElement(W,{show:t,file:a})))},R=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={pageDisplay:"carousel",showOpening:!1},a}Object(n.a)(t,e);var a=t.prototype;return a.toggleNotes=function(e){"opening"===this.state.pageDisplay||this.state.showOpening?this.setState({pageDisplay:"carousel",showOpening:!1}):this.setState({showOpening:!0})},a.render=function(){var e=this;return l.a.createElement(s.StaticQuery,{query:"1437780903",render:function(t){return l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"Sonata","keywords-":["gatsby","application","react"]}),l.a.createElement(C,{pageDisplay:e.state.pageDisplay,showOpening:e.state.showOpening,toggleNotes:e.toggleNotes.bind(e)}),l.a.createElement(J,{display:e.state.pageDisplay,url:t.mp3.publicURL,toggleNotes:e.toggleNotes.bind(e)}),l.a.createElement(x,{imgUrls:t.allFile.edges.map((function(e){return e.node.childImageSharp.fluid}))}))}})},t}(i.Component);t.default=R},VPoK:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48L3N2Zz4="},a7WZ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvc3ZnPg=="},hLt1:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNNiAxOWg0VjVINnYxNHptOC0xNHYxNGg0VjVoLTR6Ii8+PC9zdmc+"},vpAT:function(e,t,a){e.exports={container:"opening-module--container--3ZuGH",close:"opening-module--close--2w3q6",rightMargin:"opening-module--rightMargin--aCDnn",links:"opening-module--links--1kyns",text:"opening-module--text--11PDb",textContent:"opening-module--textContent--cAvrX",leftMargin:"opening-module--leftMargin--DdP4e"}}}]);
//# sourceMappingURL=component---src-pages-sonata-js-e4f54c32152e7e54238d.js.map