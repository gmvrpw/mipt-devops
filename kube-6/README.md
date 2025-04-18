# Дебаг в кубере
1. Проверяем доступность сервиса (может все и так уже работает)
```bash
$ curl -i https://boiarnikov-a-hw8.mfti.devops-teta.ru/
HTTP/2 503 
date: Fri, 18 Apr 2025 09:02:45 GMT
content-type: text/html
content-length: 190
strict-transport-security: max-age=31536000; includeSubDomains

<html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
```
Сервис недоступен, отвечает не наш nginx - проверим порты  

2. Проверяем порты сервиса
```bash
$ kubectl -n boiarnikov-a-hw8 get service/web-service -o yaml
...
ports:
  - port: 80
    protocol: TCP
    targetPort: 80
...
```
Ингресс должен передавать запросы на 80 порт, именно там живет наш сервис - проверим так ли это

3. Проверяем порты ingress бэкендов
```bash
$ kubectl -n boiarnikov-a-hw8 get ingress/web-ingress -o yaml
...
- backend:
    service:
      name: web-service
      port:
        number: 90
...
```
А вот и ошибка, ингресс передает запросы на `90`, а не `80` порт - меняем

4. Проверяем доступность сервиса
``` bash
$ curl -i https://boiarnikov-a-hw8.mfti.devops-teta.ru
HTTP/2 200 
date: Fri, 18 Apr 2025 09:22:09 GMT
content-type: text/html
content-length: 615
last-modified: Wed, 05 Feb 2025 11:06:32 GMT
etag: "67a34638-267"
accept-ranges: bytes
strict-transport-security: max-age=31536000; includeSubDomains

<!DOCTYPE html>
...
```
Сервис доступен, отвечает `HTTP/2 200` 

5. Проверяем серты
```bash
$ openssl s_client -connect boiarnikov-a-hw8.mfti.devops-teta.ru:443 -showcerts 
CONNECTED(00000003)
depth=2 C=US, O=Internet Security Research Group, CN=ISRG Root X1
verify return:1
depth=1 C=US, O=Let's Encrypt, CN=R11
verify return:1
depth=0 CN=boiarnikov-a-hw8.mfti.devops-teta.ru
verify return:1
```
Серты на месте, а мы велеколепны!
