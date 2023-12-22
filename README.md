# 毛泽东选集 中英逐句对照
## 本Repo已停止維護
請移到 [Mao-ze-dong](https://github.com/mao-ze-dong)

## 数字底本 
[毛泽东全集(繁简版) 安卓App](https://play.google.com/store/apps/details?id=com.zhaozhao.zhang.maozedongworks)

## 開發環境安裝
1. 按步驟安裝 [accelon22](https://github.com/accelon/accelon22)
2. 執行 install-ptk.cmd (windows only)
3. 打開 ..\accelon22\dist\index.html

## 注意事项

1. 本数据库只是数字文本格式的加工，除了校正繁简转换的錯誤，没有对内容本身进行任何改动。
2. 本数据库並沒有，与官方权威机构之正式出版品勘校，学术等严谨场合请谨慎运用。
3. 英译的翻译水平很高，用词典雅，是很好的语言学习材料。

## 数字加工

1. 文本以 ConvertZZ 改为繁体编码。
2. 软件自动分句并人工校正。
3. 与英译逐句对齐。
4. 年份、小标题、注释等内容结构标记。

## 放弃数字加工权利以及免责声明

在中华人民共和国规定之"毛泽东全集"合理使用范围内，放弃所有在全世界范围内，基于相关法律对数字加工享有的权利，包括所有相关权利和邻接权利。
您可以复制、修改、发行和呈现本数字加工，甚至可用于商业性目的，都无需事先征求同意。

详细条文 [Creative Common Zero](https://creativecommons.org/publicdomain/zero/1.0/deed.zh)

## 文件說明
    
    off\a1.zh.off 原文第一册 (共5册)
    off\a1.en.off 英译第一册 (共5册)
    a1.zh.off 之行数与 a1.en.off 一致，逐行对齐
    
    off\a-fn.zh.off 注释（1~5册)
    off\a-fn.zh.off 英译注释（1~5册)
    中文和英译的注释数量不一致，因此注释号不对齐
    

off [格式说明](https://github.com/accelon/pitaka)

## Next Steps
1. 建立常用词中英对照表 (依据 wordhead-freq.txt 和英文词频)，词组抹以相同颜色。
2. 句子再切细，目前行平均字数为45，每行不超过350字（应降到150以下)。
3. 第6~8 册有英译，但篇章不如前五册一致，须人工对齐。
4. 注释未对齐。英译注释数比中文多。
5. 建立与汉语大词典引用毛选之互文连结。
6. 抽出汉语大词典的毛选用词，删去多余义项，连同注释，做成毛选专属小词典。

## 可手工编辑之数据
     wordhead-freq.txt      // 出现在汉语大词典的词 ，由 pitaka wordhead 产生 一万五千多个
     wordhead-remove.txt //  要去除的词，应可以去掉一大半低频度的，只留频次大於2，及较长的
     wordhead-extra.txt     // 人名及地名等词


