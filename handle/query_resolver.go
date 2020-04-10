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
func (*RootResolver) Authors() {

}
