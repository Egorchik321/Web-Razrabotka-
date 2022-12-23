const chalk = require("chalk");
const log = console.log;

log(
	chalk.red("Строка красного цвета\n") +
	chalk.green("Строка зеленого цвета\n") +
	chalk.blue("Строка синего цвета")
);

// шаблонные литералы
const os = require("os");

log(`
	Total memory: ${chalk.blue(os.totalmem())} bytes
	Free memory: ${chalk.green(os.freemem())} bytes
	Memory used: ${chalk.red(os.totalmem() - os.freemem())} bytes
`);