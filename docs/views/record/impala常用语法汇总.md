---
title: impala常用语法汇总
date: 2020-02-04
tags:
 - impala
 - sql
categories:
 - record
---

#### 修改表结构

```sql
alter table c_gh drop column `__action`;
alter table c_gh add column `__action`  STRING   NULL DEFAULT 'insert'   COMMENT '对应的操作';
```

#### 内存表关联

```sql
select A.* 
from sequelize_test as A
    inner join (
        values ('有个人0' as name, 12 as age), 
              ('有个人1', 24),
              ('bbb', 12)
      ) as B
    on A.name = B.name and A.age = B.age
```


##### 关联更新

```sql
update 
sequelize_test 
set sequelize_test.age = B.age
from sequelize_test  inner join  (
        values ('有个人0' as name, 12 as age), 
              ('有个人', 24),
              ('bbb', 12)
      ) as B 
on  sequelize_test.name = B.name 

```


##### 数据去重处理
```sql
delete from q_produce 
where  id in (
select a.id,a.pro_line,a.schedule_id
from q_produce a left join
(select  c.pro_line,c.schedule_id, max(c.id) as bid
 from q_produce c
 where org_id = 576517414859776 
 group by pro_line, schedule_id
 having count(1)>1
) b
on a.id < b.bid
where  a.pro_line=b.pro_line 
and a.schedule_id = b.schedule_id 
and a.id < b.bid )

```