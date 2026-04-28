import{j as e}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import{I as l}from"./Icon-CAy9nyKQ.js";import"./_commonjsHelpers-CqkleIqs.js";const b="_root_l7u2m_1",h="_badge_l7u2m_6",D="_dot_l7u2m_27",I="_statusRoot_l7u2m_35",R="_statusDot_l7u2m_43",t={root:b,badge:h,dot:D,statusRoot:I,statusDot:R,"status-default":"_status-default_l7u2m_50","status-success":"_status-success_l7u2m_51","status-warning":"_status-warning_l7u2m_52","status-error":"_status-error_l7u2m_53","status-info":"_status-info_l7u2m_54","status-processing":"_status-processing_l7u2m_55","ks-pulse":"_ks-pulse_l7u2m_1"},a=({count:s,dot:i,status:c,color:d,children:u,className:m})=>c?e.jsxs("span",{className:[t.statusRoot,m].filter(Boolean).join(" "),children:[e.jsx("span",{className:[t.statusDot,t[`status-${c}`]].join(" ")}),u]}):e.jsxs("span",{className:[t.root,m].filter(Boolean).join(" "),children:[u,s!==void 0&&s>0||i?e.jsx("span",{className:[t.badge,i?t.dot:""].filter(Boolean).join(" "),style:d?{background:d}:void 0,children:!i&&(s!==void 0?s>99?"99+":s:null)}):null]});a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{count:{required:!1,tsType:{name:"number"},description:""},dot:{required:!1,tsType:{name:"boolean"},description:""},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'info' | 'processing'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'processing'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"DataDisplay/Badge",component:a,tags:["autodocs"]},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{count:5,children:e.jsx(l,{name:"bell",size:22})}),e.jsx(a,{count:99,children:e.jsx(l,{name:"mail",size:22})}),e.jsx(a,{count:100,children:e.jsx(l,{name:"bell",size:22})})]})},n={render:()=>e.jsx(a,{dot:!0,children:e.jsx(l,{name:"bell",size:22})})},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:["default","success","warning","error","info","processing"].map(s=>e.jsx(a,{status:s,children:s},s))})};var p,g,_;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <Badge count={5}><Icon name="bell" size={22} /></Badge>
      <Badge count={99}><Icon name="mail" size={22} /></Badge>
      <Badge count={100}><Icon name="bell" size={22} /></Badge>
    </div>
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var f,x,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Badge dot><Icon name="bell" size={22} /></Badge>
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var y,B,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }}>
      {(['default', 'success', 'warning', 'error', 'info', 'processing'] as const).map(s => <Badge key={s} status={s}>{s}</Badge>)}
    </div>
}`,...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const S=["Count","Dot","Status"];export{r as Count,n as Dot,o as Status,S as __namedExportsOrder,T as default};
