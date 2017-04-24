test("two plus two is four", () => {
    expect(2 + 2).toBe(4)
})

test("Object assignment", () => {
    const data = { "one": 1 };
    data["two"] = 2;
    expect(data).toEqual({
        "one": 1,
        "two": 2
    })
});

test("null,undefined,boolean", () => {
    const n = null;
    const u = undefined;
    const t = 'str';
    const f = 0;
    expect(n).toBeNull();
    expect(u).toBeUndefined();
    expect(t).toBeTruthy();
    expect(f).toBeFalsy();
    expect(t).not.toBeFalsy();
});
test("one plus two", () => {
    const value = 1 + 2;
    expect(value).toBeGreaterThan(2.5);
    expect(value).toBeGreaterThanOrEqual(3);
    expect(value).toBeLessThan(3.5);
    expect(value).toBeLessThanOrEqual(3);

    expect(value).toBe(3)
    expect(value).toEqual(3);
})
test("adding floating point numnber", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
    expect(value).toBe(0.3)
    expect(value).not.toBe(0.3)
})
test("there is no I in team", () => {
    expect('team').not.toMatch(/I/);
})
test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/)
})
test('"abc" is length', () => {
    expect("abc").toHaveLength(3);
})
test("arr is length", () => {
    expect([1, 2, 3]).toHaveLength(3)
});

const shoppingList = ["diapers", "kleenex", "trash bags", "paper towels", "beer"];
test("the shopping list has beer on it", () => {
    expect(shoppingList).toContain('beer');
})

test("arrayContaining", () => {
    const expected = [2, 3];
    expect([1, 2, 3, 4, 5, 6]).toEqual(expect.arrayContaining(expected))
})