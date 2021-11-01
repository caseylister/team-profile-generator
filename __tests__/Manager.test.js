const Manager = require("../lib/Manager");
const manager = new Manager('casey', '511731', 'caseynlister@gmail.com', '111');

test('check for constructor values in manager object', () => {
    expect(manager.name).toBe('casey');
    expect(manager.id).toBe('511731');
    expect(manager.email).toBe('caseynlister@gmail.com');
    expect(manager.officeNumber).toBe("111");
});

test('check if we can get name', () => {
    expect(manager.getName()).toBe('casey');
});

test('check if we can get id', () => {
    expect(manager.getId()).toBe('511731');
});

test('check if we can get email', () => {
    expect(manager.getEmail()).toBe('caseynlister@gmail.com');
});

test('check if we can get officeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('111');
});

test('check if we can get role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
})