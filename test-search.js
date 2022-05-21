import {nodefs} from 'pitaka/cli';
await nodefs;
import {openBasket} from 'pitaka'
import {parseQuery} from 'pitaka/search'
const ptk= await openBasket('mzd');
await ptk.setupInverted();
//console.log(ptk.inverted.tokens.slice(0,5))
const r=await ptk.fulltextSearch('男女',{excerpt:true});
const ltp=ptk.inverted.linetokenpos;
const nth=3;
const y= r.scoredLine[nth][0]
console.log(ltp[y-1],ltp[y])
await ptk.prefetchLines(y)
console.log(ptk.getLine(y), );
console.log( r, ptk.hitPos( r.postings , r.phrases) );


//const lemmas=ptk.enumLemma('帝國主義的計劃');
//console.log(ptk.inverted.tokens.join('\n'))