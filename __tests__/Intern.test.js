const Intern = require("../lib/Intern");
const intern = new Intern('casey', '511731', 'caseynlister@gmail.com', 'ucf');

test('check for constructor values in intern object', () => {
    expect(intern.name).toBe('casey');
    expect(intern.id).toBe('511731');
    expect(intern.email).toBe('caseynlister@gmail.com');
    expect(intern.school).toBe("ucf");
});

test('check if we can get name', () => {
    expect(intern.getName()).toBe('casey');
});

test('check if we can get id', () => {
    expect(intern.getId()).toBe('511731');
});

test('check if we can get email', () => {
    expect(intern.getEmail()).toBe('caseynlister@gmail.com');
});

test('check if we can get school from getSchool()', () => {
    expect(intern.getSchool()).toBe('ucf');
});

test('check if we can get role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
})