const my = {
    name :"fynn",
    age : 27
};
test("my name",()=>{
    expect(my.name).toBe("fynn")
});
test("my age",()=>{
    expect(my.age).toBe(27)
});
afterAll(()=>{
    console.log("执行完所有test!")
});
afterEach(()=>{
    console.log("执行完一个test")
})