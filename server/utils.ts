/*
 * @Author: your name
 * @Date: 2021-11-30 19:56:14
 * @LastEditTime: 2021-11-30 21:03:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/server/utils.ts
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { ITodo } from './typings';

export const readFile = (fileName: string): string => readFileSync(resolve(__dirname, fileName), 'utf-8');

export function writeFile<T> (fileName: string, data: T): void {
    return writeFileSync(resolve(__dirname, fileName), JSON.stringify(data), 'utf-8');
}

export function fileOperation(fileName: string, fn?: any): void | string {
    let todoList: ITodo[] = JSON.parse(readFile('todo.json')) || '[]';

    if (!fn) {
        return JSON.stringify(todoList);
    }

    todoList = fn(todoList);

    writeFile<ITodo[]>(fileName, todoList);
}
