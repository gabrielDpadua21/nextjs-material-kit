(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{F07w:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/badges",function(){return o("lRcr")}])},XY9v:function(e,n,o){"use strict";o.d(n,"a",(function(){return d}));var r=o("q1tI"),a=o.n(r),s=o("R/WZ"),l=o("eDSW"),t={badge:{marginRight:"3px",borderRadius:"12px",padding:"5px 12px",textTransform:"uppercase",fontSize:"10px",fontWeight:"500",lineHeight:"1",color:"#fff",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",display:"inline-block"},primary:{backgroundColor:l.s},warning:{backgroundColor:l.C},danger:{backgroundColor:l.i},success:{backgroundColor:l.x},info:{backgroundColor:l.p},rose:{backgroundColor:l.u},gray:{backgroundColor:"#6c757d"}},i=a.a.createElement,c=Object(s.a)(t);function d(e){var n=c(),o=e.color,r=e.children;return i("span",{className:n.badge+" "+n[o]},r)}d.defaultProps={color:"gray"}},lRcr:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return B}));var r=o("q1tI"),a=o.n(r),s=o("pzeu"),l=o("zR9M"),t=o("R/WZ"),i=o("Kg+a"),c=o("XY9v"),d=o("Oref"),g=a.a.createElement,u=Object(t.a)({bdExample:{padding:"1.5rem",margin:"1rem -15px",position:"relative",marginRight:"0",marginBottom:"-8px",marginLeft:"0",borderWidth:".2rem",border:"solid rgb(245, 242, 240)"}}),p="import Badge from 'components/Badge/Badge.js';",m='import badgeStyle from "assets/jss/nextjs-material-kit/components/badgeStyle.js"',f='<Button color="primary">Notifications{" "}<Badge>4</Badge></Button>',b='<Badge color="primary">primary</Badge>\n<Badge color="info">info</Badge>\n<Badge color="success">success</Badge>\n<Badge color="danger">danger</Badge>\n<Badge color="warning">warning</Badge>\n<Badge color="rose">rose</Badge>',y='Badge.defaultProps = {\n  color: "gray"\n};\n\nBadge.propTypes = {\n  classes: PropTypes.object.isRequired,\n  color: PropTypes.oneOf([\n    "primary",\n    "warning",\n    "danger",\n    "success",\n    "info",\n    "rose",\n    "gray"\n  ])\n};';function B(e){var n=u();return g(d.a,e,g("div",null,g("h1",null,"Badges"),g("h2",null,"Styles"),g("p",null,"You will find the styles for this component in",g("br",null)," ",g("code",null,"src/assets/jss/nextjs-material-kit/components/badgeStyle.js"),"."),g("h2",null,"Imports"),g("p",null,"If you want to use our predefined components:"),g(s.a,{language:"jsx",style:l.prism},p),g("p",null,"If you want to use our styles on something else:"),g(s.a,{language:"jsx",style:l.prism},m),g("h2",null,"Example"),g("p",null,"Badges can be used as part of links or buttons to provide a counter."),g("div",{className:n.bdExample},g(i.a,{color:"primary"},"Notifications ",g(c.a,null,"4"))),g(s.a,{language:"jsx",style:l.prism},f),g("h2",null,"Contextual variations"),g("div",{className:n.bdExample},g(c.a,{color:"primary"},"primary"),g(c.a,{color:"info"},"info"),g(c.a,{color:"success"},"success"),g(c.a,{color:"danger"},"danger"),g(c.a,{color:"warning"},"warning"),g(c.a,{color:"rose"},"rose")),g(s.a,{language:"jsx",style:l.prism},b),g("h2",null,"Props"),g(s.a,{language:"jsx",style:l.prism},y)))}}},[["F07w",0,2,1,3,4,5,6]]]);