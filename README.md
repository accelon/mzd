# 毛泽东选集 中英逐句对读

## 数字底本 
[毛泽东全集(繁简版) 安卓App](https://play.google.com/store/apps/details?id=com.zhaozhao.zhang.maozedongworks)

## 使用注意

1. 本数据库只是数字加工，没有对内容本身进行任何改动。
2. 本数据库內容並沒有与官方权威机构之正式出版品勘校，学术等严谨场合请慎用。
3. 英译的翻译水平很高，适用于语言学习。

## 数字加工

1. 文本改为繁体编码，以便利繁简转换。
2. 软件分句并人工调整。
3. 与英译逐句对齐。
4. 年份、小标题等结构标记。

## 无著作权

在中华人民共和国政府之法律允许的范围，以上加工，放弃所有全世界范围内基于着作权法对作品享有的权利，包括所有相关权利和邻接权利。您可以复制、修改、发行和表演本作品，甚至可用于商业性目的，都无需要求同意。

详细条文 [Creative Common Zero](https://creativecommons.org/publicdomain/zero/1.0/deed.zh)


## editable

     wordhead-extra.txt //add propername

## Build steps

     pitaka wordhead // get wordhead-freq.txt
     node gen-lemma.txt    // get wordhead.txt, whenever wordhead-extra.txt is touched
     
     pitaka build    // get pitaka js

