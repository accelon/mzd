import { readFileSync,writeFileSync} from 'fs'
const files=readFileSync('./mzd_en.lst','utf8').trim().split(/\r?\n/);
let out=[],chcount=0;
files.forEach(fn=>{
	const content=readFileSync(fn,'utf8').replace(/\r?\n/g,'\n');
	chcount++;
	out.push('^c'+chcount+' '+content.trim());

    if (chcount===6) { //第一卷缺 7 _反對本本主義.txt
        chcount++;
        out.push('^c7 no tralation')
    }
});

writeFileSync('mzd-en.off',out.join('\n'));