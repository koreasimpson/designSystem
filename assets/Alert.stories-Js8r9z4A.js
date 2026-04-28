import{j as e}from"./jsx-runtime-CFY_2KVU.js";import{R as z}from"./index-Dq4ZvVuH.js";import{B as V}from"./Button-GSIhNJ6G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spin-DtEH56VJ.js";const M="_root_30vqn_1",O="_icon_30vqn_11",F="_content_30vqn_17",D="_title_30vqn_22",G="_description_30vqn_30",H="_action_30vqn_37",J="_close_30vqn_41",K="_info_30vqn_61",P="_success_30vqn_67",Q="_warning_30vqn_73",U="_error_30vqn_79",r={root:M,icon:O,content:F,title:D,description:G,action:H,close:J,info:K,success:P,warning:Q,error:U},X={info:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),success:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),warning:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),error:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})},l=({type:d="info",title:p,description:u,closable:C,onClose:c,action:m,className:R})=>{const[A,E]=z.useState(!0);if(!A)return null;const I=()=>{E(!1),c==null||c()};return e.jsxs("div",{className:[r.root,r[d],R].filter(Boolean).join(" "),role:"alert",children:[e.jsx("span",{className:r.icon,children:X[d]}),e.jsxs("div",{className:r.content,children:[p&&e.jsx("p",{className:r.title,children:p}),u&&e.jsx("p",{className:r.description,children:u}),m&&e.jsx("div",{className:r.action,children:m})]}),C&&e.jsx("button",{type:"button",className:r.close,onClick:I,"aria-label":"닫기",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})};l.displayName="Alert";l.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Feedback/Alert",component:l,tags:["autodocs"],args:{type:"info",title:"알려드려요",description:"변경 사항이 저장됐어요."},argTypes:{type:{control:"select",options:["info","success","warning","error"]}}},s={args:{type:"info",title:"안내",description:"서비스 점검이 예정돼 있어요."}},n={args:{type:"success",title:"저장했어요",description:"변경 사항이 반영됐어요."}},t={args:{type:"warning",title:"잠깐, 확인해 주세요",description:"저장하면 이전 데이터는 복구하기 어려워요."}},o={args:{type:"error",title:"다시 시도해 주세요",description:"저장 중 문제가 생겼어요."}},i={args:{type:"info",title:"닫을 수 있어요",closable:!0}},a={args:{type:"warning",title:"저장하지 않은 변경 사항이 있어요",description:"페이지를 떠나면 작업 내용이 사라져요.",action:e.jsx(V,{size:"sm",variant:"secondary",children:"계속 작업하기"})}};var x,g,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: '안내',
    description: '서비스 점검이 예정돼 있어요.'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,f,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: '저장했어요',
    description: '변경 사항이 반영됐어요.'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var j,v,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: '잠깐, 확인해 주세요',
    description: '저장하면 이전 데이터는 복구하기 어려워요.'
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,q,N;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: '다시 시도해 주세요',
    description: '저장 중 문제가 생겼어요.'
  }
}`,...(N=(q=o.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var b,L,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: '닫을 수 있어요',
    closable: true
  }
}`,...(B=(L=i.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var S,W,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: '저장하지 않은 변경 사항이 있어요',
    description: '페이지를 떠나면 작업 내용이 사라져요.',
    action: <Button size="sm" variant="secondary">계속 작업하기</Button>
  }
}`,...(T=(W=a.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const ne=["Info","Success","Warning","Error","Closable","WithAction"];export{i as Closable,o as Error,s as Info,n as Success,t as Warning,a as WithAction,ne as __namedExportsOrder,se as default};
