package handle

// TWLsArgs type
type TWLsArgs struct {
	groupID GroupID
}

// TWLArgs type
type TWLArgs struct {
	twlID TWLID
}

// AuthorsArgs type
type AuthorsArgs struct {
	groupID GroupID
}

// AuthorArgs type
type AuthorArgs struct {
	authorID AuthorID
}

// GroupsArgs type
type GroupsArgs struct {
	title string
}

// GroupArgs type
type GroupArgs struct {
	groupID GroupID
}

// ContentsArgs type
type ContentsArgs struct {
	twlID TWLID
}

// ContentArgs type
type ContentArgs struct {
	contentID ContentID
}
