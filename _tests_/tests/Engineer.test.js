const Engineer = require('../lib/Engineer.js');

test('create engineer object', () => {
    const engineer = new Engineer ('Fred Rogers', '1111', 'fr@mail.com', 'fredrogersgit');

    expect(engineer.name).toBe('Fred Rogers');
    expect(engineer.id).toBe('1111');
    expect(engineer.email).toBe('fr@mail.com');
    expect(engineer.github).toBe('fredrogersgit');
});

test('get engineer github user name', () => {
    const engineer = new Engineer ('Fred Rogers', '1111', 'fr@mail.com', 'fredrogersgit');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('fredrogersgit'));
});

test('get engineer role', () => {
    const engineer = new Engineer ('Fred Rogers', '1111', 'fr@mail.com', 'fredrogersgit');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});