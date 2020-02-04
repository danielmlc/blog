---
title: mysql安装使用
date: 2020-02-04
tags:
 - mysql
 - sql
categories:
 - record
---

#####  mysql安装使用

```bash
sudo apt-get install mysql-server

sudo apt-get isntall mysql-client

sudo apt-get install libmysqlclient-dev

```

- *sudo netstat -tap | grep mysql*

通过上述命令检查之后，如果看到有mysql 的socket处于 listen 状态则表示安装成功
　

##### 常用命令

```bash
mysql -u root -p // u 表示选择登陆的用户名， -p 表示登陆的用户密码

sudo service mysql start // 启动
sudo service mysql stop // 停止
sudo service mysql restart // 重启

```

##### 修改root用户密码

> use mysql;
 
- update user set authentication_string=PASSWORD("这里输入你要改的密码") where User='root'; #更改密码
- update user set plugin="mysql_native_password"; #如果没这一行可能也会报一个错误，因此需要运行这一行
 
- flush privileges; #更新所有操作权限
- quit;

##### Ubuntu设置MySQL允许远程访问

- vi /etc/mysql/mysql.conf.d/mysqld.cnf 注释掉 bind-address          = 127.0.0.1
- GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' IDENTIFIED BY 'xxx密码';
- reflush privileges;
##### 操作脚本命令

```sql
show databases; // 查询数据库
exit // 退出
```