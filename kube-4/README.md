# Ingress 

## Деплой
```bash
$ kubectl -n boiarnikov-a-hw5 apply -f cert.yaml
$ kubectl -n boiarnikov-a-hw5 apply -f ingress.yaml
$ kubectl -n boiarnikov-a-hw5 apply -f nginx-config.yaml
$ kubectl -n boiarnikov-a-hw5 apply -f nginx-service.yaml
$ kubectl -n boiarnikov-a-hw5 apply -f nginx-deployment.yaml
```

## Проверка сертификата
```bash
$ openssl s_client -connect boiarnikov-a-hw6.mfti.devops-teta.ru:443 -showcerts

CONNECTED(00000003)
depth=2 C=US, O=Internet Security Research Group, CN=ISRG Root X1
verify return:1
depth=1 C=US, O=Let's Encrypt, CN=R10
verify return:1
depth=0 CN=boiarnikov-a-hw6.mfti.devops-teta.ru
verify return:1
```

## Проверка ответа 
```bash
$ curl -i "https://boiarnikov-a-hw6.mfti.devops-teta.ru/who"
HTTP/2 200 
date: Thu, 03 Apr 2025 17:45:45 GMT
content-type: text/plain
content-length: 8
strict-transport-security: max-age=31536000; includeSubDomains

cool guy%
```
