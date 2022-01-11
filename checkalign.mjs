/*
check if article is aligned
*/
import {  readFileSync } from "fs";
const zh=readFileSync('./a5.zh.off','utf8').split(/\r?\n/)
const en=readFileSync('./a5.en.off','utf8').split(/\r?\n/)
let notcount=0, infootnote=false;
for (let i=0;i<en.length;i++) {
    let z=zh[i],e=en[i];
    if (z[0]=='※') z=z.substr(1)
    if (e[0]=='※') e=e.substr(1)
    if (z=='^footnotes' && e!=='^footnotes') {
        console.log('not align footnote',i+1)
        notcount++;
    }
    const zh2=z.substr(0,2);
    const en2=e.substr(0,2);

    if (e=='^footnotes') infootnote=true;
    if (en2=='^c') infootnote=false;

    if (infootnote && en2=='^n') {
        console.log('wrong footnote',i+1)
    }
    if (zh2=='^z' && en2!=='^z') {
        console.log('not align z ch',i+1)
        notcount++
    }
    if (zh2!=='^z' && en2==='z') {
        console.log('not align z en',i+1)
        notcount++;
    }
    if ((zh2=='^c') && (en2!=='^c')) {
        console.log('not align',i+1)
        notcount++;
    }
    if (notcount>10) break;

}