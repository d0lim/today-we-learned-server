package main

import (
	"io/ioutil"
	"log"
	"net/http"

	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"github.com/imdigo/today-we-learned-server/utils"
)

const schemaPath string = "./handle/schema.graphql"

type query struct{}

func (*query) Hello() string { return "Hello, world!" }

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	dat, err := ioutil.ReadFile(schemaPath)
	check(err)
	s := string(dat)
	schema := graphql.MustParseSchema(s, &query{})
	http.Handle("/", utils.CorsMiddleware(&relay.Handler{Schema: schema}))

	log.Fatal(http.ListenAndServe(":4000", nil))
}
