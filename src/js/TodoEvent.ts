/*
 * @Author: your name
 * @Date: 2021-11-30 14:58:53
 * @LastEditTime: 2021-11-30 21:10:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/src/js/TodoEvent.ts
 */
import TodoDom from "./TodoDom";
import { addTodo, getTodoList, removeTodo, toggleTodo } from "./TodoService";
import { ITodoData } from "./typings";

export default class TodoEvent extends TodoDom {
    private todoData: ITodoData[];

    constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
        super(todoWrapper);
        this.todoData = todoData;

        this.init(this.todoData);
    }

    @getTodoList
    private init(todoData: ITodoData[]): void {
        console.log('-----', todoData)
        this.todoData = todoData;
        this.initList(this.todoData);
    }

    @addTodo
    public addTodo(todo: ITodoData): undefined | number {
        const _todo: null | ITodoData = this.todoData.find((item: ITodoData) => item.content === todo.content);
        if(!_todo){
            this.todoData.push(todo);
            this.addItem(todo);
            return;
        }  

        return 1001;
    }

    @removeTodo
    public removeTodo(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.filter((item: ITodoData) => item.id !== id);
        this.removeItem(target);
    }

    @toggleTodo
    public toggleComplete(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.map((item: ITodoData) => {
            if (item.id === id) {
                this.changeCompleted(target, !item.completed);
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        });
    }

}