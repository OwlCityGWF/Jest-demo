'use strict'

jest.mock('fs');

describe('listFilesInDirctorySync', () => {
    const MOCK_FILE_INFO = {
        '/path/to/file1.js': 'console.log("file1 contents")',
        '/path/to/file1.txt': 'file2 contents'
    }
    beforeEach(() => {
        require('fs').__setMockFiles(MOCK_FILE_INFO);
    });
    it('includes all files in the directory in the summary', () => {
        const FileSummarizer = require('../module/FileSummarizer');
        const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
            '/path/to'
        );

        expect(fileSummary.length).toBe(2);
    })
})