import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClasss')).toBe('someClasss');
    });
    test('with first param', () => {
        const expected = 'someClasss class1 class2';
        expect(classNames('someClasss', {}, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with first param', () => {
        const expected = 'someClasss class1 class2 hoverd scrollable';
        expect(classNames(
            'someClasss',
            { hoverd: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with first param', () => {
        const expected = 'someClasss class1 class2 hoverd';
        expect(classNames(
            'someClasss',
            { hoverd: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with first param', () => {
        const expected = 'someClasss class1 class2 hoverd';
        expect(classNames(
            'someClasss',
            { hoverd: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
