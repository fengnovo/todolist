/*
 * @Author: your name
 * @Date: 2021-11-30 14:59:08
 * @LastEditTime: 2021-11-30 16:48:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/src/js/TodoTemplate.ts
 */
import { ITodoData } from "./typings";

export default class TodoTemplate {
    protected todoView({id, content, completed}: ITodoData): string {
        return `
            <input type="checkbox" ${ completed ? 'checked' : '' } data-id="${id}">
            <span style="text-decoration: ${ completed ? 'line-through' : 'none' };">${content}</span>
            <button data-id="${id}">删除</button>
        `;
    }

}