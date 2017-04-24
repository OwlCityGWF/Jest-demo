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
beforeAll(()=>{
    console.log("要开始执行test了!")
});
beforeEach(()=>{
    console.log("要开始执行一个test了!")
})