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
	TWLID graphql.ID
	ID    graphql.ID
	Text  string
}

var groups = []Group{
	Group{
		ID:    "0",
		Title: "Study",
		Member: []Author{
			authors[0],
			authors[1],
		},
	},
	Group{
		ID:    "1",
		Title: "Exercise",
		Member: []Author{
			authors[0],
			authors[2],
		},
	},
	Group{
		ID:    "2",
		Title: "Music",
		Member: []Author{
			authors[1],
			authors[2],
		},
	},
}

var authors = []Author{
	Author{
		ID:           "0",
		Name:         "DoLim",
		ProfileImage: "https://api.adorable.io/avatars/285/dolim",
	},
	Author{
		ID:           "1",
		Name:         "HM",
		ProfileImage: "https://api.adorable.io/avatars/285/dolim",
	},
	Author{
		ID:           "2",
		Name:         "Bazinga",
		ProfileImage: "https://api.adorable.io/avatars/285/dolim",
	},
}
var twls = []TWL{
	TWL{
		ID:         "0",
		GroupID:    "0",
		Date:       "2020-04-08",
		CreatedAt:  "2020-04-08",
		ModifiedAt: "2020-04-08",
		Author:     authors[0],
	},
}
var contents = []Content{
	Content{
		TWLID: "0",
		ID:    "0",
		Text:  "First content of twl",
	},
}

func init() {

}
