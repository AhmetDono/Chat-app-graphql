import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const resolversArray = loadFilesSync(
    path.join(__dirname),
    {extensions: ['js'],
    extractExports:(fileExport)=>{
        if(!typeof fileExport === 'function'){
            return fileExport('queryroot')
        }
        return fileExport
    }
});

module.exports = mergeResolvers(resolversArray)