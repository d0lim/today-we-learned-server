package db

import "github.com/imdigo/today-we-learned-server/handle"

// Group schema struct
type Group struct {
	ID          handle.GroupID
	Title       string
	Description string
	Member      []handle.AuthorID
	TWLs        []handle.TWLID
}

// Author schema struct
type Author struct {
	ID           handle.AuthorID
	Name         string
	ProfileImage string
	Groups       []handle.GroupID
}

// TWL schema struct
type TWL struct {
	ID       handle.TWLID
	GroupID  handle.GroupID
	Date     string
	Contents []handle.ContentID
}

// Content schema struct
type Content struct {
	ID         handle.ContentID
	TWLID      handle.TWLID
	AuthorID   handle.AuthorID
	CreatedAt  string
	ModifiedAt string
	Text       string
}

func init() {

}
