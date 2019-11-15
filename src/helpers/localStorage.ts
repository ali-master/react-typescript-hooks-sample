type Key = string;
type Read<T> = string | {} | T[] | number | boolean | undefined;
/**
 * Register an item via key and value in local storage
 * @param  {Key} key
 * @param  {any} data
 * @returns {any} retrun
 */
export function store(key: Key, data: any, storage = window.localStorage): any {
	if (!window.localStorage || !key) {
		return;
	}
	storage.setItem(key, JSON.stringify(data));
}
/**
 * Get an item in local storage db
 * @param  {Key} key
 * @returns {Read<any>}
 */
export function read(key: Key, storage = window.localStorage): Read<any> {
	if (!storage || !key) {
		return;
	}
	const item: any = storage.getItem(key);
	if (!item) {
		return;
	}

	const parse = JSON.parse;
	try {
		return parse(item);
	} catch (error) {
		return parse(`"${item}"`);
	}
}
/**
 * Remove an item in local storage db
 * @param  {Key} key
 * @returns {any}
 */
export function remove(key: Key, storage = window.localStorage): any {
	if (!storage || !key) {
		return;
	}

	storage.removeItem(key);
}
