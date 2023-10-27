## How run this Dockerfile

```
# Build the Dockerfile DEV
$ docker build -t mapx/hello-express .

# Build the Dockerfile PROD
$ docker build -t mapx/hello-express . -f Dockerfile.prod
```