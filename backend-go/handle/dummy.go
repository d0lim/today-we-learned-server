package handle

import "github.com/graph-gophers/graphql-go"

// Groups is dummy data of Group
var Groups = []Group{
	Group{
		ID:          "0",
		Title:       "Study",
		Description: "Group for Studying",
		Member:      []*graphql.ID{&zero, &one},
	},
	Group{
		ID:          "1",
		Title:       "Exercise",
		Description: "Group for Exercise",
		Member:      []*graphql.ID{&one, &two},
	},
	Group{
		ID:          "2",
		Title:       "Coffee",
		Description: "Group for making Coffee",
		Member:      []*graphql.ID{&zero, &two},
	},
}

var zero graphql.ID = "0"
var one graphql.ID = "1"
var two graphql.ID = "2"

// Authors is dummy data of Author
var Authors = []Author{
	Author{
		ID:           "0",
		Name:         "DoLim",
		ProfileImage: "https://api.adorable.io/avatars/285/dolim",
		Groups:       []*graphql.ID{&zero, &two},
	},
	Author{
		ID:           "1",
		Name:         "Collin",
		ProfileImage: "https://api.adorable.io/avatars/285/collin",
		Groups:       []*graphql.ID{&zero, &one},
	},
	Author{
		ID:           "2",
		Name:         "John",
		ProfileImage: "https://api.adorable.io/avatars/285/john",
		Groups:       []*graphql.ID{&one, &two},
	},
}

// TWLs is dummy data of TWL
var TWLs = []TWL{
	TWL{
		ID:      "0",
		GroupID: "0",
		Date:    "2020-04-07",
	},
	TWL{
		ID:      "1",
		GroupID: "1",
		Date:    "2020-04-07",
	},
	TWL{
		ID:      "2",
		GroupID: "0",
		Date:    "2020-04-08",
	},
	TWL{
		ID:      "3",
		GroupID: "1",
		Date:    "2020-04-08",
	},
	TWL{
		ID:      "4",
		GroupID: "0",
		Date:    "2020-04-09",
	},
	TWL{
		ID:      "5",
		GroupID: "1",
		Date:    "2020-04-09",
	},
	TWL{
		ID:      "6",
		GroupID: "2",
		Date:    "2020-04-09",
	},
}

// Contents is dummy data of Content
var Contents = []Content{
	// First
	Content{
		ID:         "0",
		TWLID:      "0",
		AuthorID:   "0",
		CreatedAt:  "2020-04-07",
		ModifiedAt: "2020-04-07",
		Text:       "First study of DoLim",
	},
	Content{
		ID:         "1",
		TWLID:      "0",
		AuthorID:   "1",
		CreatedAt:  "2020-04-07",
		ModifiedAt: "2020-04-07",
		Text:       "First study of Collin",
	},
	Content{
		ID:         "2",
		TWLID:      "1",
		AuthorID:   "1",
		CreatedAt:  "2020-04-07",
		ModifiedAt: "2020-04-07",
		Text:       "First exercise of Collin",
	},
	Content{
		ID:         "3",
		TWLID:      "1",
		AuthorID:   "2",
		CreatedAt:  "2020-04-07",
		ModifiedAt: "2020-04-07",
		Text:       "First exercise of John",
	},
	// Second
	Content{
		ID:         "4",
		TWLID:      "0",
		AuthorID:   "0",
		CreatedAt:  "2020-04-08",
		ModifiedAt: "2020-04-08",
		Text:       "Second study of DoLim",
	},
	Content{
		ID:         "5",
		TWLID:      "0",
		AuthorID:   "1",
		CreatedAt:  "2020-04-08",
		ModifiedAt: "2020-04-08",
		Text:       "Second study of Collin",
	},
	Content{
		ID:         "6",
		TWLID:      "1",
		AuthorID:   "1",
		CreatedAt:  "2020-04-08",
		ModifiedAt: "2020-04-08",
		Text:       "Second exercise of Collin",
	},
	Content{
		ID:         "7",
		TWLID:      "1",
		AuthorID:   "2",
		CreatedAt:  "2020-04-08",
		ModifiedAt: "2020-04-08",
		Text:       "Second exercise of John",
	},
	// Third
	Content{
		ID:         "8",
		TWLID:      "0",
		AuthorID:   "0",
		CreatedAt:  "2020-04-09",
		ModifiedAt: "2020-04-09",
		Text:       "Third study of DoLim",
	},
	Content{
		ID:         "9",
		TWLID:      "0",
		AuthorID:   "1",
		CreatedAt:  "2020-04-09",
		ModifiedAt: "2020-04-09",
		Text:       "Third study of Collin",
	},
	Content{
		ID:         "10",
		TWLID:      "1",
		AuthorID:   "1",
		CreatedAt:  "2020-04-09",
		ModifiedAt: "2020-04-09",
		Text:       "Third exercise of Collin",
	},
	Content{
		ID:         "11",
		TWLID:      "1",
		AuthorID:   "2",
		CreatedAt:  "2020-04-09",
		ModifiedAt: "2020-04-09",
		Text:       "Third exercise of John",
	},
	Content{
		ID:         "12",
		TWLID:      "2",
		AuthorID:   "0",
		CreatedAt:  "2020-04-09",
		ModifiedAt: "2020-04-09",
		Text:       "First Coffee of Dolim",
	},
	Content{
		ID:         "13",
		TWLID:      "2",
		AuthorID:   "2",
		CreatedAt:  "2020-04-09",
		ModifiedAt: "2020-04-09",
		Text:       "First Coffee of John",
	},
}
