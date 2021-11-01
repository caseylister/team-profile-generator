const Employee = require("../lib/Employee");
const employ = new Employee('casey', '511731', 'caseynlister@gmail.com');

test('check for constructor values in employee object', () => {
    expect(employ.name).toBe('casey');
    expect(employ.id).toBe('511731');
    expect(employ.email).toBe('caseynlister@gmail.com');
});

test('check if we can get name', () => {
    expect(employ.getName()).toBe('casey');
});

test('check if we can get id', () => {
    expect(employ.getId()).toBe('511731');
});

test('check if we can get email', () => {
    expect(employ.getEmail()).toBe('caseynlister@gmail.com');
});

test('check if we can get role from getRole()', () => {
    expect(employ.getRole()).toBe('Employee');
});