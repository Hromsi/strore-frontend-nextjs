'use client';

export function getFromLocalStorage<T>(key: string): T | null {
	if (typeof window !== 'undefined') {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}
	return null;
}

export function saveToLocalStorage<T>(key: string, item: T): void {
	localStorage.setItem(key, JSON.stringify(item));
}
