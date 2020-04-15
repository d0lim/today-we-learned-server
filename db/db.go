package db

import (
	"strings"

	"github.com/imdigo/today-we-learned-server/handle"
)

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

func searchGroups(length int, condition func(i int) bool) []Group {
	response := []Group{}
	for i := 0; i < length; i++ {
		if condition(i) {
			response = append(response, Groups[i])
		}
	}
	return response
}

// GetGroups from DB
func GetGroups(title string) []Group {
	groups := searchGroups(len(Groups), func(i int) bool { return strings.Contains(Groups[i].Title, title) })
	return groups
}
