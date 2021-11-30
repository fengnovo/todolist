/*
 * @Author: your name
 * @Date: 2021-11-30 19:40:33
 * @LastEditTime: 2021-11-30 21:19:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/server/app.ts
 */
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { fileOperation } from './utils';
import { ITodo } from './typings';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    next();
});

app.get('/todolist', (req, res) => {
    const todoList: string = fileOperation('todo.json') as string;
    res.send(todoList);
});
app.post('/add', (req, res) => {
    const todo: ITodo = JSON.parse(req.body.todo);
    fileOperation('todo.json', (todoList: ITodo []) => {
        const isExist = todoList.find((t: ITodo) => t.content === todo.content);
        if(isExist) {
            res.send({
                msg: 'has exist',
                code: -1
            });
            return todoList;
        }
        todoList.push(todo);
        res.send({
            msg: 'ok',
            code: 200
        });
        return todoList;
    } );

    
});
app.post('/toggle', (req, res) => {
    const id: number = parseInt(req.body.id);
    fileOperation('todo.json', (todoList: ITodo []) => {
        
        return todoList.map((todo: ITodo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
    } );

    res.send({
        msg: 'ok',
        code: 200
    });
});
app.post('/remove', (req, res) => {
    const id: number = parseInt(req.body.id);
    fileOperation('todo.json', (todoList: ITodo []) => todoList.filter((todo: ITodo) => todo.id !== id) );

    res.send({
        msg: 'ok',
        code: 200
    });
});


app.listen(8088, () => {
    console.log('listen to 8088 http://localhost:8088');
});