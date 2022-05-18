import {nodefs,writeChanged, readTextLines} from 'pitaka/cli';
import {alphabetically,bsearch} from 'pitaka/utils'
await nodefs;
//use common family name to check ngram-3.txt
//丁任何余侯傅劉卓古史吳呂周唐嚴夏姚姜孔孟孫宋尤尹崔巫常康廖張彭徐戴方於施曹曾朱李杜林柯梁楊歐武段毛江汪沈洪涂游湯溫潘熊牛王田白盧石秦程童範簡紀羅翁胡范莊萬葉董蔡蔣蕭薛藍蘇袁許詹謝譚賀賈賴趙連邱邵郝郭鄒鄧鄭金錢鍾鐘閻阮陳陸雷韋韓顏顧餘馬馮高魏黃黎龍龔

const wordhead_freq=readTextLines('wordhead-freq.txt') ;// created by "pitaka wordhead"
const extra=readTextLines('wordhead-extra.txt') ;// created by "pitaka wordhead"
const remove=readTextLines('wordhead-remove.txt') ;// created by "pitaka wordhead"
let lemma = wordhead_freq.map(it=>it.split(',')).filter( ([freq,tk])=> freq>2||tk.length>2 ).map(it=>it[1]) ;
lemma.sort(alphabetically);
for (let i=0;i<extra.length;i++) {
	const at=bsearch(lemma,extra[i]);
	if (at>-1) extra[i]='';
}
//add extra words
for (let i=0;i<extra.length;i++) {
	if (extra[i]) lemma.push(extra[i]);
}

lemma=lemma.filter( it=> bsearch(remove,it)==-1);
lemma.sort(alphabetically);
const outfn='lemma.txt';
if (writeChanged(outfn,lemma.join('\n'))) {
	console.log('written ',outfn,lemma.length)
}

