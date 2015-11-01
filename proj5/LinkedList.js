/* Authors: Tiffany Lam and Jenny Lin
 * CS333 Project 5
 * LinkedList
 * Implementing LinkedList in Javascript
 */

//Node Object
function Node (item){
    this.data = item; //Data the current node holds
    this.next = null; //Points to the next Node

    //Returns the content of the node
    this.getThing = function(){ return this.data; };

    //Sets the next node that this node points to 
    this.setNext = function(n){ this.next = n; };

    //Returns the next node
    this.getNext = function(){ return this.next; };
}

//LinkedList Object
function LinkedList (){
    this.head = null; //first node in the data structure
    this.size = 0; //size of the linked list

    //Adds node to front of list
    this.push = function( item ){
	var n = new Node(item);
	n.setNext(this.head);
	this.head = n;
	this.size++;
    };

    //Removes the node at the front of the list
    this.pop = function(){
	var temp = this.head;
	this.head = this.head.getNext();
	this.size--;
	return temp.getThing();
    };

    //Add a node to end of list
    this.append = function(item){
	var n = new Node(item);
	//if the list is empty
	if(this.head == null){
	    n.setNext(this.head);
	    this.head = n;
	}
	else{
	    var temp = this.head;
	    //loop through until we hit the last node
	    while(temp.getNext() != null){
		temp = temp.getNext();
	    }
	    temp.setNext(n);
	}
	this.size++;
    };

    //Remove the first node which matches the given comparison function
    this.remove = function(target, compFunc){
	var temp = this.head;
	var tempPrev = null;

	while( temp != null ){
	    if(compFunc(target, temp.getThing()) == 1){
		
		//removing at head of list
		if(tempPrev == null){
		    this.head = this.head.getNext();
		    this.size--;
		    return temp.getThing();
		}
		else{
		    tempPrev.setNext(temp.getNext());
		    this.size--;
		    return temp.getThing();
		}
	    }
	    tempPrev = temp;
	    temp = temp.getNext();
	}
	return null;
    };

    //Returns the size of the list
    this.getSize = function(){ return this.size; };

    //Empties the list
    this.clear = function(){
	this.head = null;
	this.size = 0;
    };

    //Traverses list and applies function to data in all nodes    
    this.map = function(func){
	var temp = this.head;
	while( temp != null ){
	    func(temp);
	    temp = temp.getNext();
	}
    };
}

//function that prints an integer
function printInt(node){
    print( "value: " + node.getThing() );
}

//function that squares an integer
function squareInt(node){
    node.data = node.getThing() * node.getThing();
}

//function that compares two integers and returns 1 if they are equal
function compInt( i, j) {
    return (i==j);
}


/* Testing our linked list */
/* Modified from Bruce's C test */

var l = new LinkedList(); //our linked list
var i = 0; //used for indexing
//push data on the list
for(i=0; i<20; i+=2){
    l.push(i);
}

// printing the list and testing map
print("After initialization");
l.map(printInt);

l.map(squareInt);
print("\nAfter squaring");
l.map(printInt);

// testing removing data
var target = 16;
var a = l.remove(target, compInt);
if(a != null)
    print("\nremoved: " + a);
else
    print("\nNo instance of " + target);

target = 11;
a = l.remove(target, compInt);
if(a != null)
    print("\nremoved: " + a);
else
    print("\nNo instance of " + target);

print("\nAfter removals");
l.map(printInt);

// testing appending data
l.append(target);

print("\nAfter append");
l.map(printInt);

// test clearing
l.clear();

print("\nAfter clear");
l.map(printInt);

// rebuild and test append and pop
for(i=0;i<5;i++) {
    a = i;
    l.append(a);
}

print("\nAfter appending");
l.map(printInt);

a = l.pop();
print("\npopped: " + a);

a = l.pop();
print("popped: " + a);

print("\nAfter popping");
l.map(printInt);

print("\nList size: " + l.getSize() );

/* our linked list storing strings */
var l2 = new LinkedList(); 
var i = 0; 
var letters = ['a', 'b', 'c', 'd'];
//push data on the list
for(i=0; i<letters.length; i++){
    l2.push(letters[i]);
}

// printing the list and testing map
print("After initialization");
l2.map(printInt);
