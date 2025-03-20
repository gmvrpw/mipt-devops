# httpd
## Деплой
```bash
kubectl -n boiarnikov-a-hw3 apply -f app-config.yaml
kubectl -n boiarnikov-a-hw3 apply -f db-credentials.yaml
kubectl -n boiarnikov-a-hw3 apply -f httpd-deployment.yaml
kubectl -n boiarnikov-a-hw3 apply -f httpd-service.yaml
```
## Проверяем работу подов и окружения
```bash
kubectl -n boiarnikov-a-hw3 get po
```
```bash
NAME                                READY   STATUS    RESTARTS   AGE
httpd-deployment-85c6bfcbd7-896pg   1/1     Running   0          6s
httpd-deployment-85c6bfcbd7-j67qm   1/1     Running   0          6s
```
```bash
kubectl exec httpd-deployment-85c6bfcbd7-896pg -n boiarnikov-a-hw3 -- env | grep APP_NAME
```
```bash
APP_NAME=boiarnikov-a-hw3-app
```

# Redis
## Деплой
```bash
kubectl -n boiarnikov-a-hw3 apply -f config.yaml
kubectl -n boiarnikov-a-hw3 apply -f secrets.yaml
kubectl -n boiarnikov-a-hw3 apply -f redis-deployment.yaml
kubectl -n boiarnikov-a-hw3 apply -f redis-service.yaml
```
## Проверяем поды
```bash
kubectl -n boiarnikov-a-hw3 get po
```
```bash
NAME                                READY   STATUS    RESTARTS   AGE
redis-deployment-895f9d6d5-g4m6p    1/1     Running   0          21s
redis-deployment-895f9d6d5-gcz99    1/1     Running   0          21s
```
