const fs = require('fs').promises;

// Function to read a file asynchronously and return a promise
async function readFileAsync(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

// Function to aggregate data from multiple files asynchronously using async/await
async function aggregateDataWithAsyncAwait(files) {
    let aggregatedData = {};

    for (const file of files) {
        try {
            const data = await readFileAsync(file);
            aggregatedData[file] = data;
        } catch (err) {
            throw err;
        }
    }

    return aggregatedData;
}

// Example usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

aggregateDataWithAsyncAwait(files)
    .then(data => {
        console.log('Aggregated Data:', data);
    })
    .catch(err => {
        console.error('Error:', err);
    });