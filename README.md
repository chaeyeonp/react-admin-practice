# 🛠 React Admin Practice

Node.js(Express)와 MySQL 연동한 "https://github.com/chaeyeonp/node_admin" 과 react-admin 연동


### 실행 방법

```
git clone "https://github.com/chaeyeonp/react-admin-practice"

npm install

cd admin

node admin.js

cd ..

npm start

```

## 📝 사용언어, 기술스택

![Generic badge](https://img.shields.io/badge/framework-tensorflow/React-green.svg)
![Generic badge](https://img.shields.io/badge/engine-node.js-green.svg)
![Generic badge](https://img.shields.io/badge/database-MySQL-yellow.svg)


<br><br>

## 📕 세부 기술
| 기술 | 버전 | 설명 |
| -------- | ---- | ---- |
| ESLint | ![Generic badge](https://img.shields.io/badge/release-6.14.8-blue.svg) | ECMAScript 코드에서 문제점 검사 또는 더 나은 코드로 정정하는 린트 도구 |
| Node.js Express | ![Generic badge](https://img.shields.io/badge/release-6.14.8-blue.svg) | ECMAScript 코드에서 문제점 검사 또는 더 나은 코드로 정정하는 린트 도구 |
| React-Admin | ![Generic badge](https://img.shields.io/badge/release-6.14.8-blue.svg) | ECMAScript 코드에서 문제점 검사 또는 더 나은 코드로 정정하는 린트 도구 |



<br>

## 🎛 Mysql DB Structure

<img width="1047" alt="mysqldb" src="https://user-images.githubusercontent.com/61309080/98805792-7cd6ae00-245b-11eb-95d0-63e2eb121ef9.png">

```
CREATE SCHEMA admin;

GO

CREATE TABLE mboard
(
    date    date        not null,
    student varchar(50) not null,
    mask    varchar(30) not null,
    count   int         not null,
    id      int auto_increment
        primary key
);

```



## 🔐 최종 결과 화면

<img width="1440" alt="userpage" src="https://user-images.githubusercontent.com/61309080/99478724-44bdf680-2998-11eb-99ef-d2789d52b24d.png">
