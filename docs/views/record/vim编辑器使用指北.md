---
title: vim编辑器使用指北
date: 2020-02-04
tags:
 - vim
 - linux
categories:
 - record
---


### 基本操作

```
# 进入vim 默认进入normal模式
vim

# 通过vim打开文件
sudo vim [文件路径]

```



### 命令模式

```
# 退出编辑器
:q enter

# 保存
:w enter

# 保存
:wq enter

# 设置行号
:set number

# 分屏
:vs :sp

使用:q 退出分屏

# 替换   
:% s/[查找字符]/[替换字符]/g（全局）

eg:
:% s/java/python/g  全局替换java为python

```

### normal模式

```
# 进入normal模式
Esc

# 使用键盘上下左右移动光标
h(左)j(下)k(上)l(右)

```

### Visual模式

主要是配合方向键进行文本选择

```
ctrl+v

V 行选择

v 

# 删除选中块
d

# 复制选中块
y

# 粘贴选中块
p

```

### insert模式

```

#  当前编辑
i （I）

# 追加编辑
a （A）

# 另起一行编辑
o  (O)

ctrl + h 删除上一个字母
ctrl + w 删除上一个单词
ctrl + u 删除当前行

ctrl + a 光标移动至行首
ctrl + e 光标移动至行尾
ctrl + b 光标逐个向前移动
ctrl + f 光标逐个向后前移动



#切换至normal模式方式:
Esc
ctrl+c
ctrl+[

```




