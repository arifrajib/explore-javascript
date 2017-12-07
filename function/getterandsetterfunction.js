/**
The get and set syntax binds an object property to a function that will be called when that property or there is an attempt to set that property is looked up.
**/

var getterAndSetter = {
	value: 10,
	get getValue(){
		console.log('Getting the value: ', this.value);
		return this.value;
	},
	set setValue(value){
		this.value = value;
		console.log('Setting the value: ', this.value);
	}
};

getterAndSetter.setValue = 20;

getterAndSetter.getValue;



