class LRUCache {
	/* CONSTRUCTOR */
	constructor(capacity) {
		if (capacity <= 0 || typeof capacity != 'number') {
			console.log(
				'Please make sure to pass an integer >= 0 to construct a LRUCache object.'
			);
			return;
		}

		this.capacity = capacity;
		this.lastUsedKeys = [];
		this.activeCache = Object.create(null);

		console.log(
			'New LRUCache object being created with capacity %i',
			capacity
		);
	}

	/* MAIN METHODS */
	put(key, value) {
		this.#AssertConditions(key, value);

		console.log('PUT: key %i value %i', key, value);
		let lastKeyRemoved = this.#AddToRecentKeys(key);

		if (
			!this.activeCache[key] &&
			Object.keys(this.activeCache).length >= this.capacity
		) {
			delete this.activeCache[lastKeyRemoved];
			console.log('Removed key %i from dictionary', lastKeyRemoved);
		}

		this.activeCache[key] = value;
		console.log('Active Cache:', this.activeCache);
		return;
	}

	get(key) {
		console.log('GET: key %i', key);
		if (!this.activeCache[key]) return -1;

		this.#AddToRecentKeys(key);

		return this.activeCache[key];
	}
	delete(key) {
		console.log('DELETE: key %i', key);
		if (!this.activeCache[key]) return -1;

		let deletedValue = this.activeCache[key];
		delete this.activeCache[key];
		this.#DeleteFromRecentKeys(key);

		return deletedValue;
	}

	/* SUPPORT METHODS */
	#AssertConditions = (key, value) => {
		if (
			key < 0 ||
			value < 0 ||
			typeof key != 'number' ||
			typeof value != 'number'
		) {
			console.log(
				'LRUCache only supports operations with positive integers.'
			);
			return;
		}
	};
	#AddToRecentKeys = (key) => {
		let keyIndex = this.lastUsedKeys.indexOf(key);
		if (keyIndex > -1) {
			this.lastUsedKeys.splice(keyIndex, 1);
		}

		let lastKeyRemoved = this.#TrimList(
			this.lastUsedKeys,
			this.capacity - 1
		);

		this.lastUsedKeys.push(key);

		console.log('Recent Keys: ', this.lastUsedKeys);

		return lastKeyRemoved;
	};
	#TrimList = (array, maxCapacity) => {
		let lastKeyRemoved = -1;
		while (array.length > maxCapacity) {
			lastKeyRemoved = array.shift();
		}

		return lastKeyRemoved;
	};
	#DeleteFromRecentKeys = (key) => {
		let keyIndex = this.lastUsedKeys.indexOf(key);
		this.lastUsedKeys.splice(keyIndex, 1);
		console.log('Recent Keys: ', this.lastUsedKeys);
	};

	/*
	public int delete(int key)
	{
		Console.WriteLine("DELETE: key {0}", key);
		if (!activeCache.ContainsKey(key))
			return -1;

		int deletedValue = activeCache[key];
		activeCache.Remove(key);
		DeleteFromRecentKeys(key);

		return deletedValue;
	}
	*/
}
