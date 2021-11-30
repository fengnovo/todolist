/*
 * @Author: your name
 * @Date: 2021-11-30 14:58:40
 * @LastEditTime: 2021-11-30 17:05:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/src/js/TodoDom.ts
 */
import TodoTemplate from "./TodoTemplate";
import { ITodoData } from "./typings";
import { findParentNode } from "./utils";

export default class TodoDom extends TodoTemplate{
    private todoWrapper: HTMLElement;

    constructor(todoWrapper: HTMLElement) {
        super();
        this.todoWrapper = todoWrapper;
    }

    protected initList (todoData: ITodoData[]) {
        if (todoData.length) {
            const fragment: DocumentFragment = document.createDocumentFragment();
            todoData.map((todo: ITodoData) => {
                const oItem: HTMLElement = document.createElement('div');
                oItem.className = 'todo-item';
                oItem.innerHTML = this.todoView(todo);
                fragment.appendChild(oItem);
            });
            this.todoWrapper.appendChild(fragment);
        }
    }

    protected addItem(todo: ITodoData):void {
        const oItem: HTMLElement = document.createElement('div');
        oItem.className = 'todo-item';
        oItem.innerHTML = this.todoView(todo);
        this.todoWrapper.appendChild(oItem);

    }
    
    protected removeItem (target: HTMLElement) {
        const oParentNode: HTMLElement = findParentNode(target, 'todo-item');
        oParentNode.remove();
    }

    protected changeCompleted(target: HTMLElement, completed: boolean) {
        const oParentNode: HTMLElement = findParentNode(target, 'todo-item');
        const oContent: HTMLElement = oParentNode.getElementsByTagName('span')[0];

        oContent.style.textDecoration = completed ? 'line-through' : 'none';
    }


}