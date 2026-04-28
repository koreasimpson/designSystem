import{j as e}from"./jsx-runtime-CFY_2KVU.js";import"./index-Dq4ZvVuH.js";import"./_commonjsHelpers-CqkleIqs.js";const f="_root_giesa_1",v="_inner_giesa_20",T="_title_giesa_24",h="_excerpt_giesa_34",j="_meta_giesa_42",t={root:f,inner:v,title:T,excerpt:h,meta:j},o=({title:s,excerpt:d,date:n,readTime:r,href:g="#",onClick:_,className:y})=>e.jsx("a",{href:g,onClick:_,className:[t.root,y].filter(Boolean).join(" "),children:e.jsxs("div",{className:t.inner,children:[e.jsx("h3",{className:t.title,children:s}),d&&e.jsx("p",{className:t.excerpt,children:d}),(n||r!==void 0)&&e.jsxs("div",{className:t.meta,children:[n,n&&r!==void 0&&" · ",r!==void 0&&`${r}분`]})]})});o.displayName="PostListItem";o.__docgenInfo={description:"",methods:[],displayName:"PostListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},excerpt:{required:!1,tsType:{name:"string"},description:""},date:{required:!1,tsType:{name:"string"},description:""},readTime:{required:!1,tsType:{name:"number"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Personal/PostListItem",component:o,tags:["autodocs"]},i={args:{title:"토스의 UX 라이팅 원칙을 개인 프로젝트에 적용하기",excerpt:'에러 메시지는 책망이 아닌 안내여야 해요. "실패했어요" 대신 "다시 시도해 주세요"라고 쓰는 이유를 정리했어요.',date:"2024. 4. 28",readTime:5}},a={render:()=>e.jsx("div",{style:{maxWidth:640},children:[{title:"TypeScript로 디자인 시스템 만들기",date:"2024. 4. 28",readTime:8},{title:"CSS Modules vs vanilla-extract",date:"2024. 3. 15",readTime:5},{title:"Storybook 8 세팅 가이드",date:"2024. 2. 10",readTime:4}].map(s=>e.jsx(o,{excerpt:"포스트 요약이 여기 들어가요.",...s},s.title))})};var c,l,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '토스의 UX 라이팅 원칙을 개인 프로젝트에 적용하기',
    excerpt: '에러 메시지는 책망이 아닌 안내여야 해요. "실패했어요" 대신 "다시 시도해 주세요"라고 쓰는 이유를 정리했어요.',
    date: '2024. 4. 28',
    readTime: 5
  }
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640
  }}>
      {[{
      title: 'TypeScript로 디자인 시스템 만들기',
      date: '2024. 4. 28',
      readTime: 8
    }, {
      title: 'CSS Modules vs vanilla-extract',
      date: '2024. 3. 15',
      readTime: 5
    }, {
      title: 'Storybook 8 세팅 가이드',
      date: '2024. 2. 10',
      readTime: 4
    }].map(p => <PostListItem key={p.title} excerpt="포스트 요약이 여기 들어가요." {...p} />)}
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const I=["Default","List"];export{i as Default,a as List,I as __namedExportsOrder,L as default};
