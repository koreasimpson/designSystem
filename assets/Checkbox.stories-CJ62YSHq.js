import{j as s}from"./jsx-runtime-CFY_2KVU.js";import{R as k}from"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const V="_root_c5nbg_1",G="_disabled_c5nbg_12",W="_input_c5nbg_17",M="_box_c5nbg_25",O="_checked_c5nbg_43",z="_label_c5nbg_48",c={root:V,disabled:G,input:W,box:M,checked:O,label:z},d=({checked:r,onChange:n,disabled:i,indeterminate:t,children:e,className:a})=>{const o=k.useRef(null);return k.useEffect(()=>{o.current&&(o.current.indeterminate=!!t)},[t]),s.jsxs("label",{className:[c.root,i?c.disabled:"",a].filter(Boolean).join(" "),children:[s.jsx("span",{className:[c.box,r||t?c.checked:""].filter(Boolean).join(" "),children:t?s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3.5",strokeLinecap:"round",children:s.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}):r?s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M20 6 9 17l-5-5"})}):null}),s.jsx("input",{ref:o,type:"checkbox",checked:!!r,onChange:L=>n==null?void 0:n(L.target.checked),disabled:i,className:c.input}),e&&s.jsx("span",{className:c.label,children:e})]})};d.displayName="Checkbox";d.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"DataEntry/Checkbox",component:d,tags:["autodocs"]},l={args:{children:"동의해요",checked:!1}},u={args:{children:"체크됨",checked:!0}},p={args:{children:"부분 선택",indeterminate:!0}},m={args:{children:"사용 불가",disabled:!0,checked:!0}},h={render:()=>{const[r,n]=k.useState(!1);return s.jsx(d,{checked:r,onChange:n,children:r?"체크됨":"체크하지 않음"})}},g={render:()=>{const[r,n]=k.useState([]),i=["디자인","개발","기획","마케팅"],t=e=>n(a=>a.includes(e)?a.filter(o=>o!==e):[...a,e]);return s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:i.map(e=>s.jsx(d,{checked:r.includes(e),onChange:()=>t(e),children:e},e))})}};var f,x,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: '동의해요',
    checked: false
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var _,y,C;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: '체크됨',
    checked: true
  }
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,v,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: '부분 선택',
    indeterminate: true
  }
}`,...(R=(v=p.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var S,N,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: '사용 불가',
    disabled: true,
    checked: true
  }
}`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var q,w,T;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox checked={checked} onChange={setChecked}>
        {checked ? '체크됨' : '체크하지 않음'}
      </Checkbox>;
  }
}`,...(T=(w=h.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,E,I;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = React.useState<string[]>([]);
    const items = ['디자인', '개발', '기획', '마케팅'];
    const toggle = (v: string) => setValues(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
        {items.map(item => <Checkbox key={item} checked={values.includes(item)} onChange={() => toggle(item)}>
            {item}
          </Checkbox>)}
      </div>;
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const K=["Default","Checked","Indeterminate","Disabled","Controlled","Group"];export{u as Checked,h as Controlled,l as Default,m as Disabled,g as Group,p as Indeterminate,K as __namedExportsOrder,J as default};
