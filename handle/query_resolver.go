package handle

// RootResolver struct
type RootResolver struct{}

// TWLs query resolver
func (*RootResolver) TWLs(args TWLsArgs) []*TWLResolver {
	return nil
}

// TWL query resolver
func (*RootResolver) TWL(args TWLArgs) TWLResolver {
	return TWLResolver{}
}

// Authors query resolver
func (*RootResolver) Authors(args AuthorsArgs) []*AuthorResolver {
	return nil
}

// Author query resolver
func (*RootResolver) Author(args AuthorArgs) AuthorResolver {
	return AuthorResolver{}
}

// Groups query resolver
func (*RootResolver) Groups(args GroupsArgs) []*GroupResolver {
	return nil
}

// Group query resolver
func (*RootResolver) Group(args GroupArgs) GroupResolver {
	return GroupResolver{}
}

// Contents query resolver
func (*RootResolver) Contents(args ContentsArgs) []*ContentResolver {
	return nil
}

// Content query resolver
func (*RootResolver) Content(args ContentArgs) ContentResolver {
	return ContentResolver{}
}
