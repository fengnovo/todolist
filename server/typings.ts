/*
 * @Author: your name
 * @Date: 2021-11-30 15:07:15
 * @LastEditTime: 2021-11-30 19:51:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/server/typings.ts
 */
export interface ITodo {
    id: number
    content: string
    completed: boolean
}