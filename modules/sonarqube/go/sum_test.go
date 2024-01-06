package main

import "testing"

func TestSum(t *testing.T){
	result := sum(2, 2)
	
	if result != 4 {
		t.Error("Expected 2 + 2 to equal 4")
	}
}

func TestSub(t *testing.T){
	result := sub(2, 2)
	
	if result != 0 {
		t.Error("Expected 2 - 2 to equal 0")
	}
}

func TestMul(t *testing.T){
	result := mul(2, 2)
	
	if result != 4 {
		t.Error("Expected 2 * 2 to equal 4")
	}
}

func TestDiv(t *testing.T){
	result := div(2, 2)
	
	if result != 1 {
		t.Error("Expected 2 / 2 to equal 1")
	}
}
