# HPA

## Деплой
```bash
$ kubectl -n boiarnikov-a-hw9 apply -f cert.yaml
$ kubectl -n boiarnikov-a-hw9 apply -f ingress.yaml
$ kubectl -n boiarnikov-a-hw9 apply -f nginx-config.yaml
$ kubectl -n boiarnikov-a-hw9 apply -f nginx-service.yaml
$ kubectl -n boiarnikov-a-hw9 apply -f nginx-deployment.yaml
$ kubectl -n boiarnikov-a-hw9 apply -f nginx-hpa.yaml
```

## Нагрузка
Нагружаем сервис
```bash
$ kubectl -n boiarnikov-a-hw9 run -it --rm load-generator2 --image=busybox -- \
    /bin/sh -c "while true; do wget -q -O- http://nginx-service.boiarnikov-a-hw9.svc.cluster.local/who; done"
cool guycool guycool guycool guycool guycool guycool guycool guycool guycool guycool guycool guycool guycool guycool guy...
```

Смотрим, как отрабатывает HPA:
```bash
$ kubectl -n boiarnikov-a-hw9 get hpa
NAME        REFERENCE                     TARGETS        MINPODS   MAXPODS   REPLICAS   AGE
nginx-hpa   Deployment/nginx-deployment   cpu: 0%/30%    2         10        2          19m
nginx-hpa   Deployment/nginx-deployment   cpu: 17%/30%   2         10        2          20m
nginx-hpa   Deployment/nginx-deployment   cpu: 45%/30%   2         10        2          20m
nginx-hpa   Deployment/nginx-deployment   cpu: 43%/30%   2         10        3          20m
nginx-hpa   Deployment/nginx-deployment   cpu: 31%/30%   2         10        4          21m
nginx-hpa   Deployment/nginx-deployment   cpu: 27%/30%   2         10        4          21m
nginx-hpa   Deployment/nginx-deployment   cpu: 24%/30%   2         10        4          24m
```

# Affinity
1. Создаем лейбл:
```bash
$ kubectl -n boiarnikov-a-hw9 label nodes kube-minion-01 super=puper
```

2. Обновляем конфигурацию:
```bash
$ kubectl -n boiarnikov-a-hw9 apply -f nginx-deployment.yaml
```

3. Проверяем распределение по нодам:
```bash
$ kubectl get pods -n boiarnikov-a-hw9 -o wide
NAME                               READY   STATUS    RESTARTS   AGE    IP            NODE             NOMINATED NODE   READINESS GATES
nginx-deployment-56fd46577-8j98h   1/1     Running   0          5m4s   ***********   kube-minion-01   <none>           <none>
nginx-deployment-56fd46577-v8djj   1/1     Running   0          5m2s   ***********   kube-minion-01   <none>           <none>
```

4. Все поды расположились на `kube-minion-01` - единственной ноде, где `super=puper`. Мы тоже супер-пупер!

