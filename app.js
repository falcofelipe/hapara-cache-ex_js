let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log('Get 1: %i', cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log('Get 2: %i', cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log('Get 1: %i', cache.get(1)); // returns -1 (not found)
console.log('Get 3: %i', cache.get(3)); // returns 3
console.log('Get 4: %i', cache.get(4)); // returns 4
console.log('Delete 3: %i', cache.delete(3)); // returns 3
console.log('Get 3: %i', cache.get(3)); // returns -1 (not found)

/* Extra Tests */
/*
cache.put(1, 1);
cache.put(2, 4);
cache.put(3, 6);
console.log('Get 2: %i', cache.get(2));
console.log('Get 1: %i', cache.get(1));
cache.put(2, 3);
cache.put(4, 7);
console.log('Get 2: %i', cache.get(2));
console.log('Get 3: %i', cache.get(3));
console.log('Get 4: %i', cache.get(4));
console.log('Delete 2: %i', cache.delete(2));
cache.put(5, 1);
cache.put(6, 2);
console.log('Get 5: %i', cache.get(5));
console.log('Get 4: %i', cache.get(4));
*/
