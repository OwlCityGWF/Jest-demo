import './hw.css'
interface hwInterface {
    (str:string):string
}
let hw:hwInterface;
 hw =  function (str:string = 'World') {
    return `Hello ${str}`
};
export {hw}
