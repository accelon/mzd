import {writeFileSync,  readFileSync } from "fs";
const zh=readFileSync('./anthology.off','utf8').split(/\r?\n/)
const en=readFileSync('./anthology-en.off','utf8').split(/\r?\n/)
const countfullstop=str=>{
    let c=0;
    str.replace(/([^。]+。)/g,()=>c++)
    return c;
}
const countdot=str=>{
    let c=0;
    str.replace(/([^\.]+\.)/g,()=>c++)
    return c;
}
let match=0,unmatch=0,matchsentence=0,touchcount=0;
const zhout=[],enout=[];
for (let i=0;i<en.length;i++) {
    if (zh[i].substr(0,3)=='^fn' || en[i].substr(0,3)=='^fn') {
        zhout.push(zh[i]);
        enout.push(en[i]);
        continue;
    }

    const d1=countfullstop(zh[i]);
    const d2=countdot(en[i]);
    if (d1===d2) {
        // console.log(d1)
        /*
        match++;
        matchsentence+=d1;
        if (d1) {
            zhout.push(zh[i].replace(/([^。]+。)/g,' $1\n').trim())
            enout.push(en[i].replace(/([^\.]+\.)/g,'$1\n').trim())    
        } else {
            zhout.push(zh[i]);
            enout.push(en[i]);
        }
        */
        zhout.push(zh[i]);
        enout.push(en[i]);

    } else {
        if (d1>5 && Math.abs(d2-d1)<3) { // 
            const arr1=zh[i].split(/([^。]+。)/).filter(it=>!!it)
            const arr2=en[i].split(/([^\.]+\.)/).filter(it=>!!it)

            if (arr1.length>arr2.length) {
                let diff=arr1.length-arr2.length;
                while (diff) {arr2.push('※'); diff--}
            } else if (arr2.length>arr1.length) {
                let diff=arr2.length-arr1.length;
                while (diff) {arr1.push('※'); diff--}
            }
            console.log(arr1.length,arr2.length)
            zhout.push(...arr1)
            enout.push(...arr2)
            // console.log(d1,d2,d1-d2)
            // touchcount++;
        } else {
            // console.log(i+1,d1,d2)
            zhout.push(zh[i]);
            enout.push(en[i]);
            // touchcount++
        }
        // unmatch++;
        // let prefix='';
        // if (zh[i].length>100) prefix='※'
        // zhout.push(prefix+zh[i]);
        // enout.push(prefix+en[i]);
    }
}
// console.log('touchcount',touchcount)
// console.log('matchsentence',matchsentence,'match',match,'unmatch',unmatch);
console.log(zhout.length,enout.length)
writeFileSync('anthology.off.align',zhout.join('\n'),'utf8');
writeFileSync('anthology-en.off.align',enout.join('\n'),'utf8');