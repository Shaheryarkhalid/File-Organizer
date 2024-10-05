import fs from 'fs/promises';
import { createInterface } from 'readline/promises';
import fileFormats from './fileFormats.js';
import { exitCode } from 'process';
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});
export default async function formatFiles(path) {
    if(!path) {
        path = await pathGetter();
    }
    if(!await checkValidPath(path)) {
        console.error('Invalid path'); 
        return readline.close();
    }
    await createFolders(path);
    console.log('Folders created successfully'); 
    await folderOrFile(path);
    await removeTempFolders(path);
    readline.close();
}

async function pathGetter() {
    const path = await readline.question('Enter valid path: ')
    if(await checkValidPath(path)) {
        console.warn(`File path entered: ${path}`);
        return path;
    }
    console.error('Invalid path'); 
    return pathGetter(); 
}

async function checkValidPath(path) { 
    try {
        const stat = await fs.stat(path);
        if(stat && stat.isDirectory()) {
            return true;
        } 
    } catch (error) {
        return false;
    }
} 
async function createFolders(path) {
    const keys = Object.keys(fileFormats);
    try {
        await fs.mkdir(`${path}/Sorted`);
        path = `${path}/Sorted`;
        for(let key of keys) {
            await fs.mkdir(`${path}/${key}`);
        }
    } catch (error) {
        console.error(error);
        exitCode(1);
    }
}
async function folderChecker({file, path}) {
    try {
        const stat = await fs.stat(`${path}/${file}`);
        if(stat && stat.isDirectory()) {
            return true;
        } 
        return false;
    } catch (error) {
        return false;
    }
}
async function folderOrFile(path)
{
    const files = await fs.readdir(path);
    for(let file of files) {
        if(file === 'Sorted') continue
        if(await folderChecker({file, path})) {
            await formatFolder(`${path}/${file}`, path);
        } else {
            format({file, path});
        }
    }
} 
async function formatFolder(path, basePath) {
    const files = await fs.readdir(path);
    for(let file of files) {
        await formatNestedFiles({file, path, basePath});
    }
}
async function formatNestedFiles({file, path, basePath}) {
    console.log(`Base Path: ${basePath}`)
    const ext = file.split('.').pop();
    console.log(`Extension: ${ext}`);
    if(ext === file) return await formatFolder(`${path}/${file}`, basePath);
    const keys = Object.keys(fileFormats);
    for(let key of keys) {
        if(fileFormats[key].includes(ext)) {
            console.log(`Moving file from: ${path}/${file} to: ${basePath}/Sorted/${key}/${file}`);
            return await fs.rename(`${path}/${file}`, `${basePath}/Sorted/${key}/${file}`);
        }
    }
    return await fs.rename(`${path}/${file}`, `${basePath}/Sorted/other/${file}`);
}
async function format({file, path}) {
    const ext = file.split('.').pop();
    console.log(`Extension: ${ext}`);
    if(ext === file) return await formatFolder(`${path}/${file}`, path);
    const keys = Object.keys(fileFormats);
    for(let key of keys) {
        if(fileFormats[key].includes(ext)) {
            console.log(`Moving file from: ${path}/${file} to: ${path}/Sorted/${key}/${file}`);
            return await fs.rename(`${path}/${file}`, `${path}/Sorted/${key}/${file}`);
        }
    }
    return await fs.rename(`${path}/${file}`, `${path}/Sorted/other/${file}`);
} 

async function removeTempFolders(path) {
    const files = await fs.readdir(`${path}/Sorted`);
    for(let file of files) {
        console.log(`Folders to be moved : ${file}`)
        await fs.rename(`${path}/Sorted/${file}`, `${path}/${file}`);
    }
    await fs.rmdir(`${path}/Sorted`);
    await removeExtraFolders(path);
} 
async function removeExtraFolders(path)
{
    const files = await fs.readdir(path);
    for(let file of files) {
        if(await folderChecker({file, path})) {
            const subFiles = await fs.readdir(`${path}/${file}`);
            if(subFiles.length === 0) {
                await fs.rmdir(`${path}/${file}`);
                await removeExtraFolders(path);
            }else{
                await removeExtraFolders(`${path}/${file}`);
                const subFiles = await fs.readdir(`${path}/${file}`);
                if(subFiles.length === 0) {
                    await fs.rmdir(`${path}/${file}`);
                    await removeExtraFolders(path);
                }
            }
        }
    }
}
