var myObj = [
	[
		{
			name: 'rajib',
			age: 30,
		}
	],
	[
		{
			name: 'sohana',
			age: 26
		}
	],
	[
		{
			name: 'Arif',
			age: 31
		}
	],
	[
		{
			age: 21
		}
	]
];


for(let value of myObj){
	for(let index of value){
		if(index.name && (index.name.indexOf('a') >= 0)){
			console.log(index.name);
		}
	}
	
}