// https://medium.com/@drcallaway/debugging-es6-in-visual-studio-code-4444db797954
import collectMarkdownLinks from "./utils/collect-markdown-links.js";
import validateLinks from "./utils/link-validator.js";
import logResults from "./utils/log-results.js";
import parseOpts from "./utils/parse-opts.js";
import { logInit } from "./utils/log.js";

const opts = parseOpts();

logInit("Starting Markdown Reporter...");

const markdownLinks = collectMarkdownLinks(opts);
const validatedLinks = validateLinks(markdownLinks, opts);
logResults(validatedLinks);
