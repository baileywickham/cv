import path from "path";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const run = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	const filePath = `file://${path.resolve(__dirname, "index.html")}`;
	await page.goto(filePath, { waitUntil: "networkidle0" });

	await page.pdf({
		path: path.resolve(__dirname, "public/wickham.pdf"),
		format: "A4",
		printBackground: true,
	});

	await browser.close();
};

run();
