const my = {
    name: "fynn",
    age: 27
}
let hw = () => "Hello World!"
describe("my info", () => {
    test("my name", () => {
        expect(my.name).toBe("fynn")
    });
    test("my age", () => {
        expect(my.age).toBe(27)
    })
});

xit("hw test", () => {
    expect(hw()).toBe("Hello World!");
})

it("my name", () => {
    expect(my.age).toBe(27)
})

describe('hw', () => {
    it("my name", () => {
        expect(my.age).not.toBe(29)
    })
})