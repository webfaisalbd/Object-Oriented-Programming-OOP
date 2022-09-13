// // Map 
// // Map e key hisebe j kono typer data deya jay 
const map = new Map();
map.set('name','Faisal');
map.set('age', 26);

console.log(map); // Map(2) {'name' => 'Faisal', 'age' => 26}

console.log(map.get('name')); // Faisal


console.log(map.has("name")); // true
console.log(map.size); // 2
map.clear();
console.log(map);
