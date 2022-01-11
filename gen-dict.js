//need hydcd.tsv by dumptsv.mjs
import {writeFileSync,readFileSync, write} from 'fs';
const filterwh=readFileSync('a.txt-w','utf8').split(/\r?\n/).map(item=>item.replace(/^\d+,/g,''));
// console.log(filterwh)
//only CJK BMP
let entries=readFileSync('../hydcd3/hydcd.tsv','utf8').split(/\r?\n/);
entries.shift();
let secount=0,count=0;
const Entry={},WH={},CH={};

//重覆 的 例子
const lzdedup=entries=>{
    let plz='',psy='',pwh='',dupcount=0;
    for (let i=0;i<entries.length;i++){
        const entry=entries[i];
        if (!entry)continue;
    //字詞\t音\t詞號\t義項\t同義詞\t釋義\t例子
        const [wh,py,ljxh,gl,sy,lz] =entry.split('\t');
        if (plz==lz && lz) {
            console.log(wh)
            dupcount++;
        }
        plz=lz;
        psy=sy;
        pwh=wh;
    }
    console.log('dup count',dupcount)
}

const dumplz=(entries)=>{
    for (let i=0;i<entries.length;i++){
        const entry=entries[i];
        if (!entry)continue;
    //字詞\t音\t詞號\t義項\t同義詞\t釋義\t例子
        const [wh,py,ljxh,xh,gl,sy,lz] =entry.split('\t');
        
        const key=wh+'@'+xh;
        if (!WH[key]) WH[key]=0;
        WH[key]++;
        /*
        const at= sy.indexOf('亦作 ^se');
        if (at>-1) count++;
        if (at==0) {
            const m=sy.match(/亦作 (\^se[^。]+)/);
            // console.log(wh,m[1])
            secount++;
        } else if (at>-1) {
            console.log(wh,sy)
        }
        */
    }
        
    for (let key in WH) {
        if (WH[key]>1) {
            console.log(key,WH[key]);
        }
    }
}

const dumpofftext=(entries,filterwh)=>{
    const dict={};
    let count=0,count2=0;
    const out=[];
    const dumpEntry=entry=>{
        let [wh,py,ljxh,gl,sy,lz] =entry.split('\t');
        let extra='';
        // if (lz.indexOf('毛澤東')>-1) {
        //     extra=lz.replace(/(\^q\d*)/g,'\n$1').split('\n').filter(item=>item.indexOf('毛澤東')>-1).join('\n');
        // }
        if (wh.charCodeAt(wh.length-1)<0x60) {
            if (!entries[wh.substr(0,wh.length-1)]) {
                wh=wh.substr(0,wh.length-1);
            }
        }
        out.push('^e'+wh+(gl?'\n'+gl:'')+sy.replace(/(\^d\d*)/g,'\n$1')+extra);
    }
    for (let i=0;i<entries.length;i++){
        const entry=entries[i];
        if (!entry)continue;
        if (!filterwh) {
            dumpEntry(entry);
        } else {
            const at=entry.indexOf('\t');
            dict[ entry.substr(0,at)]=i; //i==0 is field name
        }
    }
    if (filterwh) {
        for (let i=0;i<filterwh.length;i++) {
            let fwh=filterwh[i];
            let at=dict[fwh];
            if (!at) {
                const tries=['A','B','C','D','E','F'];
                for (let i=0;i<tries.length;i++) {
                    at=dict[fwh+tries[i]];
                    if (at) {
                        fwh+=tries[i]
                        break;
                    }
                }
                if (!at){
                    console.log('not found',fwh)
                }
            }
            if (at) dumpEntry( entries[ dict[fwh]])
        }
    }
    writeFileSync('hydcd-mzd.off',out.join('\n'),'utf8')
}
console.log('dumping')

dumpofftext(entries,filterwh)
// console.log('se count',secount,count)