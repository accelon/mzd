import {writeFileSync,  readFileSync } from "fs";
let infootnote=false;
let ch='';
const footnotes=[];
const extract=fn=>{
    const out=[];
    const lines=readFileSync(fn,'utf8').split(/\r?\n/)
    for (let i=0;i<lines.length;i++) {
        const line=lines[i];
        if (line=='^footnotes') infootnote=true;
        if (line.substr(0,2)=='^c') {
            infootnote=false;
            ch=line.substr(2).replace(/ +.+/,'');

        }
        if (infootnote) {
            if (line==='^footnotes') {
                footnotes.push('^c'+ch);
            } else {
                footnotes.push(line);
            }
        } else {
            out.push(line);
        }
    }
    writeFileSync(fn+'.ok',out.join('\n'),'utf8');
}

const files=['./a-v1.en.off','./a-v2.en.off','./a-v3.en.off','./a-v4.en.off','./a-v5.en.off']
files.forEach(extract)
writeFileSync('a-footnotes.en.off',footnotes.join('\n'),'utf8');
