const Intern = require('../lib/Intern.js');

test ('create intern object', () => {
    const intern = new Intern('Zora Hurston', '1234', 'znh@mail.com', 'Rollins',);

    expect(intern.name).toBe('Zora Hurston');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('znh@mail.com');
    expect(intern.college).toBe('Rollins');
});

test('get intern school', () => {
    const intern = new Intern('Zora Hurston', '1234', 'znh@mail.com', 'Rollins');
    expect(intern.getSchool()).toEqual(expect.stringContaining('Rollins'));
});

test('get intern role', () => {
    const intern = new Intern('Zora Hurston', '1234', 'znh@mail.com', 'Rollins');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});