package handle

import "github.com/graph-gophers/graphql-go"

// TWLsArgs type
type TWLsArgs struct {
	GroupID graphql.ID
}

// TWLArgs type
type TWLArgs struct {
	TwlID graphql.ID
}

// AuthorsArgs type
type AuthorsArgs struct {
	GroupID graphql.ID
}

// AuthorArgs type
type AuthorArgs struct {
	AuthorID graphql.ID
}

// GroupsArgs type
type GroupsArgs struct {
	Title *string
}

// GroupArgs type
type GroupArgs struct {
	GroupID graphql.ID
}

// ContentsArgs type
type ContentsArgs struct {
	TwlID graphql.ID
}

// ContentArgs type
type ContentArgs struct {
	ContentID graphql.ID
}
