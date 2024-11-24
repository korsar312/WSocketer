import { app, BrowserWindow } from "electron";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
	let mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js"),
		},
	});

	const isDev = process.env.NODE_ENV === "development";
	const url = isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`;

	mainWindow.loadURL(url);

	mainWindow.webContents.on("did-fail-load", (event, errorCode, errorDescription) => {
		console.error("Error loading page:", errorCode, errorDescription);
	});

	mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
