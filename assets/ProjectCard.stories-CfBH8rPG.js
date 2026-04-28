import{j as e}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import{T as k}from"./Tag-DSIABTu3.js";import"./_commonjsHelpers-CqkleIqs.js";const S="_root_1i70x_1",h="_kicker_1i70x_25",C="_title_1i70x_32",N="_description_1i70x_41",v="_footer_1i70x_48",q="_tags_1i70x_56",R="_year_1i70x_62",t={root:S,kicker:h,title:C,description:N,footer:v,tags:q,year:R},i=({kicker:r,title:_,description:o,tags:x=[],year:n,href:c,onClick:f,className:T})=>{const j=c?"a":"article";return e.jsxs(j,{href:c,onClick:f,className:[t.root,T].filter(Boolean).join(" "),children:[r&&e.jsx("div",{className:t.kicker,children:r}),e.jsx("h3",{className:t.title,children:_}),o&&e.jsx("p",{className:t.description,children:o}),e.jsxs("div",{className:t.footer,children:[e.jsx("div",{className:t.tags,children:x.map(d=>e.jsx(k,{children:d},d))}),n&&e.jsx("span",{className:t.year,children:n})]})]})};i.displayName="ProjectCard";i.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{kicker:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},year:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Personal/ProjectCard",component:i,tags:["autodocs"]},s={args:{kicker:"WEB · 개인 프로젝트",title:"코리안심슨 디자인 시스템",description:"토스의 UX 라이팅 원칙을 차용한 개인 브랜드 디자인 시스템. TypeScript + CSS Modules.",tags:["TypeScript","React","CSS Modules"],year:"2024"}},a={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16,maxWidth:800},children:[{title:"포트폴리오 사이트",tags:["Next.js","TypeScript"],year:"2024"},{title:"날씨 앱",tags:["React","Vite"],year:"2023"},{title:"할일 관리",tags:["React","Zustand"],year:"2023"},{title:"디자인 시스템",tags:["TypeScript","Storybook"],year:"2024"}].map(r=>e.jsx(i,{kicker:"WEB",description:"사이드 프로젝트 설명이에요.",...r},r.title))})};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    kicker: 'WEB · 개인 프로젝트',
    title: '코리안심슨 디자인 시스템',
    description: '토스의 UX 라이팅 원칙을 차용한 개인 브랜드 디자인 시스템. TypeScript + CSS Modules.',
    tags: ['TypeScript', 'React', 'CSS Modules'],
    year: '2024'
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var y,g,u;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16,
    maxWidth: 800
  }}>
      {[{
      title: '포트폴리오 사이트',
      tags: ['Next.js', 'TypeScript'],
      year: '2024'
    }, {
      title: '날씨 앱',
      tags: ['React', 'Vite'],
      year: '2023'
    }, {
      title: '할일 관리',
      tags: ['React', 'Zustand'],
      year: '2023'
    }, {
      title: '디자인 시스템',
      tags: ['TypeScript', 'Storybook'],
      year: '2024'
    }].map(p => <ProjectCard key={p.title} kicker="WEB" description="사이드 프로젝트 설명이에요." {...p} />)}
    </div>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const M=["Default","Grid"];export{s as Default,a as Grid,M as __namedExportsOrder,b as default};
