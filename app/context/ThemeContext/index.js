import React, { createContext, useState, useEffect } from "react";
import { storeData, retrieveData, removeData } from "../../util/helpers";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState();
	useEffect(() => {
		retrieveData("isDarkMode")
			.then((mode) => {
				if (mode) {
					setIsDarkMode(true);
				} else {
					setIsDarkMode(false);
				}
			})
			.catch((err) => setIsDarkMode(true));
	}, [isDarkMode]);
	return (
		<>
			<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
				{children}
			</ThemeContext.Provider>
		</>
	);
};
export default ThemeProvider;
