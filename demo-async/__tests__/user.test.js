'use strict';
import * as user from '../user';
const users = {
    4: {name:'Mark'},
    5: {name:'Paul'},
}
jest.mock('../module/request');

it('works with promises',()=>{
    return user.getUserName(5)
            .then(name=>expect(name).toEqual('Paul'));
});

it('work width async/await',async ()=>{
    const userName = await user.getUserName(4);
    expect(userName).toEqual('Mark')
})

// Testing for async errors can be done using `catch`.
// it('tests error with promises', () => {
//   expect.assertions(1);
//   return user.getUserName(3)
//     .catch(e => expect(e).toEqual({
//       error: 'User with 3 not found.',
//     }));
// });

// Or try-catch.
// it('tests error with async/await', async () => {
//   expect.assertions(1);
//   try {
//     let name = await user.getUserName(3);
//     expect(name).toEqual('Mark')
//   } catch (object) {
//     expect(object.error).toEqual('User with 3 not found.');
//   }
// });