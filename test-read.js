import {nodefs} from 'pitaka/cli';
await nodefs;
import {openBasket} from 'pitaka'
const ptk= await openBasket('mzd-en');
//const lemmas=ptk.enumLemma('帝國主義的計劃');
console.log(ptk.headings)