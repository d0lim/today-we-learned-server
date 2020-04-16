package handle

import "fmt"

func ExampleGetGroups() {
	res := GetGroups("Study")
	fmt.Println(res)
	// Output:
	// [{0 Study Group for Studying [0 1] []}]
}

func ExampleGetGroup() {
	res, err := GetGroup("1")
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
	// Output:
	// {1 Exercise Group for Exercise [1 2] []}
}

func ExampleGetAuthors() {
	res := GetAuthors("0")
	fmt.Println(res)
	// Output:
	// [{0 DoLim https://api.adorable.io/avatars/285/dolim [0 2]} {1 Collin https://api.adorable.io/avatars/285/collin [0 1]}]
}
