import {hw}  from '../hw'
import "jest";
test('test hw function ',()=>{
    let name= 'fynn';
    expect(hw(name)).toBe("Hello World!");
})