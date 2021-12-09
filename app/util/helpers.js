import React, { useEffect, useContext } from "react";
import EncryptedStorage from "react-native-encrypted-storage";
// import { react } from "@babel/types";
export async function storeData(key, value) {
	try {
		await EncryptedStorage.setItem(key, JSON.stringify(value));
		console.log("Data stored successfully");
	} catch (error) {
		console.log("Error: ", error);
	}
}
export const retrieveData = (key) =>
	new Promise(async (resolve, reject) => {
		try {
			const data = await EncryptedStorage.getItem(key);
			if (data !== undefined && data !== null) {
				resolve(JSON.parse(data));
			} else {
				reject("DATA_NOT_FOUND");
			}
		} catch (error) {
			reject(error);
		}
	});

export async function removeData(key) {
	try {
		await EncryptedStorage.removeItem(key);
		console.log("Data removed successfully");
	} catch (error) {
		console.log("Error: ", error);
	}
}

export function Theme() {
	const theme = false;
	const getCurrentMode = () => {
		retrieveData("isDarkMode")
			.then((mode) => {
				if (mode) {
					theme = true;
				} else {
					theme = false;
				}
			})
			.catch((err) => setIsDarkMode(true));
		return theme;
	};
	const getCurrentMode1 = () => {
		retrieveData("isDarkMode")
			.then((mode) => {
				if (mode) {
					theme = true;
				} else {
					theme = false;
				}
			})
			.catch((err) => setIsDarkMode(true));
	};
	useEffect(() => {
		getCurrentMode1();
	});
	return getCurrentMode;
}
