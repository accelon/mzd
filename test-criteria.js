import {nodefs} from 'pitaka/cli';
import {union,pack2,pack,unpack,unpack2,unpack3,pack3} from 'pitaka/utils'
await nodefs;
let pass=0,test=0;
import {openBasket} from 'pitaka'
import {parseQuery} from 'pitaka/search';
const ptk= await openBasket('mzd');
await ptk.setupInverted();

let r=await ptk.execCriterion('ad','1942~1943'); //1942和 1943加起來共 13 個，12 篇文章
r.chunks.length==12?pass++:0;test++;
r.linepos.length==13?pass++:0;test++;

r=await ptk.execCriterion('vol','2,3');  //第2冊+第3冊 共 71 篇
r.chunks.length==71?pass++:0;test++;

// console.log( unpack2(pack2([1,2,3])))
// const r=ptk.getLabel("ad");
// console.log(r)

// const criteria=ptk.enumCriteria();
 // console.log( ptk.chunkName(229))
// const tofind="人民"
// const r=await ptk.cascadeCriteria({ "ck":"報告" , "*":tofind} );
// console.log(r)

//const fts=await ptk.scoredChunk(i,"人民");

// const tops=r.slice(0,5);
// await ptk.prefetchLines(tops);
// console.log(tops.map( i=>[ ptk.chunkName(ptk.chunkOf(i)) , ptk.scoredLine(i,tofind) ]))



 // const r=await ptk.execCriterion("*","打倒",{scoring:true});
 // const top10=r.scoredLine.slice(0,5).map(i=>i[0]);

 // await ptk.prefetchLines(top10);
 // console.log(top10.map( i=>[ptk.chunkOf(i).name,ptk.getLine(i)]))
 
 console.log('test',test,'pass',pass);