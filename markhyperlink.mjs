import {writeFileSync, readFileSync } from "fs";
const zh=readFileSync('./a-footnotes.zh.off','utf8').split(/\r?\n/);
const article_raw=readFileSync('./article.txt','utf8').split(/\r?\n/).map(it=>it.split('\t'));
let articles={};
for (let i=0;i<article_raw.length;i++) {
    articles[ article_raw[i][1] ] = parseInt(article_raw[i][0]);
}
// console.log(articles)
const r1=/《([^》]+)》注〔(\d+)〕/g
const r2=/《([^》]+)》/g
let count=0;
for (let i=0;i<zh.length;i++) {
    let s=zh[i],touched=false;
    s=s.replace(r1,(m,a,fn)=>{
        const aa=articles[a];
        if (aa) {
            touched=true;
            return '^k[@/1.zh/'+aa+' '+a+'] ^k[@/zhfn/'+aa+'/fn='+fn+' 注'+fn+']';
        } else {
            // console.log('not found',a,fn)
        }
        return m;
    })
    s=s.replace(r2,(m,a)=>{
        const aa=articles[a];
        if (aa) {
            touched=true;
            count++;
            return '^k[@/1.zh/'+aa+' '+a+']';

        } else {
            // console.log('not found',a)
        }
        return m;
    })
    if (touched) {
        // console.log(s)
        zh[i]=s;
    }
}
// console.log(count)
writeFileSync('a-footnotes.zh.ok.off',zh.join('\n'),'utf8')