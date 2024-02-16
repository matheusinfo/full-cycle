package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)

var startedAt = time.Now()

func main(){
	http.HandleFunc("/", Hello)
	http.HandleFunc("/family", LogFamily)
	http.HandleFunc("/secret", Secret)
	http.HandleFunc("/health", Health)
	http.ListenAndServe(":80", nil)
}

func Hello(w http.ResponseWriter, r *http.Request){
	name := os.Getenv("NAME")
	age := os.Getenv("AGE")
	fmt.Fprintf(w, "Hello i'm %s. I'm %s years old", name, age)
}

func LogFamily(w http.ResponseWriter, r *http.Request){
	data, err := ioutil.ReadFile("myfamily/family.txt")

	if err != nil {
		fmt.Fprintf(w, "Error reading file")
		return
	}

	fmt.Fprintf(w, "My family: %s", string(data))
}

func Secret(w http.ResponseWriter, r *http.Request){
	user := os.Getenv("USER")
	password := os.Getenv("PASSWORD")
	fmt.Fprintf(w, "User: %s, Password: %s", user, password)
}

func Health(w http.ResponseWriter, r *http.Request){
	duration := time.Since(startedAt)

	if duration.Seconds() < 10 || duration.Seconds() > 30 {
		w.WriteHeader(500)
		w.Write([]byte(fmt.Sprintf("Duration: %v", duration.Seconds())))
	} else {
		w.WriteHeader(200)
		w.Write([]byte("ok"))
	}
}