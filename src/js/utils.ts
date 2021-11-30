/*
 * @Author: your name
 * @Date: 2021-11-30 15:07:36
 * @LastEditTime: 2021-11-30 16:21:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vite-to-do-list/src/js/utils.ts
 */
export const findParentNode = (target: HTMLElement, className: string) => {
    while (target = target.parentElement as HTMLElement) {
        if (target.className === className) {
            return target;
        }
    } 
}