const { ne } = require('sequelize/types/lib/operators');
const Employee = require ('../lib/Employee.js');

test('create employee object', () => {
    const employee = new Employee('Marcella Collins', '2010', 'mmc@mail.com');

    expect(employee.name).toBe('Marcella Collins');
    expect(employee.id).toBe('2010');
    expect(employee.email).toBe('mmc@mail.com');
});

test('get employee name', () => {
    const employee = new Employee('Marcella Collins', '2010', 'mmc@mail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Marcella Collins'));
});

test('get empolyee id', () => {
    const employee = new Employee('Marcella Collins', '2010', 'mmc@mail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('2010'))
});

test('get employee email', () => {
    const employee = new Employee('Marcella Collins', '2010', 'mmc@mail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('mmc@mail.com'));
});

test('employee role', () => {
    const employee = new Employee('Marcella Collins', '2010', 'mmc@mail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});