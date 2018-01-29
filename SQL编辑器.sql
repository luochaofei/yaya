create database yaya

--创建会员表--

create table vip(
       username varchar(20) not null primary key,
       userpass varchar(16) not null,
       usersex char(2),
       userage int
)


insert into vip(username,userpass,usersex) values('15991461900','123456','男')
insert into vip(username,userpass,usersex) values('张四丰','123486','女')