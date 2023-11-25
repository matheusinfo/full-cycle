# **Consul**

> ## Oficial docs
https://www.consul.io/

> ## Commands

```
$ consul agent -dev
$ consul members
$ curl localhost:8500/v1/catalog/nodes
$ apk -U add bind-tools // install dig
$ dig @localhost -p 8600 | dig @localhost -p 8600 consul.node.consul
$ consul agent -server -bootstrap-expect=3 -node=consul01 -bind=172.20.0.3 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
$ consul join 172.20.0.4
$ consul agent -bind=172.20.0.6 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
$ consul reload
$ consul catalog
$ consul agent -bind=172.20.0.6 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.20.0.4
$ consul agent -config-dir=/etc/consul.d
$ consul keygen
```
