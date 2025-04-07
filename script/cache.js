const bust = Date.now();
const head = document.getElementsByTagName("head")[0];

const styleTag = document.createElement("link");
styleTag.rel = "stylesheet";
styleTag.href = `styles/main.css?v=${bust}`;
head.appendChild(styleTag);

const scriptTag = document.createElement("script");
scriptTag.src = `script/date_stamp.js?v=${bust}`;
scriptTag.defer = true;
head.appendChild(scriptTag);