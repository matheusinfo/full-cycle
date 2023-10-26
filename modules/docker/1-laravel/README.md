## How run this Dockerfile

```
# Build the Dockerfile
$ docker build -t mapx18/laravel:latest .

# To run on the default address 0.0.0.0
$ docker run --rm -d --name laravel -p 8000:8000 mapx18/laravel 

# To run on a different host/port
$ docker run --rm -d --name laravel -p 8000:8000 mapx18/laravel --host=0.0.0.0 --port=8001
```