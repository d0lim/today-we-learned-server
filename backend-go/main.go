package main

import (
	"io/ioutil"
	"log"
	"net/http"

	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"github.com/imdigo/today-we-learned-server/backend-go/handle"
	"github.com/imdigo/today-we-learned-server/backend-go/utils"
)

const schemaPath string = "./handle/schema.graphql"

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	dat, err := ioutil.ReadFile(schemaPath)
	check(err)
	s := string(dat)
	schema := graphql.MustParseSchema(s, &handle.RootResolver{})
	http.Handle("/", utils.CorsMiddleware(&relay.Handler{Schema: schema}))

	log.Fatal(http.ListenAndServe(":4000", nil))
}
