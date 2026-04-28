import{j as e}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const N="_root_139e3_6",b="_animate_139e3_11",C="_card_139e3_22",q="_cardHeader_139e3_32",D="_cardMeta_139e3_39",s={root:N,animate:b,card:C,cardHeader:q,cardMeta:D},t=({width:a="100%",height:S=16,radius:_=6,animate:k=!0,className:w})=>e.jsx("div",{className:[s.root,k?s.animate:"",w].filter(Boolean).join(" "),style:{width:a,height:S,borderRadius:_}});t.displayName="Skeleton";const o=({className:a})=>e.jsxs("div",{className:[s.card,a].filter(Boolean).join(" "),children:[e.jsxs("div",{className:s.cardHeader,children:[e.jsx(t,{width:40,height:40,radius:999}),e.jsxs("div",{className:s.cardMeta,children:[e.jsx(t,{width:"60%",height:14}),e.jsx(t,{width:"40%",height:12})]})]}),e.jsx(t,{height:12}),e.jsx(t,{width:"90%",height:12}),e.jsx(t,{width:"70%",height:12})]});o.displayName="SkeletonCard";t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"SkeletonCard",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Feedback/Skeleton",tags:["autodocs"]},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:400},children:[e.jsx(t,{height:20,width:"80%"}),e.jsx(t,{height:14}),e.jsx(t,{height:14,width:"90%"}),e.jsx(t,{height:14,width:"60%"})]})},i={render:()=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(o,{})})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:360},children:[1,2,3].map(a=>e.jsx(o,{},a))})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(t,{width:64,height:64,radius:999}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:[e.jsx(t,{height:18,width:"60%"}),e.jsx(t,{height:13})]})]})};var l,c,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 400
  }}>
      <Skeleton height={20} width="80%" />
      <Skeleton height={14} />
      <Skeleton height={14} width="90%" />
      <Skeleton height={14} width="60%" />
    </div>
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }}>
      <SkeletonCard />
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,g,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 360
  }}>
      {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
    </div>
}`,...(f=(g=d.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,j,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Skeleton width={64} height={64} radius={999} />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }}>
        <Skeleton height={18} width="60%" />
        <Skeleton height={13} />
      </div>
    </div>
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const L=["Line","Card","List","Shapes"];export{i as Card,r as Line,d as List,n as Shapes,L as __namedExportsOrder,I as default};
