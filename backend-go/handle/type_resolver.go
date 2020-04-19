package handle

import "github.com/graph-gophers/graphql-go"

// AuthorResolver is resolver of Author
type AuthorResolver struct {
	author *Author
}

// ID of Author
func (r AuthorResolver) ID() graphql.ID {
	return r.author.ID
}

// Name of Author
func (r AuthorResolver) Name() string {
	return r.author.Name
}

// ProfileImage of Author
func (r AuthorResolver) ProfileImage() *string {
	return &r.author.ProfileImage
}

// Groups of Author
func (r AuthorResolver) Groups() *[]*graphql.ID {
	return &r.author.Groups
}

// TWLResolver is resolver of TWL
type TWLResolver struct {
	twl *TWL
}

// ID of TWL
func (r TWLResolver) ID() graphql.ID {
	return r.twl.ID
}

// GroupID of TWL
func (r TWLResolver) GroupID() graphql.ID {
	return r.twl.GroupID
}

// Date of TWL
func (r TWLResolver) Date() string {
	return r.twl.Date
}

// Contents of TWL
func (r TWLResolver) Contents() *[]*graphql.ID {
	return &r.twl.Contents
}

// GroupResolver is resolver of Group
type GroupResolver struct {
	group *Group
}

// ID of Group
func (r *GroupResolver) ID() graphql.ID {
	return r.group.ID
}

// Title of Group
func (r *GroupResolver) Title() string {
	return r.group.Title
}

// Description of Group
func (r *GroupResolver) Description() string {
	return r.group.Description
}

// Member of Group
func (r *GroupResolver) Member() *[]*graphql.ID {
	return &r.group.Member
}

// TWLs of Group
func (r *GroupResolver) TWLs() *[]*graphql.ID {
	return &r.group.TWLs
}

// ContentResolver is resolver of Content
type ContentResolver struct {
	content *Content
}

// ID of Content
func (r *ContentResolver) ID() graphql.ID {
	return r.content.ID
}

// TWLID of Content
func (r *ContentResolver) TWLID() graphql.ID {
	return r.content.TWLID
}

// AuthorID of Content
func (r *ContentResolver) AuthorID() graphql.ID {
	return r.content.AuthorID
}

// CreatedAt of Content
func (r *ContentResolver) CreatedAt() string {
	return r.content.CreatedAt
}

// ModifiedAt of Content
func (r *ContentResolver) ModifiedAt() string {
	return r.content.ModifiedAt
}

// Text of Content
func (r *ContentResolver) Text() string {
	return r.content.Text
}

// // GroupID of group
// type GroupID graphql.ID

// // AuthorID of Author
// type AuthorID graphql.ID

// // TWLID of TWL
// type TWLID graphql.ID

// // ContentID of content
// type ContentID graphql.ID

// // Group schema struct
// type Group struct {
// 	ID          GroupID
// 	Title       string
// 	Description string
// 	Member      []*Author
// 	TWLs        []*TWL
// }

// // Author schema struct
// type Author struct {
// 	ID           AuthorID
// 	Name         string
// 	ProfileImage string
// 	Groups       []*Group
// }

// // TWL schema struct
// type TWL struct {
// 	ID       TWLID
// 	GroupID  GroupID
// 	Date     string
// 	Contents []*Content
// }

// // Content schema struct
// type Content struct {
// 	ID         ContentID
// 	TWLID      TWLID
// 	AuthorID   AuthorID
// 	CreatedAt  string
// 	ModifiedAt string
// 	Text       string
// }
