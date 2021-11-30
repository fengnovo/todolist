/*
 * @Author: your name
 * @Date: 2021-11-30 14:51:25
 * @LastEditTime: 2021-11-30 19:50:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/src/index.ts
 */
import { ITodoData } from './js/typings';
import TodoEvent from './js/TodoEvent';

;((doc) => {
    const oInput: HTMLInputElement = doc.querySelector('input');
    const oAddBtn: HTMLElement = doc.querySelector('button');
    const oTodoList: HTMLElement = doc.querySelector('.todo-list');

    const todoData: ITodoData[] = [];

    const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList);
    const init = (): void => {
        bindEvent();
    }

    function bindEvent():void {
        oAddBtn.addEventListener('click', handleAddClick, false);
        oTodoList.addEventListener('click', handleListClick, false);
    }

    function handleAddClick(): void {
        const val = oInput.value.trim();
        if (val.length) {
            const result = todoEvent.addTodo(<ITodoData>{
                id: Date.now(),
                content: val,
                completed: false
            });
            if (result && result === 1001) {
                alert('列表已存在该项！');
                return;
            }
            oInput.value = '';
        }
        // console.log(todoEvent.todoData);
    }

    function handleListClick(e: MouseEvent): void {
        const target = e.target as HTMLElement;
        const targetName = target.tagName.toLowerCase();

        if(targetName === 'input' || targetName === 'button') {
            const id = parseInt(target.dataset.id);
            switch (targetName) {
                case 'input':
                    todoEvent.toggleComplete(target, id);
                    break;
                case 'button':
                    todoEvent.removeTodo(target, id);
                    break;
                default:
                    break;
            }
        }
        
    }

    init();
    
})(document);