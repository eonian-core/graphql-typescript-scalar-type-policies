import{isNonNullType as t,GraphQLObjectType as e,GraphQLScalarType as n}from"graphql";import{code as r,imp as i}from"ts-poet";const o=async(e,n,i)=>{const{scalarTypePolicies:o={}}=i||{};function l(e){let n=e.type;return t(n)&&(n=n.ofType),a(n)&&void 0!==o[n.name]}return{content:await r`
    export const scalarTypePolicies = {
      ${Object.values(e.getTypeMap()).filter(s).filter((t=>!t.name.startsWith("__"))).filter((t=>Object.values(t.getFields()).some(l))).map((e=>r`${e.name}: { fields: { ${Object.values(e.getFields()).filter(l).map((e=>{let n=e.type;return t(n)&&(n=n.ofType),r`${e.name}: ${c(o[n.name])},`}))} } },`))}
    };
  `.toStringWithImports()}};function s(t){return t instanceof e}function a(t){return t instanceof n}function c(t){if(!t)return;const[e,n]=t.split("#");return i(`${n}@${e}`)}export{s as isObjectType,a as isScalarType,o as plugin,c as toImp};
