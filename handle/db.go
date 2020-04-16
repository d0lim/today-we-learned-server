package handle

import (
	"errors"
	"strings"
)

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
	return searchGroups(len(Groups), func(i int) bool { return strings.Contains(Groups[i].Title, title) })
}

// GetGroup from DB
func GetGroup(id GroupID) (Group, error) {
	for i := 0; i < len(Groups); i++ {
		if Groups[i].ID == id {
			return Groups[i], nil
		}
	}
	return Group{}, errors.New("No such group with that id")
}
