// import collectMarkdownLinks from "./utils/collect-markdown-links";
// import validateLinks from "./utils/link-validator";
// import logResults from "./utils/log-results";
// import parseOpts from "./utils/parse-opts";
// import { logInit } from "./utils/log";

const collectMarkdownLinks = require("./utils/collect-markdown-links.js");
const validateLinks = require("./utils/link-validator.js");
const logResults = require("./utils/log-results.js");
const parseOpts = require("./utils/parse-opts.js");
const logInit = require("./utils/log");

const opts = parseOpts();

logInit("Starting Markdown Reporter...");

const markdownLinks = collectMarkdownLinks(opts);
const validatedLinks = validateLinks(markdownLinks, opts);
logResults(validatedLinks);
