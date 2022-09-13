// // Map 
// // Map e key hisebe j kono typer data deya jay 
// map.set('name','Faisal');
// map.set('age', 26);

// console.log(map); // Map(2) {'name' => 'Faisal', 'age' => 26}

// console.log(map.get('name')); // Faisal


// console.log(map.has("name")); // true
// console.log(map.size); // 2
// map.clear();
// console.log(map);

const map = new Map();
map.set(1,20);
map.set([1,2,3], false);
map.set(()=> { },[2,4,5]);
console.log(map); 
// Map(3) {1 => 20, Array(3) => false, ƒ => Array(3)}
