const my = {
    name : "fynn",
    age: 27
}
let hw = ()=>"Hello World!"
describe("my info",()=>{
    test("my name",()=>{
        expect(my.name).toBe("fynn")
    });
    test("my age",()=>{
        expect(my.age).toBe(27)
    })
});

describe.only("hw test suit",()=>{
    test("hw test",()=>{
        expect(hw()).toBe("Hello World!");
    })
})