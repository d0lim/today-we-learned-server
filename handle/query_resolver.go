package handle

// RootResolver struct
type RootResolver struct{}

// TWLs query resolver
func (*RootResolver) TWLs(args TWLsArgs) []*TWLResolver {
	twls := GetTWLs(args.groupID)
	twlResolvers := make([]*TWLResolver, 0)
	for _, t := range twls {
		twlResolvers = append(twlResolvers, &TWLResolver{&t})
	}
	return twlResolvers
}

// TWL query resolver
func (*RootResolver) TWL(args TWLArgs) TWLResolver {
	twl, err := GetTWL(args.twlID)
	if err != nil {
		panic(err)
	}
	return TWLResolver{&twl}
}

// Authors query resolver
func (*RootResolver) Authors(args AuthorsArgs) []*AuthorResolver {
	authors := GetAuthors(args.groupID)
	authorResolvers := make([]*AuthorResolver, 0)
	for _, a := range authors {
		authorResolvers = append(authorResolvers, &AuthorResolver{&a})
	}
	return authorResolvers
}

// Author query resolver
func (*RootResolver) Author(args AuthorArgs) AuthorResolver {
	author, err := GetAuthor(args.authorID)
	if err != nil {
		panic(err)
	}
	return AuthorResolver{&author}
}

// Groups query resolver
func (*RootResolver) Groups(args GroupsArgs) []*GroupResolver {
	groups := GetGroups(args.title)
	groupResolvers := make([]*GroupResolver, 0)
	for _, g := range groups {
		groupResolvers = append(groupResolvers, &GroupResolver{&g})
	}
	return groupResolvers
}

// Group query resolver
func (*RootResolver) Group(args GroupArgs) GroupResolver {
	group, err := GetGroup(args.groupID)
	if err != nil {
		panic(err)
	}
	return GroupResolver{&group}
}

// Contents query resolver
func (*RootResolver) Contents(args ContentsArgs) []*ContentResolver {
	contents := GetContents(args.twlID)
	contentResolvers := make([]*ContentResolver, 0)
	for _, c := range contents {
		contentResolvers = append(contentResolvers, &ContentResolver{&c})
	}
	return contentResolvers
}

// Content query resolver
func (*RootResolver) Content(args ContentArgs) ContentResolver {
	content, err := GetContent(args.contentID)
	if err != nil {
		panic(err)
	}
	return ContentResolver{&content}
}
