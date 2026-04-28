import{j as r}from"./jsx-runtime-CFY_2KVU.js";import{R as v}from"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const N="_root_r1l71_1",q="_disabled_r1l71_12",T="_input_r1l71_17",S="_dot_r1l71_25",C="_checked_r1l71_42",V="_inner_r1l71_46",G="_label_r1l71_53",w="_group_r1l71_57",B="_vertical_r1l71_63",t={root:N,disabled:q,input:T,dot:S,checked:C,inner:V,label:G,group:w,vertical:B},u=({checked:e,onChange:a,value:s,name:m,disabled:o,children:l,className:n})=>r.jsxs("label",{className:[t.root,o?t.disabled:"",n].filter(Boolean).join(" "),children:[r.jsx("span",{className:[t.dot,e?t.checked:""].filter(Boolean).join(" "),children:e&&r.jsx("span",{className:t.inner})}),r.jsx("input",{type:"radio",name:m,value:s,checked:!!e,onChange:x=>x.target.checked&&(a==null?void 0:a(s??"")),disabled:o,className:t.input}),l&&r.jsx("span",{className:t.label,children:l})]});u.displayName="Radio";const p=({value:e,onChange:a,options:s,name:m="radio-group",direction:o="horizontal",className:l})=>r.jsx("div",{className:[t.group,o==="vertical"?t.vertical:"",l].filter(Boolean).join(" "),children:s.map(n=>r.jsx(u,{checked:e===n.value,onChange:a,value:n.value,name:m,disabled:n.disabled,children:n.label},n.value))});p.displayName="RadioGroup";u.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioGroupOption"}],raw:"RadioGroupOption[]"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'radio-group'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"DataEntry/Radio",tags:["autodocs"]},i={render:()=>{const[e,a]=v.useState(!1);return r.jsx(u,{checked:e,onChange:()=>a(!e),children:"선택"})}},c={render:()=>{const[e,a]=v.useState("");return r.jsx(p,{value:e,onChange:a,options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"},{value:"c",label:"옵션 C (불가)",disabled:!0}]})}},d={render:()=>{const[e,a]=v.useState("monthly");return r.jsx(p,{value:e,onChange:a,direction:"vertical",options:[{value:"monthly",label:"월간 구독"},{value:"yearly",label:"연간 구독 (20% 할인)"}]})}};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Radio checked={checked} onChange={() => setChecked(!checked)}>
        선택
      </Radio>;
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var _,b,f;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <RadioGroup value={value} onChange={setValue} options={[{
      value: 'a',
      label: '옵션 A'
    }, {
      value: 'b',
      label: '옵션 B'
    }, {
      value: 'c',
      label: '옵션 C (불가)',
      disabled: true
    }]} />;
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var R,j,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('monthly');
    return <RadioGroup value={value} onChange={setValue} direction="vertical" options={[{
      value: 'monthly',
      label: '월간 구독'
    }, {
      value: 'yearly',
      label: '연간 구독 (20% 할인)'
    }]} />;
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const I=["Single","Group","Vertical"];export{c as Group,i as Single,d as Vertical,I as __namedExportsOrder,O as default};
