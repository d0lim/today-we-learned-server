package main

import (
	"log"
	"net/http"

	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
)

type query struct{}

func (*query) Hello() string { return "Hello, world!" }

// CorsMiddleware is middleware to solve problem with apollo-boost
func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-apollo-tracing")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST,OPTIONS")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	s := `
			type Query {
					hello: String!
			}
        `
	schema := graphql.MustParseSchema(s, &query{})
	http.Handle("/", CorsMiddleware(&relay.Handler{Schema: schema}))

	log.Fatal(http.ListenAndServe(":4000", nil))
}
