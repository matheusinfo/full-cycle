package main

import "testing"

func TestSum(t *testing.T){
	result := sum(2, 2)
	
	if result != 4 {
		t.Error("Expected 2 + 2 to equal 4")
	}
}