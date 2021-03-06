import healthMonitor from '../src/index.js';


test("health > 50", () => {
    const result = healthMonitor({ name: 'Маг', health: 55 });
    const expected = "healthy";
    expect(result).toBe(expected);
})
test("health < 50 and > 15", () => {
    const result = healthMonitor({ name: 'Маг', health: 40 });
    const expected = "wounded";
    expect(result).toBe(expected);
})
test("health < 15", () => {
    const result = healthMonitor({ name: 'Маг', health: 10 });
    const expected = "critical";
    expect(result).toBe(expected);
})
