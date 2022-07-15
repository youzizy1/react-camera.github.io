/**
 * 
 * @author 
 * @func 根据path判断是否在数组中  
 * @param {path string} 
 * @returns boolean 
 */

export const isPathPartlyExisted = (path) =>{

    const arr = ['/login','/tpmbdetail','/select','/spmbdetail','/shop','/geren'];
    let pathRes = path.split('/');
       // 任何情况 结果数组第二项都是arr里匹配的单项
    if(pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
    // if(pathRes[3] && arr.indexOf(`/${pathRes[3]}`) != -1) return true;
    return false;
}   

export const sleep = (time) =>
  new Promise(resolve => setTimeout(resolve, time))