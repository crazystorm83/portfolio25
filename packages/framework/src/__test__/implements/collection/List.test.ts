/// <reference types="jest" />

import { List } from '../../../implements/collection/List';

describe('List', () => {
    it('should be defined', () => {
        expect(List).toBeDefined();
    });

    it('should add an item', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(list.has(item)).toBe(true);
    });

    it('should not add an item', () => {
        const list = new List<{ id: number; name: string }>();
        const item1: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item1);
        const item2: { id: number; name: string } = { id: 2, name: 'Item 2' };
        expect(list.has(item2)).not.toBe(true);
    });

    it('should insert an item at a specific index', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.insertAt(0, item);
        expect(list.has(item)).toBe(true);
    });
    
    it('should remove an item', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        list.remove(item);
        expect(list.has(item)).toBe(false);
    });
    
    it('should remove an item at a specific index', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        list.removeAt(0);
        expect(list.has(item)).toBe(false);
    });
    
    
    it('should remove all items', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        list.removeAll();
        expect(list.has(item)).toBe(false);
    });
    
    
    it('should check if an item exists', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(list.has(item)).toBe(true);
    });
    
    it('should get the list', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(list.getAll()).toEqual([item]);
    });
    
    it('should get the length of the list', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(list.length).toEqual(1);
    });
    
    it('should get the item at a specific index', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(list.getByIndex(0)).toEqual(item);
    });

    it('should get the item at a specific index or throw an error', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(list.getByIndexOrThrow(0)).toEqual(item);
    });

    it('should throw an error if the item is not found', () => {
        const list = new List<{ id: number; name: string }>();
        const item: { id: number; name: string } = { id: 1, name: 'Item 1' };
        list.add(item);
        expect(() => list.getByIndexOrThrow(1)).toThrow('Item not found');
    });
});
