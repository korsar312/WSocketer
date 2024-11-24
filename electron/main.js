import { app, BrowserWindow } from "electron";
import * as path from "path";
//import isDev from "electron-is-dev";

function createWindow() {
	let mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false, // Безопасность
			contextIsolation: true, // Защита
		},
	});

	//const url = isDev		? "http://localhost:3000" // Для разработки		: `file://${path.join(__dirname, "../build/index.html")}`; // Для продакшн-сборки
	const url = path.join("file://", path.resolve(`./build/index.html`));
	console.log("Loading URL:", url);

	mainWindow.loadURL(url).catch((error) => {
		console.error("Failed to load URL:", error);
	});

	mainWindow.on("closed", () => (mainWindow = null));

	console.log(2345);
	console.log(url);
}

app.on("ready", createWindow);

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
