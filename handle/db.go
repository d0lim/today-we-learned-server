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
	TWLs        []TWLID
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
	Contents []ContentID
}

// Content schema struct
type Content struct {
	ID         ContentID
	TWLID      TWLID
	AuthorID   AuthorID
	CreatedAt  string
	ModifiedAt string
	Text       string
}

func init() {

}
