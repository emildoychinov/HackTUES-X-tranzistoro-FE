/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';
import { signal } from '@preact/signals-core';
import { SOCKET_URL } from '../environment';
import io from 'socket.io-client';

export const isSocketConnected = signal(false);
export const socketStore = writable<any>();

export function connect() {
	return new Promise((resolve) => {
		const socket = io(SOCKET_URL, {
			transports: ['websocket']
		});
		socket.on('connect', () => {
			isSocketConnected.value = true;
			socketStore.set(socket);
			resolve(1);
		});
	});
}

export function disconnect() {
	socketStore.update((socket) => {
		socket?.disconnect();
		return null;
	});
}

export function emitEvent(event: string, data?: any) {
	socketStore.update((socket) => {
		if (data) {
			socket?.emit(event, data);
		} else {
			socket?.emit(event);
		}
		return socket;
	});
}

export function addEventListener(event: string, callback: (...args: any[]) => void) {
	socketStore.update((socket) => {
		socket?.on(event, callback);
		return socket;
	});
}

export function removeEventListener(event: string, callback: (...args: any[]) => void) {
	socketStore.update((socket) => {
		socket?.off(event, callback);
		return socket;
	});
}
