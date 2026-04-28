import{j as e}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const E="_root_djqwg_1",L="_track_djqwg_8",V="_bar_djqwg_15",B="_sm_djqwg_21",I="_md_djqwg_22",M="_lg_djqwg_23",$="_info_djqwg_31",r={root:E,track:L,bar:V,sm:B,md:I,lg:M,"status-default":"_status-default_djqwg_26","status-success":"_status-success_djqwg_27","status-error":"_status-error_djqwg_28","status-warning":"_status-warning_djqwg_29",info:$},s=({value:W=0,status:i="default",size:N="md",showInfo:D=!0,className:T})=>{const c=Math.min(100,Math.max(0,W));return e.jsxs("div",{className:[r.root,T].filter(Boolean).join(" "),children:[e.jsx("div",{className:r.track,children:e.jsx("div",{className:[r.bar,r[N],r[`status-${i}`]].join(" "),style:{width:`${c}%`},role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100})}),D&&e.jsx("span",{className:r.info,children:i==="success"?e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"var(--success)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})}):i==="error"?e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"var(--error)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}):`${c}%`})]})};s.displayName="Progress";s.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Feedback/Progress",component:s,tags:["autodocs"],args:{value:60,size:"md",showInfo:!0},argTypes:{value:{control:"range",min:0,max:100,step:1},size:{control:"select",options:["sm","md","lg"]},status:{control:"select",options:["default","success","error","warning"]}}},a={args:{value:60}},t={args:{value:100,status:"success"}},o={args:{value:45,status:"error"}},l={args:{value:75,status:"warning"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(s,{value:60,size:"sm"}),e.jsx(s,{value:60,size:"md"}),e.jsx(s,{value:60,size:"lg"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(s,{value:60,status:"default"}),e.jsx(s,{value:100,status:"success"}),e.jsx(s,{value:45,status:"error"}),e.jsx(s,{value:75,status:"warning"})]})};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,v,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 100,
    status: 'success'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,_,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 45,
    status: 'error'
  }
}`,...(j=(_=o.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var w,h,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 75,
    status: 'warning'
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var q,k,S;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var z,P,b;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
      <Progress value={60} status="default" />
      <Progress value={100} status="success" />
      <Progress value={45} status="error" />
      <Progress value={75} status="warning" />
    </div>
}`,...(b=(P=u.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const C=["Default","Success","Error","Warning","Sizes","AllStatuses"];export{u as AllStatuses,a as Default,o as Error,n as Sizes,t as Success,l as Warning,C as __namedExportsOrder,R as default};
