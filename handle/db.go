package handle

import "github.com/graph-gophers/graphql-go"

// Group schema struct
type Group struct {
	ID     graphql.ID
	Title  string
	Member []Author
}

// Author schema struct
type Author struct {
	ID           graphql.ID
	Name         string
	ProfileImage string
	Groups       []Group
}

// TWL schema struct
type TWL struct {
	ID         graphql.ID
	GroupID    graphql.ID
	Date       string
	CreatedAt  string
	ModifiedAt string
	Author     Author
	Contents   []Content
}

// Content schema struct
type Content struct {
	TWLID  graphql.ID
	ID     graphql.ID
	Author Author
	Text   string
}

var groups = []Group{
	Group{
		ID:    "0",
		Title: "Study",
	},
}
var authors []Author = make([]Author, 0)
var twls []TWL = make([]TWL, 0)
var contents []Content = make([]Content, 0)

func init() {

}
