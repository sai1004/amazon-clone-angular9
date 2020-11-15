'use strict';
const valuesMap = new Map();

export class LocalStorage implements Storage {
    getItem(key) {
        const stringKey = String(key);
        if (valuesMap.has(key)) {
            return String(valuesMap.get(stringKey));
        }
        return null;
    }

    setItem(key, val) {
        valuesMap.set(String(key), String(val));
    }

    removeItem(key) {
        valuesMap.delete(key);
    }

    clear() {
        valuesMap.clear();
    }

    key(i) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."); // this is a TypeError implemented on Chrome, Firefox throws Not enough arguments to Storage.key.
        }
        var arr = Array.from(valuesMap.keys());
        return arr[i];
    }

    get length() {
        return valuesMap.size;
    }
}
