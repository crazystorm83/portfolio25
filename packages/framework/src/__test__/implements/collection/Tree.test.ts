/// <reference types="jest" />

import { TREE_ERROR } from '../../../exception/message/TREE_ERROR';
import { Tree } from '../../../implements/collection/Tree';
import { $$node_sid, INode } from '../../../interfaces';

describe('Tree', () => {
    it('should be defined', () => {
        expect(Tree).toBeDefined();
    });

    it('should add a node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(tree.hasNode('children1')).toBe(true);
    });

    it('should add a node to the children', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNextSibling({
            target_sid: 'children1',
            node: { parent_sid: 'root', sid: 'children2', children: [] },
        });
        expect(tree.hasNode('children2')).toBe(true);
    });

    it('should add a node to the children', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenPrevSibling({
            target_sid: 'children1',
            node: { parent_sid: 'root', sid: 'children2', children: [] },
        });
        expect(tree.hasNode('children2')).toBe(true);
    });

    it('should get the next sibling', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addNextSiblingNodes({
            target_sid: 'children1',
            nodes: [
                { parent_sid: 'root', sid: 'children1-1', children: [] },
                { parent_sid: 'root', sid: 'children1-2', children: [] },
                { parent_sid: 'root', sid: 'children1-3', children: [] },
            ],
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            { parent_sid: 'root', sid: 'children1', children: [] },
            { parent_sid: 'root', sid: 'children1-1', children: [] },
            { parent_sid: 'root', sid: 'children1-2', children: [] },
            { parent_sid: 'root', sid: 'children1-3', children: [] },
        ]);
    });

    it('should get the previous sibling', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addPreviousSiblingNodes({
            target_sid: 'children1',
            nodes: [
                { parent_sid: 'root', sid: 'children1-1', children: [] },
                { parent_sid: 'root', sid: 'children1-2', children: [] },
                { parent_sid: 'root', sid: 'children1-3', children: [] },
            ],
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            { parent_sid: 'root', sid: 'children1-1', children: [] },
            { parent_sid: 'root', sid: 'children1-2', children: [] },
            { parent_sid: 'root', sid: 'children1-3', children: [] },
            { parent_sid: 'root', sid: 'children1', children: [] },
        ]);
    });

    it('should get the children nodes', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            { parent_sid: 'root', sid: 'children1', children: [] },
            { parent_sid: 'root', sid: 'children2', children: [] },
            { parent_sid: 'root', sid: 'children3', children: [] },
        ]);
    });

    it('should remove a node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.removeNode({ sid: 'children1' });
        expect(tree.hasNode('children1')).toBe(false);
    });

    it('should remove a nodes', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        tree.removeNodes({ sids: ['children1', 'children2', 'children3'] });
        expect(tree.hasNode('children1')).toBe(false);
        expect(tree.hasNode('children2')).toBe(false);
        expect(tree.hasNode('children3')).toBe(false);
    });

    it('should remove a children node at', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        tree.removeChildrenNodeAt({ parent_sid: 'root', children_index: 1 });
        expect(tree.getChildrenNodes('root')).toEqual([
            { parent_sid: 'root', sid: 'children1', children: [] },
            { parent_sid: 'root', sid: 'children3', children: [] },
        ]);
    });

    it('should has a node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        expect(tree.hasNode('children1')).toBe(true);
        expect(tree.hasNode('children2')).toBe(true);
    });

    it('should move a next sibling node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children4',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children5',
            children: [],
        });
        tree.moveNextSiblingNode({
            from_sid: 'children1',
            to_sid: 'children2',
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            { parent_sid: 'root', sid: 'children2', children: [] },
            { parent_sid: 'root', sid: 'children1', children: [] },
            { parent_sid: 'root', sid: 'children3', children: [] },
            { parent_sid: 'root', sid: 'children4', children: [] },
            { parent_sid: 'root', sid: 'children5', children: [] },
        ]);
    });

    it('should get the next sibling node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children1',
            sid: 'children1-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children1',
            sid: 'children1-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children1',
            sid: 'children1-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children2',
            sid: 'children2-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children2',
            sid: 'children2-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children2',
            sid: 'children2-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children3',
            sid: 'children3-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children3',
            sid: 'children3-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children3',
            sid: 'children3-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children4',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children4',
            sid: 'children4-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children4',
            sid: 'children4-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children4',
            sid: 'children4-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children5',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children5',
            sid: 'children5-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children5',
            sid: 'children5-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children5',
            sid: 'children5-3',
            children: [],
        });
        tree.moveNextSiblingNode({
            from_sid: 'children1',
            to_sid: 'children3-1',
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            {
                parent_sid: 'root',
                sid: 'children2',
                children: [
                    {
                        parent_sid: 'children2',
                        sid: 'children2-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children2',
                        sid: 'children2-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children2',
                        sid: 'children2-3',
                        children: [],
                    },
                ],
            },
            {
                parent_sid: 'root',
                sid: 'children3',
                children: [
                    {
                        parent_sid: 'children3',
                        sid: 'children3-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children3',
                        sid: 'children1',
                        children: [
                            {
                                parent_sid: 'children1',
                                sid: 'children1-1',
                                children: [],
                            },
                            {
                                parent_sid: 'children1',
                                sid: 'children1-2',
                                children: [],
                            },
                            {
                                parent_sid: 'children1',
                                sid: 'children1-3',
                                children: [],
                            },
                        ],
                    },
                    {
                        parent_sid: 'children3',
                        sid: 'children3-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children3',
                        sid: 'children3-3',
                        children: [],
                    },
                ],
            },
            {
                parent_sid: 'root',
                sid: 'children4',
                children: [
                    {
                        parent_sid: 'children4',
                        sid: 'children4-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children4',
                        sid: 'children4-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children4',
                        sid: 'children4-3',
                        children: [],
                    },
                ],
            },
            {
                parent_sid: 'root',
                sid: 'children5',
                children: [
                    {
                        parent_sid: 'children5',
                        sid: 'children5-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children5',
                        sid: 'children5-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children5',
                        sid: 'children5-3',
                        children: [],
                    },
                ],
            },
        ]);
    });

    it('should move a previous sibling node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children4',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children5',
            children: [],
        });
        tree.movePreviousSiblingNode({
            from_sid: 'children1',
            to_sid: 'children5',
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            { parent_sid: 'root', sid: 'children2', children: [] },
            { parent_sid: 'root', sid: 'children3', children: [] },
            { parent_sid: 'root', sid: 'children4', children: [] },
            { parent_sid: 'root', sid: 'children1', children: [] },
            { parent_sid: 'root', sid: 'children5', children: [] },
        ]);
    });

    it('should get the next previous node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children1',
            sid: 'children1-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children1',
            sid: 'children1-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children1',
            sid: 'children1-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children2',
            sid: 'children2-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children2',
            sid: 'children2-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children2',
            sid: 'children2-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children3',
            sid: 'children3-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children3',
            sid: 'children3-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children3',
            sid: 'children3-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children4',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children4',
            sid: 'children4-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children4',
            sid: 'children4-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children4',
            sid: 'children4-3',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children5',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children5',
            sid: 'children5-1',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children5',
            sid: 'children5-2',
            children: [],
        });
        tree.addChildrenNode({
            parent_sid: 'children5',
            sid: 'children5-3',
            children: [],
        });
        tree.movePreviousSiblingNode({
            from_sid: 'children1',
            to_sid: 'children3-1',
        });
        expect(tree.getChildrenNodes('root')).toEqual([
            {
                parent_sid: 'root',
                sid: 'children2',
                children: [
                    {
                        parent_sid: 'children2',
                        sid: 'children2-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children2',
                        sid: 'children2-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children2',
                        sid: 'children2-3',
                        children: [],
                    },
                ],
            },
            {
                parent_sid: 'root',
                sid: 'children3',
                children: [
                    {
                        parent_sid: 'children3',
                        sid: 'children1',
                        children: [
                            {
                                parent_sid: 'children1',
                                sid: 'children1-1',
                                children: [],
                            },
                            {
                                parent_sid: 'children1',
                                sid: 'children1-2',
                                children: [],
                            },
                            {
                                parent_sid: 'children1',
                                sid: 'children1-3',
                                children: [],
                            },
                        ],
                    },
                    {
                        parent_sid: 'children3',
                        sid: 'children3-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children3',
                        sid: 'children3-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children3',
                        sid: 'children3-3',
                        children: [],
                    },
                ],
            },
            {
                parent_sid: 'root',
                sid: 'children4',
                children: [
                    {
                        parent_sid: 'children4',
                        sid: 'children4-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children4',
                        sid: 'children4-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children4',
                        sid: 'children4-3',
                        children: [],
                    },
                ],
            },
            {
                parent_sid: 'root',
                sid: 'children5',
                children: [
                    {
                        parent_sid: 'children5',
                        sid: 'children5-1',
                        children: [],
                    },
                    {
                        parent_sid: 'children5',
                        sid: 'children5-2',
                        children: [],
                    },
                    {
                        parent_sid: 'children5',
                        sid: 'children5-3',
                        children: [],
                    },
                ],
            },
        ]);
    });

    it('should has a node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(tree.hasNode('root')).toBe(true);
        expect(tree.hasNode('children1')).toBe(true);
        expect(tree.hasNode('children2')).toBe(false);
    });

    it('should has a children node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(tree.hasChildrenNode('root')).toBe(true);
    });

    it('should get a node', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(tree.getNode('children1')).toEqual({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(tree.getNode('children2')).toBeUndefined();
    });

    it('should get root node throw an error', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(() => tree.getNodeOrThrow('root')).toThrow(
            TREE_ERROR.ROOT_NODE_ACCESS_ERROR,
        );
    });

    it('should get a node or throw an error', () => {
        const tree = new Tree<
            INode<{
                parent_sid: $$node_sid;
                sid: $$node_sid;
                children: INode<{
                    parent_sid: $$node_sid;
                    sid: $$node_sid;
                    children: any[];
                }>[];
            }>
        >();
        tree.addChildrenNode({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(tree.getNodeOrThrow('children1')).toEqual({
            parent_sid: 'root',
            sid: 'children1',
            children: [],
        });
        expect(() => tree.getNodeOrThrow('children2')).toThrow(
            TREE_ERROR.NODE_NOT_FOUND,
        );
    });
});
