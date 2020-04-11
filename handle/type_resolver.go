package handle

import "github.com/graph-gophers/graphql-go"

// TWLResolver is resolver of TWL
type TWLResolver struct {
	twl *TWL
}

// AuthorResolver is resolver of Author
type AuthorResolver struct {
	author *Author
}

// GroupResolver is resolver of Group
type GroupResolver struct {
	group *Group
}

// ContentResolver is resolver of Content
type ContentResolver struct {
	content *Content
}

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
	Member      []Author
	TWLs        []TWL
}

// Author schema struct
type Author struct {
	ID           AuthorID
	Name         string
	ProfileImage string
	Groups       []Group
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
	AuthorID   AuthorID
	CreatedAt  string
	ModifiedAt string
	Text       string
}
