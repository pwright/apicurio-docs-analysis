import{s as X,d as s,v as J,i as m,a as C,b as _,c as g,h as Z,e as y,f as I,g as $,j as w,k,l as G,m as ee,o as te,p as ie,q as le,w as K,r as F,t as q,u as B,n as M}from"../chunks/scheduler.DJz-ZNL9.js";import{S as re,i as ne,t as L,a as H,c as oe,d as ae,m as se,b as ce,e as fe,g as ue}from"../chunks/index.CcPEQJHn.js";import{e as Q}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dswfnvrn.js";import{w as _e}from"../chunks/entry.QMsAng-k.js";import{e as de,s as pe,Q as me,p as he,a as V,r as j,C as Ee}from"../chunks/inferColumnTypes.CZ9R5F0k.js";import{h as x}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as be}from"../chunks/stores.BMJ8qnM6.js";import{Q as Re}from"../chunks/QueryViewer.XfAQhg4G.js";import{p as Te}from"../chunks/profile.BW8tN6E9.js";function U(c,i,r){const t=c.slice();return t[18]=i[r],t}function ye(c){let i,r=u.title+"",t;return{c(){i=k("h1"),t=B(r),this.h()},l(l){i=y(l,"H1",{class:!0});var n=F(i);t=q(n,r),n.forEach(s),this.h()},h(){_(i,"class","title")},m(l,n){m(l,i,n),C(i,t)},p:M,d(l){l&&s(i)}}}function ke(c){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:M,p:M,d:M}}function Se(c){let i,r,t,l,n;return document.title=i=u.title,{c(){r=w(),t=k("meta"),l=w(),n=k("meta"),this.h()},l(e){r=g(e),t=y(e,"META",{property:!0,content:!0}),l=g(e),n=y(e,"META",{name:!0,content:!0}),this.h()},h(){var e,o;_(t,"property","og:title"),_(t,"content",((e=u.og)==null?void 0:e.title)??u.title),_(n,"name","twitter:title"),_(n,"content",((o=u.og)==null?void 0:o.title)??u.title)},m(e,o){m(e,r,o),m(e,t,o),m(e,l,o),m(e,n,o)},p(e,o){o&0&&i!==(i=u.title)&&(document.title=i)},d(e){e&&(s(r),s(t),s(l),s(n))}}}function ge(c){var n;let i,r,t=we(),l=((n=u.og)==null?void 0:n.image)&&ve();return{c(){t&&t.c(),i=w(),l&&l.c(),r=I()},l(e){t&&t.l(e),i=g(e),l&&l.l(e),r=I()},m(e,o){t&&t.m(e,o),m(e,i,o),l&&l.m(e,o),m(e,r,o)},p(e,o){var f;t.p(e,o),(f=u.og)!=null&&f.image&&l.p(e,o)},d(e){e&&(s(i),s(r)),t&&t.d(e),l&&l.d(e)}}}function we(c){let i,r,t,l,n;return{c(){i=k("meta"),r=w(),t=k("meta"),l=w(),n=k("meta"),this.h()},l(e){i=y(e,"META",{name:!0,content:!0}),r=g(e),t=y(e,"META",{property:!0,content:!0}),l=g(e),n=y(e,"META",{name:!0,content:!0}),this.h()},h(){var e,o;_(i,"name","description"),_(i,"content",u.description),_(t,"property","og:description"),_(t,"content",((e=u.og)==null?void 0:e.description)??u.description),_(n,"name","twitter:description"),_(n,"content",((o=u.og)==null?void 0:o.description)??u.description)},m(e,o){m(e,i,o),m(e,r,o),m(e,t,o),m(e,l,o),m(e,n,o)},p:M,d(e){e&&(s(i),s(r),s(t),s(l),s(n))}}}function ve(c){let i,r,t;return{c(){i=k("meta"),r=w(),t=k("meta"),this.h()},l(l){i=y(l,"META",{property:!0,content:!0}),r=g(l),t=y(l,"META",{name:!0,content:!0}),this.h()},h(){var l,n;_(i,"property","og:image"),_(i,"content",V((l=u.og)==null?void 0:l.image)),_(t,"name","twitter:image"),_(t,"content",V((n=u.og)==null?void 0:n.image))},m(l,n){m(l,i,n),m(l,r,n),m(l,t,n)},p:M,d(l){l&&(s(i),s(r),s(t))}}}function W(c){let i,r;return i=new Re({props:{queryID:"includes",queryResult:c[0]}}),{c(){fe(i.$$.fragment)},l(t){ce(i.$$.fragment,t)},m(t,l){se(i,t,l),r=!0},p(t,l){const n={};l&1&&(n.queryResult=t[0]),i.$set(n)},i(t){r||(H(i.$$.fragment,t),r=!0)},o(t){L(i.$$.fragment,t),r=!1},d(t){ae(i,t)}}}function P(c){let i,r,t=c[18].source_file_path+"",l;return{c(){i=k("h2"),r=k("a"),l=B(t),this.h()},l(n){i=y(n,"H2",{class:!0,id:!0});var e=F(i);r=y(e,"A",{href:!0});var o=F(r);l=q(o,t),o.forEach(s),e.forEach(s),this.h()},h(){_(r,"href","#rowsource_file_path"),_(i,"class","markdown"),_(i,"id","rowsource_file_path")},m(n,e){m(n,i,e),C(i,r),C(r,l)},p(n,e){e&1&&t!==(t=n[18].source_file_path+"")&&K(l,t)},d(n){n&&s(i)}}}function z(c){let i,r,t,l=c[18].included_filename+"",n,e,o=c[18].is_new_group===1&&P(c);return{c(){o&&o.c(),i=w(),r=k("ul"),t=k("li"),n=B(l),e=w(),this.h()},l(f){o&&o.l(f),i=g(f),r=y(f,"UL",{class:!0});var E=F(r);t=y(E,"LI",{class:!0});var v=F(t);n=q(v,l),v.forEach(s),e=g(E),E.forEach(s),this.h()},h(){_(t,"class","markdown"),_(r,"class","markdown")},m(f,E){o&&o.m(f,E),m(f,i,E),m(f,r,E),C(r,t),C(t,n),C(r,e)},p(f,E){f[18].is_new_group===1?o?o.p(f,E):(o=P(f),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null),E&1&&l!==(l=f[18].included_filename+"")&&K(n,l)},d(f){f&&(s(i),s(r)),o&&o.d(f)}}}function Ae(c){let i,r,t,l,n,e,o="This page lists each AsciiDoc file and all the files it includes, preserving the order in which they appear.",f,E,v,N,T=typeof u<"u"&&u.title&&u.hide_title!==!0&&ye();function A(a,p){return typeof u<"u"&&u.title?Se:ke}let O=A()(c),S=typeof u=="object"&&ge(),d=c[0]&&W(c),b=Q(c[0]),R=[];for(let a=0;a<b.length;a+=1)R[a]=z(U(c,b,a));return{c(){T&&T.c(),i=w(),O.c(),r=k("meta"),t=k("meta"),S&&S.c(),l=I(),n=w(),e=k("p"),e.textContent=o,f=w(),d&&d.c(),E=w();for(let a=0;a<R.length;a+=1)R[a].c();v=I(),this.h()},l(a){T&&T.l(a),i=g(a);const p=Z("svelte-2igo1p",document.head);O.l(p),r=y(p,"META",{name:!0,content:!0}),t=y(p,"META",{name:!0,content:!0}),S&&S.l(p),l=I(),p.forEach(s),n=g(a),e=y(a,"P",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-kd20zj"&&(e.textContent=o),f=g(a),d&&d.l(a),E=g(a);for(let h=0;h<R.length;h+=1)R[h].l(a);v=I(),this.h()},h(){_(r,"name","twitter:card"),_(r,"content","summary_large_image"),_(t,"name","twitter:site"),_(t,"content","@evidence_dev"),_(e,"class","markdown")},m(a,p){T&&T.m(a,p),m(a,i,p),O.m(document.head,null),C(document.head,r),C(document.head,t),S&&S.m(document.head,null),C(document.head,l),m(a,n,p),m(a,e,p),m(a,f,p),d&&d.m(a,p),m(a,E,p);for(let h=0;h<R.length;h+=1)R[h]&&R[h].m(a,p);m(a,v,p),N=!0},p(a,[p]){if(typeof u<"u"&&u.title&&u.hide_title!==!0&&T.p(a,p),O.p(a,p),typeof u=="object"&&S.p(a,p),a[0]?d?(d.p(a,p),p&1&&H(d,1)):(d=W(a),d.c(),H(d,1),d.m(E.parentNode,E)):d&&(ue(),L(d,1,1,()=>{d=null}),oe()),p&1){b=Q(a[0]);let h;for(h=0;h<b.length;h+=1){const Y=U(a,b,h);R[h]?R[h].p(Y,p):(R[h]=z(Y),R[h].c(),R[h].m(v.parentNode,v))}for(;h<R.length;h+=1)R[h].d(1);R.length=b.length}},i(a){N||(H(d),N=!0)},o(a){L(d),N=!1},d(a){a&&(s(i),s(n),s(e),s(f),s(E),s(v)),T&&T.d(a),O.d(a),s(r),s(t),S&&S.d(a),s(l),d&&d.d(a),J(R,a)}}}const u={title:"File Includes",description:"Show file includes per file"};function Oe(c,i,r){let t,l;G(c,be,b=>r(7,t=b)),G(c,j,b=>r(13,l=b));let{data:n}=i,{data:e={},customFormattingSettings:o,__db:f,inputs:E}=n;ee(j,l="0871ba1e45e81d906050f421d322ea0f",l);let v=de(_e(E));te(v.subscribe(b=>E=b)),ie(Ee,{getCustomFormats:()=>o.customFormats||[]});const N=(b,R)=>Te(f.query,b,{query_name:R});pe(N),t.params,le(()=>!0);let T={initialData:void 0,initialError:void 0},A=x`SELECT
  fi.source_file_path,
  fi.include_order,
  fi.included_file_path,
  fi.included_filename,
  CASE
    WHEN LAG(fi.source_file_path) OVER (ORDER BY fi.source_file_path, fi.include_order) IS DISTINCT FROM fi.source_file_path
    THEN 1
    ELSE 0
  END AS is_new_group
FROM file_includes fi
ORDER BY fi.source_file_path, fi.include_order;`,D=`SELECT
  fi.source_file_path,
  fi.include_order,
  fi.included_file_path,
  fi.included_filename,
  CASE
    WHEN LAG(fi.source_file_path) OVER (ORDER BY fi.source_file_path, fi.include_order) IS DISTINCT FROM fi.source_file_path
    THEN 1
    ELSE 0
  END AS is_new_group
FROM file_includes fi
ORDER BY fi.source_file_path, fi.include_order;`;e.includes_data&&(e.includes_data instanceof Error?T.initialError=e.includes_data:T.initialData=e.includes_data,e.includes_columns&&(T.knownColumns=e.includes_columns));let O,S=!1;const d=me.createReactive({callback:b=>{r(0,O=b)},execFn:N},{id:"includes",...T});return d(D,{noResolve:A,...T}),globalThis[Symbol.for("includes")]={get value(){return O}},c.$$set=b=>{"data"in b&&r(1,n=b.data)},c.$$.update=()=>{c.$$.dirty&2&&r(2,{data:e={},customFormattingSettings:o,__db:f}=n,e),c.$$.dirty&4&&he.set(Object.keys(e).length>0),c.$$.dirty&128&&t.params,c.$$.dirty&120&&(A||!S?A||(d(D,{noResolve:A,...T}),r(6,S=!0)):d(D,{noResolve:A}))},r(4,A=x`SELECT
  fi.source_file_path,
  fi.include_order,
  fi.included_file_path,
  fi.included_filename,
  CASE
    WHEN LAG(fi.source_file_path) OVER (ORDER BY fi.source_file_path, fi.include_order) IS DISTINCT FROM fi.source_file_path
    THEN 1
    ELSE 0
  END AS is_new_group
FROM file_includes fi
ORDER BY fi.source_file_path, fi.include_order;`),r(5,D=`SELECT
  fi.source_file_path,
  fi.include_order,
  fi.included_file_path,
  fi.included_filename,
  CASE
    WHEN LAG(fi.source_file_path) OVER (ORDER BY fi.source_file_path, fi.include_order) IS DISTINCT FROM fi.source_file_path
    THEN 1
    ELSE 0
  END AS is_new_group
FROM file_includes fi
ORDER BY fi.source_file_path, fi.include_order;`),[O,n,e,T,A,D,S,t]}class Be extends re{constructor(i){super(),ne(this,i,Oe,Ae,X,{data:1})}}export{Be as component};
