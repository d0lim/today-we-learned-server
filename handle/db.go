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

func searchTWLs(length int, condition func(i int) bool) []TWL {
	response := []TWL{}
	for i := 0; i < length; i++ {
		if condition(i) {
			response = append(response, TWLs[i])
		}
	}
	return response
}

// func searchAuthors(length int, condition func(i int) bool) []Author {
// 	response := []Author{}
// 	for i := 0; i < length; i++ {
// 		if condition(i) {
// 			response = append(response, Authors[i])
// 		}
// 	}
// 	return response
// }

func searchContents(length int, condition func(i int) bool) []Content {
	response := []Content{}
	for i := 0; i < length; i++ {
		if condition(i) {
			response = append(response, Contents[i])
		}
	}
	return response
}

// GetGroups from DB
func GetGroups(title string) []Group {
	return searchGroups(len(Groups), func(i int) bool {
		return strings.Contains(strings.ToLower(Groups[i].Title), strings.ToLower(title))
	})
}

// GetGroup from DB
func GetGroup(groupID GroupID) (Group, error) {
	for i := 0; i < len(Groups); i++ {
		if Groups[i].ID == groupID {
			return Groups[i], nil
		}
	}
	return Group{}, errors.New("No such group with that id")
}

// GetTWLs from DB
func GetTWLs(groupID GroupID) []TWL {
	return searchTWLs(len(TWLs), func(i int) bool { return groupID == TWLs[i].GroupID })
}

// GetTWL from DB
func GetTWL(twlID TWLID) (TWL, error) {
	for i := 0; i < len(TWLs); i++ {
		if TWLs[i].ID == twlID {
			return TWLs[i], nil
		}
	}
	return TWL{}, errors.New("No such TWL with that id")
}

// GetAuthors from DB
func GetAuthors(groupID GroupID) []Author {
	g, err := GetGroup(groupID)
	if err != nil {
		panic(errors.New(err.Error() + " in GetAuthors"))
	}
	a := []Author{}
	for i := 0; i < len(g.Member); i++ {
		aID := g.Member[i]
		for j := 0; j < len(Authors); j++ {
			if aID == Authors[j].ID {
				a = append(a, Authors[j])
			}
		}

	}
	return a
}

// GetAuthor from DB
func GetAuthor(authorID AuthorID) (Author, error) {
	for i := 0; i < len(Authors); i++ {
		if Authors[i].ID == authorID {
			return Authors[i], nil
		}
	}
	return Author{}, errors.New("No such Author with that id")
}

// GetContents from DB
func GetContents(twlID TWLID) []Content {
	return searchContents(len(Contents), func(i int) bool { return twlID == Contents[i].TWLID })
}

// GetContent from DB
func GetContent(contentID ContentID) (Content, error) {
	for i := 0; i < len(Contents); i++ {
		if Contents[i].ID == contentID {
			return Contents[i], nil
		}
	}
	return Content{}, errors.New("No such Content with that id")
}
