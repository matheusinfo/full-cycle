## Stage 1
FROM golang:1.21.3 AS builder

WORKDIR /usr/src

RUN echo 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Full Cycle Rocks!!")\n}' >  index.go \
    && go build -o bin/index ./index.go

## Stage 2
FROM scratch

COPY --from=builder /usr/src/bin ./

CMD ["./index"]