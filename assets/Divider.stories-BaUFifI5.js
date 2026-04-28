import{j as e}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const S="_horizontal_frtvp_1",N="_dashed_frtvp_7",T="_vertical_frtvp_11",B="_labeled_frtvp_20",R="_line_frtvp_26",q="_flex1_frtvp_31",w="_labelText_frtvp_35",r={horizontal:S,dashed:N,vertical:T,labeled:B,line:R,flex1:q,labelText:w},a=({vertical:z,label:p,align:n="center",dashed:o,className:d,...c})=>z?e.jsx("span",{className:[r.vertical,d].filter(Boolean).join(" "),role:"separator","aria-orientation":"vertical",...c}):p?e.jsxs("div",{className:[r.labeled,d].filter(Boolean).join(" "),role:"separator",...c,children:[n!=="left"&&e.jsx("span",{className:[r.line,o?r.dashed:""].filter(Boolean).join(" "),style:{flex:n==="center"?1:void 0,width:n==="right"?24:void 0}}),e.jsx("span",{className:r.labelText,children:p}),n!=="right"&&e.jsx("span",{className:[r.line,r.flex1,o?r.dashed:""].filter(Boolean).join(" ")})]}):e.jsx("hr",{className:[r.horizontal,o?r.dashed:"",d].filter(Boolean).join(" "),...c});a.displayName="Divider";a.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{vertical:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},dashed:{required:!1,tsType:{name:"boolean"},description:""}}};const E={title:"Layout/Divider",component:a,tags:["autodocs"]},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx("span",{style:{color:"var(--fg-2)",fontSize:14},children:"위쪽 내용"}),e.jsx(a,{}),e.jsx("span",{style:{color:"var(--fg-2)",fontSize:14},children:"아래쪽 내용"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(a,{label:"또는"}),e.jsx(a,{label:"2024년 4월",align:"left"}),e.jsx(a,{label:"끝",align:"right"})]})},t={render:()=>e.jsx(a,{dashed:!0})},i={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,fontSize:14,color:"var(--fg-2)"},children:[e.jsx("span",{children:"저장"}),e.jsx(a,{vertical:!0}),e.jsx("span",{children:"취소"}),e.jsx(a,{vertical:!0}),e.jsx("span",{children:"삭제"})]})};var f,v,m;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <span style={{
      color: 'var(--fg-2)',
      fontSize: 14
    }}>위쪽 내용</span>
      <Divider />
      <span style={{
      color: 'var(--fg-2)',
      fontSize: 14
    }}>아래쪽 내용</span>
    </div>
}`,...(m=(v=l.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var x,u,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <Divider label="또는" />
      <Divider label="2024년 4월" align="left" />
      <Divider label="끝" align="right" />
    </div>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,j,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Divider dashed />
}`,...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var _,D,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    fontSize: 14,
    color: 'var(--fg-2)'
  }}>
      <span>저장</span>
      <Divider vertical />
      <span>취소</span>
      <Divider vertical />
      <span>삭제</span>
    </div>
}`,...(b=(D=i.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const W=["Default","WithLabel","Dashed","Vertical"];export{t as Dashed,l as Default,i as Vertical,s as WithLabel,W as __namedExportsOrder,E as default};
