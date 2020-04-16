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
