---
title: docker知识总结
date: 2020-02-04
tags:
 - docker
categories:
 - record
sidebar: true
---

#### 安装
apt-get update
apt-get install -y docker.io

#### 配置

配置加速器

https://cr.console.aliyun.com/

#### 命令

```
eg:
docker pull mysql:5.6 
docker run -p 3306:3306 --name mymysql -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.6

版本查看
docker version

镜像拉取
docker pull [镜像名称]

镜像查询
docker image ls

镜像删除
docker rmi [镜像名称]

镜像打包

镜像推送



容器初始化
docker run 
-p 3306:3306 （端口映射）
--name mymysql 
-v /home/mysql/data:/var/lib/mysql  （挂存储卷）
-e MYSQL_ROOT_PASSWORD=123456   (环境变量)
-d mysql:5.6
--restart=always

给未设置开机启动的容器追加设置
docker update --restart=always [容器ID/名称]

查询容器
docker ps (运行中的容器)
docker ps -a(查询所有的容器)

进入容器
docker exec -it ce5307fc90b6（容器ID） /bin/bash(目录)
docker exit 退出

查看容器日志
docker logs -f ce5307fc90b6（容器ID）

停止容器
docker stop [容器ID]

运行容器
docker run [容器ID]

删除容器
docker rm [容器ID]

仓库登录
docker login --username=danielmlc2 registry.cn-hangzhou.aliyuncs.com



```

docker run -p 3306:3306 --name mysql_blog -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.6