# RBAC
## Деплой
```bash
$ kubectl -n boiarnikov-a-hw5 apply -f pod-master-role.yaml
$ kubectl -n boiarnikov-a-hw5 create serviceaccount boiarnikov-a-hw5-sa
$ kubectl -n boiarnikov-a-hw5 apply -f pod-master-rb.yaml
```
## Проверка прав сервисного аккаунта
```bash
$ kubectl -n boiarnikov-a-hw5 run test --image=nginx --as=system:serviceaccount:boiarnikov-a-hw5:boiarnikov-a-hw5-sa
pod/test created
$ kubectl -n boiarnikov-a-hw5 get pods
NAME   READY   STATUS    RESTARTS   AGE
test   1/1     Running   0          13s

$ kubectl -n boiarnikov-a-hw5 delete pod test --as=system:serviceaccount:boiarnikov-a-hw5:boiarnikov-a-hw5-sa
pod "test" deleted
$ kubectl -n boiarnikov-a-hw5 get pods
No resources found in boiarnikov-a-hw5 namespace.
```
