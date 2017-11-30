/**
Arrow function does not have own this 
**/
function Person(){
	this.age = 0;

	this.growing = setInterval(()=>{
		console.log('Person growing '+this.age++);
		if(this.age > 10){
			console.log('Person is now matured.');
			clearInterval(this.growing);
		}
	}, 1000);
}


var p = new Person();
