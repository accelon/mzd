# 毛泽东选集 中英逐句对照

[線上演示](https://nissaya.cn/mzd/)
## 数字底本 
[毛泽东全集(繁简版) 安卓App](https://play.google.com/store/apps/details?id=com.zhaozhao.zhang.maozedongworks)

## 開發環境安裝
1. 按步驟安裝 [accelon23](https://github.com/accelon/accelon23)
2. 執行 install-ptk.cmd (windows only)
3. 打開 ..\accelon23\dist\index.html

## 注意事项
1. 本数据库只是数字文本格式的加工，除了校正繁简转换的錯誤，没有对内容本身进行任何改动。
2. 本数据库並沒有，与官方权威机构之正式出版品勘校，学术等严谨场合请谨慎运用。
3. 英译的翻译水平很高，用词典雅，是很好的语言学习材料。

## 数字加工
1. 文本以 ConvertZZ 改为繁体编码。
2. 软件自动分句并人工校正。
3. 与英译逐句对齐。
4. 年份、小标题、注释等内容结构标记。

## 征求合作伙伴
1. 中英文分句对齐人员。将长句切分成更小的句子。
2. 鸿蒙系统运行情况回报。
3. 你可以学习到多语言平行语料库及巢式注解的制作方法，这是机器学习和自然语言处理的基础材料。

## 已知问题
1. 部分句子太长，影响阅读比对。
2. 部份机转繁体待修正。（如于、於）
3. 合并重复的注释。

## 巢状注释说明
1. 4〈井冈山的斗争〉 第11段 ，点「潮汕叶贺旧部 」的「◂」打开「注⑧叶贺旧部」注释，再点一次关闭。
2. 注释以黄色底线显示，再点 「叶部见本文注18」，注18（叶挺）的解释会被嵌入。
3. 第二层注释以青色显示，阅读完毕後，点「注18」只关闭「叶挺」注，点⑧同时关闭「叶贺旧部注」和「叶挺」注。

## 放弃数字加工权利以及免责声明
在中华人民共和国规定之"毛泽东选集"及其本译本之合理使用范围内，放弃所有在全世界范围，基于相关法律对数字加工享有的权利，包括所有相关权利和邻接权利。您可以复制、修改、发行和呈现本数字加工，甚至可用于商业性目的，都无须事先征求同意。

详细条文 [Creative Common Zero](https://creativecommons.org/publicdomain/zero/1.0/deed.zh)

## 文件說明
    
    off\a1.zh.off 原文第一册 (共5册)
    off\a1.en.off 英译第一册 (共5册)
    a1.zh.off 之行数与 a1.en.off 一致，逐行对齐
    
    off\a-fn.zh.off 注释（1~5册）
    off\a-fn.zh.off 英译注释（1~5册）
    中文和英译的注释数量不一致，因此注释号不对齐
    

off [格式说明](https://github.com/accelon/pitaka)

## Next Steps
1. 建立常用词中英对照表 (依据 wordhead-freq.txt 和英文词频)，词组抹以相同颜色。
2. 句子再切细，目前行平均字数为45，每行不超过350字（应降到80以下）。
3. 第6~8 册有英译，但篇章不如前五册一致，须人工对齐。
4. 注释未对齐。英译注释数比中文多。
5. 建立与汉语大词典引用毛选之互文连结。
6. 抽出汉语大词典的毛选用词，删去多余义项，连同注释，做成毛选专属小词典。

## 可手工编辑之数据
     wordhead-freq.txt      // 出现在汉语大词典的词 ，由 pitaka wordhead 产生 一万五千多个
     wordhead-remove.txt //  要去除的词，应可以去掉一大半低频度的，只留频次大於2，及较长的
     wordhead-extra.txt     // 人名及地名等词