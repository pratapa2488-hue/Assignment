import os from 'os';
import fs from 'fs';


const logFile = 'system-info.log';

function logSystemInfo() {
    const timestamp = new Date().toLocaleString();

    const cpuInfo = os.cpus()[0].model;
    const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2); // GB
    const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);   // GB
    const platform = os.platform();

    const logData = `
Time: ${timestamp}
Platform: ${platform}
CPU: ${cpuInfo}
Total Memory: ${totalMemory} GB
Free Memory: ${freeMemory} GB
---------------------------
`;

    fs.appendFile(logFile, logData, (err) => {
        if (err) {
            console.error('Error writing log:', err);
        } else {
            console.log('System info logged');
        }
    });
}


setInterval(logSystemInfo, 5000);
