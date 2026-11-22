"use strict";var i=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var s=i(function(f,e){
var r=require('@stdlib/ndarray-dtypes/dist'),u=require('@stdlib/stats-base-ndarray-nanmaxabs/dist'),v=require('@stdlib/stats-base-ndarray-dnanmaxabs/dist'),o=require('@stdlib/stats-base-ndarray-snanmaxabs/dist'),c=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),p=r("real_and_generic"),d=r("real_and_generic"),l={output:"same",casting:"none"},m={types:["float64","float32"],fcns:[v,o],default:u},q=c(m,[p],d,l);e.exports=q
});var x=s();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
