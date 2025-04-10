# Kustomize

## Деплой
### Development
```bash
$ kubectl -n boiarnikov-a-hw7 apply -k kustomize/overlays/dev
```
### Production
```bash
$ kubectl -n boiarnikov-a-hw7 apply -k kustomize/overlays/prod
```

## Проверка сертификата, реплик и ответа
### Development
```bash
$ kubectl -n boiarnikov-a-hw7 get po
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-5c58c8cdc9-bsc44   1/1     Running   0          24s
```

```bash
$ openssl s_client -connect dev.boiarnikov-a-hw7.mfti.devops-teta.ru:443 -showcerts

CONNECTED(00000003)
depth=2 C=US, O=Internet Security Research Group, CN=ISRG Root X1
verify return:1
depth=1 C=US, O=Let's Encrypt, CN=R10
verify return:1
depth=0 CN=boiarnikov-a-hw6.mfti.devops-teta.ru
verify return:1
```

```bash
$ curl -i "https://dev.boiarnikov-a-hw7.mfti.devops-teta.ru/who"
HTTP/2 200 
date: Thu, 10 Apr 2025 13:20:25 GMT
content-type: text/plain
content-length: 8
strict-transport-security: max-age=31536000; includeSubDomains

cool dev guy%
```

### Production
```bash
$ kubectl -n boiarnikov-a-hw7 get po
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-6b77fbf949-4p766   1/1     Running   0          4s
nginx-deployment-6b77fbf949-gcfd7   1/1     Running   0          8s
nginx-deployment-6b77fbf949-sxwjf   1/1     Running   0          6s
```

```bash
$ openssl s_client -connect boiarnikov-a-hw7.mfti.devops-teta.ru:443 -showcerts

CONNECTED(00000003)
depth=2 C=US, O=Internet Security Research Group, CN=ISRG Root X1
verify return:1
depth=1 C=US, O=Let's Encrypt, CN=R10
verify return:1
depth=0 CN=boiarnikov-a-hw6.mfti.devops-teta.ru
verify return:1
```

```bash
$ curl -i "https://boiarnikov-a-hw7.mfti.devops-teta.ru/who"
HTTP/2 200 
date: Thu, 10 Apr 2025 13:27:32 GMT
content-type: text/plain
content-length: 8
strict-transport-security: max-age=31536000; includeSubDomains

cool prod guy%
```

# Helm

## Деплой
```bash
$ helm install -n boiarnikov-a-hw7 helm 
```

## Проверка сертификата, реплик и ответа
```bash
$ kubectl -n boiarnikov-a-hw7 get po
NAME                                    READY   STATUS    RESTARTS   AGE
helm-1744291590-httpd-bcb7cfb95-298vj   1/1     Running   0          10s
helm-1744291590-httpd-bcb7cfb95-qncm6   1/1     Running   0          10s
```

```bash
$ openssl s_client -connect boiarnikov-a-hw7.mfti.devops-teta.ru:443 -showcerts

CONNECTED(00000003)
depth=2 C=US, O=Internet Security Research Group, CN=ISRG Root X1
verify return:1
depth=1 C=US, O=Let's Encrypt, CN=R10
verify return:1
depth=0 CN=boiarnikov-a-hw6.mfti.devops-teta.ru
verify return:1
```

```bash
$ curl -i "https://boiarnikov-a-hw7.mfti.devops-teta.ru"
HTTP/2 200 
date: Thu, 10 Apr 2025 13:30:03 GMT
content-type: text/html
content-length: 45
last-modified: Mon, 11 Jun 2007 18:53:14 GMT
etag: "2d-432a5e4a73a80"
accept-ranges: bytes
strict-transport-security: max-age=31536000; includeSubDomains

<html><body><h1>It works!</h1></body></html>
```
