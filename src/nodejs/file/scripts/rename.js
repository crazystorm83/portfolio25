const fs = require('fs').promises;
const path = require('path');

// Path to the text file containing the file names
const listFilePath = 'D:\\files.txt';
// Directory where the files to be renamed are located
const directory = 'D:\\'; // This should be the directory where your files actually are

async function renameFiles() {
    try {
        // Read the contents of the text file
        const data = await fs.readFile(listFilePath, 'utf8');
        const lines = data.split('\n');

        for (const line of lines) {
            // Skip empty lines
            if (!line.trim()) continue;

            const [oldName, newName] = line.split('|');
            if (!oldName || !newName) {
                console.log(`Invalid line format: ${line}`);
                continue;
            }

            const oldPath = path.join(directory, oldName.trim());
            const newPath = path.join(directory, newName.trim());

            try {
                await fs.rename(oldPath, newPath);
                console.log(
                    `파일명 변경완료: ${oldName.trim()} -> ${newName.trim()}`
                );
            } catch (err) {
                console.error(
                    `Error renaming ${oldName.trim()}: ${err.message}`
                );
            }
        }
    } catch (err) {
        console.error(`Failed to read file: ${err.message}`);
    }
}

renameFiles();
