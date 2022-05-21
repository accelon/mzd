# 毛泽东选集 中英逐句对读

## 数字底本 
[毛泽东全集(繁简版) 安卓App](https://play.google.com/store/apps/details?id=com.zhaozhao.zhang.maozedongworks)

## 使用注意

1. 本数据库只是数字文本格式的加工，除了校正繁简转换的錯誤，没有对内容本身进行任何改动。
2. 本数据库內容並沒有与官方权威机构之正式出版品勘校，学术等严谨场合请慎用。
3. 英译的翻译水平很高，适用于语言学习。

## 数字加工

1. 文本改为繁体编码，以便利繁简转换。
2. 软件分句并人工调整。
3. 与英译逐句对齐。
4. 年份、小标题等结构标记。

## 放弃文本加工之著作权

在中华人民共和国政府之法律允许的范围，以上加工，放弃所有全世界范围内基于着作权法对作品享有的权利，包括所有相关权利和邻接权利。您可以复制、修改、发行和表演本作品，甚至可用于商业性目的，都无需要求同意。

详细条文 [Creative Common Zero](https://creativecommons.org/publicdomain/zero/1.0/deed.zh)

## 文件說明
    
    off\a1.zh.off 原文第一册 (共5册)
    off\a1.en.off 英译第一册 (共5册)
    a1.zh.off 之行数与 a1.en.off 一致，逐行对齐
    
    off\a-fn.zh.off 注释（1~5册)
    off\a-fn.zh.off 英译注释（1~5册)
    中文和英译的注释数量不一致，因此注释号不对齐
    
    *.off [格式说明](https://github.com/accelon/pitaka)
    
## editable

     wordhead-freq.txt   // 出現在漢語大詞典的詞 ，由 pitaka wordhead 產生 一萬五千多個
     wordhead-remove.txt //  要去除的詞，應可以去掉一大半低頻度的，只留頻次大於2，及較長的
     wordhead-extra.txt   // 人名及地名等詞


## Build steps

     pitaka wordhead // get wordhead-freq.txt , need hydcd3/lemma.txt
     node gen-lemma.txt    // get lemma.txt, whenever wordhead-extra.txt , wordhead-freq.txt wordhead-remove.txt is touched
     
     pitaka build    // get pitaka js

     release.cmd // make a bundle , need accelon21