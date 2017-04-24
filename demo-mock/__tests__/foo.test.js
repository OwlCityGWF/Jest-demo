import {fo,foo} from '../foo'
jest.mock('../foo');

test('foo',()=>{
    expect(foo()).toBe("This is foo mock")
})