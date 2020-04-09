package handle

import "github.com/graph-gophers/graphql-go"

// GroupID of group
type GroupID graphql.ID

// AuthorID of Author
type AuthorID graphql.ID

// TWLID of TWL
type TWLID graphql.ID

// ContentID of content
type ContentID graphql.ID

// Group schema struct
type Group struct {
	ID          GroupID
	Title       string
	Description string
	Member      []AuthorID
}

// Author schema struct
type Author struct {
	ID           AuthorID
	Name         string
	ProfileImage string
	Groups       []GroupID
}

// TWL schema struct
type TWL struct {
	ID       TWLID
	GroupID  GroupID
	Date     string
	Contents []Content
}

// Content schema struct
type Content struct {
	ID         ContentID
	TWLID      TWLID
	CreatedAt  string
	ModifiedAt string
	AuthorID   AuthorID
	Text       string
}

func init() {

}
