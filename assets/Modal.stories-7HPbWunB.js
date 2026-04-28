import{j as e}from"./jsx-runtime-CFY_2KVU.js";import{R as i}from"./index-Dq4ZvVuH.js";import{B as l}from"./Button-GSIhNJ6G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spin-DtEH56VJ.js";const _="_mask_h2xm4_1",g="_panel_h2xm4_19",k="_header_h2xm4_35",j="_title_h2xm4_44",b="_close_h2xm4_51",R="_body_h2xm4_77",N="_footer_h2xm4_84",r={mask:_,panel:g,header:k,title:j,close:b,body:R,footer:N},s=({open:o,onClose:t,title:d,children:f,footer:c,width:h=480,closable:y=!0,maskClosable:x=!0})=>(i.useEffect(()=>{if(!o)return;const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}},[o]),i.useEffect(()=>{const a=v=>{v.key==="Escape"&&o&&(t==null||t())};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[o,t]),o?e.jsx("div",{className:r.mask,onClick:x?t:void 0,role:"presentation",children:e.jsxs("div",{className:r.panel,style:{width:h},role:"dialog","aria-modal":"true",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:r.header,children:[d&&e.jsx("div",{className:r.title,children:d}),y&&e.jsx("button",{type:"button",className:r.close,onClick:t,"aria-label":"닫기",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx("div",{className:r.body,children:f}),c&&e.jsx("div",{className:r.footer,children:c})]})}):null);s.displayName="Modal";s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"480",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},maskClosable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const E={title:"Feedback/Modal",component:s,tags:["autodocs"]},n={render:()=>{const[o,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"모달 열기"}),e.jsx(s,{open:o,onClose:()=>t(!1),title:"정말 삭제할까요?",footer:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"secondary",onClick:()=>t(!1),children:"취소"}),e.jsx(l,{variant:"danger",onClick:()=>t(!1),children:"삭제"})]}),children:e.jsx("p",{style:{margin:0,fontSize:15,lineHeight:1.6,color:"var(--fg-2)"},children:"삭제하면 복구하기 어려워요. 계속할까요?"})})]})}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="정말 삭제할까요?" footer={<>
              <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>삭제</Button>
            </>}>
          <p style={{
          margin: 0,
          fontSize: 15,
          lineHeight: 1.6,
          color: 'var(--fg-2)'
        }}>
            삭제하면 복구하기 어려워요. 계속할까요?
          </p>
        </Modal>
      </>;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const O=["Controlled"];export{n as Controlled,O as __namedExportsOrder,E as default};
