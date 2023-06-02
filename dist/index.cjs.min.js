"use strict";var e=require("graphql"),t=require("ts-poet");function r(t){return t instanceof e.GraphQLObjectType}function n(t){return t instanceof e.GraphQLScalarType}function i(e){if(!e)return;const[r,n]=e.split("#");return t.imp(`${n}@${r}`)}exports.isObjectType=r,exports.isScalarType=n,exports.plugin=async(s,o,p)=>{const{scalarTypePolicies:a={}}=p||{};function c(t){let r=t.type;return e.isNonNullType(r)&&(r=r.ofType),n(r)&&void 0!==a[r.name]}return{content:await t.code`
    export const scalarTypePolicies = {
      ${Object.values(s.getTypeMap()).filter(r).filter((e=>!e.name.startsWith("__"))).filter((e=>Object.values(e.getFields()).some(c))).map((r=>t.code`${r.name}: { fields: { ${Object.values(r.getFields()).filter(c).map((r=>{let n=r.type;return e.isNonNullType(n)&&(n=n.ofType),t.code`${r.name}: ${i(a[n.name])},`}))} } },`))}
    };
  `.toStringWithImports()}},exports.toImp=i;
