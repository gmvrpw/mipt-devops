# Ansible #2
Роль `nginx` использует следующие настраиваемые переменные: 

| __ssl_keys_path: string                          | Путь до директории с ключами SSL                       |
|--------------------------------------------------|--------------------------------------------------------|
| `__ssl_dhparam_path: string`                     | Путь до директории dhparam                             |
| `__ssl_dhparam: string`                          | Значение dhparam для SSL                               |
| `nginx__servers_path`                            | Путь до директории с конфигурациями виртуальных хостов |
| `nginx__servers[n].name: string`                 | Название сервера                                       |
| `nginx__servers[n].port: number`                 | Прослушиваемый порт                                    |
| `nginx__servers[n].tls.enabled: boolean`         | Использовать ли TLS                                    |
| `nginx__servers[n].insecure_port: number`        | Незащищенный порт для ридеректа                        |
| `nginx__servers[n].crt: string`                  | Сертификат SSL                                         |
| `nginx__servers[n].key: string`                  | Ключ сертификата                                       |
| `nginx__servers[n].csr: string`                  | Trusted сертификат                                     |
| `nginx__servers[n].locations[pattern]: string[`] | Nginx опции для location <pattern>                     |
