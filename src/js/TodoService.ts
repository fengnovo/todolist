/*
 * @Author: your name
 * @Date: 2021-11-30 20:08:08
 * @LastEditTime: 2021-11-30 21:12:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/src/js/TodoService.ts
 */
import $ from 'jquery';
import { ITodoData } from './typings';

export function getTodoList (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    // console.log(target, methodName, descriptor);
    const _origin = descriptor.value;

    descriptor.value = function (todoData: ITodoData[]) {
        $.get('http://localhost:8088/todolist')
            .then((data: string) => {
                if(!data){
                    return;
                }
                todoData = JSON.parse(data);
            }).then(() => {
                _origin.call(this, todoData);
            })
    }
}

export function removeTodo (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const _origin = descriptor.value;

    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8088/remove', { id })
            .then((data: string) => {
                _origin.call(this, target, id);
            })
    }
}

export function toggleTodo (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const _origin = descriptor.value;

    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8088/toggle', { id })
            .then(() => {
                _origin.call(this, target, id);
            })
    }
}

export function addTodo (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const _origin = descriptor.value;

    descriptor.value = function (todo: ITodoData) {
        $.post('http://localhost:8088/add', { todo: JSON.stringify(todo) })
            .then(() => {
                _origin.call(this, todo);
            })
    }
}