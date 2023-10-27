## How run this Dockerfile

```
# Build the Dockerfile
$ docker build -t mapx/nginx-reverse-proxy .

# Create Network
$ docker network create laranet

# Run laravel image (3-laravel-multi-stage-building)
$ docker run -d --network laranet --name laravel mapx/laravel-multi-stage-build

# Run nginx image
$ docker run -d --network laranet --name nginx -p 8080:80 mapx/nginx-reverse-proxy
```