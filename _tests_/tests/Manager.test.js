const Manager = require('../lib/Manager.js');

test('create manager object', () => {
    const manager = new Manager('Maria Tallchief', '1212', 'mtc@mail.com', 'AA11');

    expect(manager.name).toBe('Maria Tallchief');
    expect(manager.id).toBe('1212');
    expect(manager.email).toBe('mtc@mail.com');
    expect(manager.office).toBe('AA11');
});
