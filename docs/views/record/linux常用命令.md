---
title: linux常用命令
date: 2020-02-04
tags:
 - linux
categories:
 - record
---

##### 初始化root密码
- sudo passwd root // 输入密码即可
- su root // 切换用户



##### 设置网络模式为桥接模式

在virtualBox中设置；


##### 重启

shutdown -r now


##### 安装ssh

apt-get install ssh

启动ssh服务

systemctl status sshd.service

查找ssh服务出错原因

/usr/sbin/sshd -T


##### 防火墙

- 关闭 ufw disable

##### 文件操作

使用vim打开文件 

sudo vim [文件路径]   eg: sudo vim /ect/ssh/sshd_config
