# PVC для NFS-хранилища
## Деплой
```bash
kubectl -n boiarnikov-a-hw3 apply -f postgress-config.yaml
kubectl -n boiarnikov-a-hw3 apply -f postgress-secrets.yaml
kubectl -n boiarnikov-a-hw3 apply -f postgress-sc.yaml
kubectl -n boiarnikov-a-hw3 apply -f postgress-pvc.yaml
kubectl -n boiarnikov-a-hw3 apply -f postgress-deployment.yaml
```
## Проверка сохранности данных просле перезагрузки пода
### Создаем базу, таблицу и запись
```bash
$ kubectl -n boiarnikov-a-hw4 exec postgres-app-$pod --stdin --tty shell-demo -- /bin/bash
$ psql --username "admin"
admin=# CREATE DATABASE mipt_devops;
admin=# \c mipt_devops;
You are now connected to database "mipt_devops" as user "admin".
mipt_devops=# CREATE TABLE test (test_id bigserial primary key, test_name varchar(20) NOT NULL);
mipt_devops=# INSERT INTO test (test_name) VALUES ('a');
mipt_devops=# SELECT * from test;
 test_id | test_name 
---------+-----------
       1 | a
```
### Перезапускаем под
```bash
$ kubectl -n boiarnikov-a-hw4 scale deployment postgres-app --replicas=0
deployment.apps/postgres-app scaled
$ kubectl -n boiarnikov-a-hw4 scale deployment postgres-app --replicas=1
deployment.apps/postgres-app scaled
```
### Проверяем данные
```bash
$ kubectl -n boiarnikov-a-hw4 exec postgres-app-$pod --stdin --tty shell-demo -- /bin/bash
$ psql --username "admin" --dbname "mipt_devops"
mipt_devops=# SELECT * from test;
 test_id | test_name 
---------+-----------
       1 | a
```
