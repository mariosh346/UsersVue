import fs from 'fs';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const BASE_URL = 'http://localhost:9000';
const previousScore = 40

const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
const options = {logLevel: 'info', output: 'html', port: chrome.port};
const runnerResult = await lighthouse(BASE_URL, options);

if (!runnerResult) {
  console.error('Lighthouse failed to generate a report');
  chrome.kill();
  process.exit(1);
}
const reportHtml = Array.isArray(runnerResult.report) ? runnerResult.report.join('\n') : runnerResult.report;
fs.writeFileSync('lhreport.html', reportHtml);

// `.lhr` is the Lighthouse Result as a JS object
console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
const score = runnerResult?.lhr?.categories?.performance?.score;
if (!score) {
  console.error('Lighthouse failed to generate a performance score');
  chrome.kill();
  process.exit(1);
}
console.log('Performance score was', score * 100);
if (score * 100 < previousScore) {
  console.error('Performance score is lower than previous score');
  chrome.kill();
  process.exit(1);
}

chrome.kill();
