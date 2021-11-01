const Engineer = require("../lib/Engineer");
const engineer = new Engineer('casey', '511731', 'caseynlister@gmail.com', 'casecase');

test('check for constructor values in engineer object', () => {
    expect(engineer.name).toBe('casey');
    expect(engineer.id).toBe('511731');
    expect(engineer.email).toBe('caseynlister@gmail.com');
    expect(engineer.github).toBe("casecase");
});

test('check if we can get name', () => {
    expect(engineer.getName()).toBe('casey');
});

test('check if we can get id', () => {
    expect(engineer.getId()).toBe('511731');
});

test('check if we can get email', () => {
    expect(engineer.getEmail()).toBe('caseynlister@gmail.com');
});

test('check if we can get github username', () => {
    expect(engineer.getGithub()).toBe('casecase');
});

test('check if we can get role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
})