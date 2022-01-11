import { readFileSync,writeFileSync} from 'fs'
const files=readFileSync('./sel.lst','utf8').trim().split(/\r?\n/);
let out=[],chcount=0;
files.forEach(fn=>{
    if (fn[0]==='+') {
        // writeFileSync(fn.substr(1),out.join('\n'),'utf8');
        // out=[];
        // chcount=0;
    } else {
        let title=fn.replace('\.txt','')
        if (fn.match(/\|.+/)) {
            title=fn.replace(/.+\|/,'');
            fn=fn.replace(/\|.+/,'');
        }
        title=title.replace(/.+?_/,'').replace(/^\d+_/,'')
        const content=readFileSync(fn,'utf8').replace(/\r?\n/,'\n');
        let header='';
        chcount++;
        header='^c'+chcount+' '+title;
        
        out.push(header)
        out.push(content);

    }
})
writeFileSync('mzd-anthology.off',out.join('\n'),'utf8')