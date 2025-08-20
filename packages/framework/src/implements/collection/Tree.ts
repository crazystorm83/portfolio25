import {
    IAddChildrenNextSiblingPayload,
    IAddChildrenPayload,
    IAddChildrenPrevSiblingPayload,
    IAddNextSibling,
    IAddPayload,
    IAddPrevSibling,
    IHasChildrenPayload,
    IMovePayload,
    INextSiblingPayload,
    INode,
    IPreviousPayload,
    IRemovePayload,
} from '../../abstracts/entity/collection';
import { BaseTree } from './base';

export abstract class Tree<TNode extends INode> extends BaseTree<TNode> {
    addNode(payload: IAddPayload<TNode>): void {
        throw new Error('Method not implemented.');
    }
    addNextSibling(payload: IAddNextSibling<TNode>): void {
        throw new Error('Method not implemented.');
    }
    addPrevSibling(payload: IAddPrevSibling<TNode>): void {
        throw new Error('Method not implemented.');
    }
    removeNode(payload: IRemovePayload): boolean {
        throw new Error('Method not implemented.');
    }
    moveNode(payload: IMovePayload): void {
        throw new Error('Method not implemented.');
    }
    addChildrenNode(payload: IAddChildrenPayload<TNode>): void {
        throw new Error('Method not implemented.');
    }
    addChildrenNextSibling(
        payload: IAddChildrenNextSiblingPayload<TNode>
    ): void {
        throw new Error('Method not implemented.');
    }
    addChildrenPrevSibling(
        payload: IAddChildrenPrevSiblingPayload<TNode>
    ): void {
        throw new Error('Method not implemented.');
    }
    hasChildren(payload: IHasChildrenPayload): boolean {
        throw new Error('Method not implemented.');
    }
    nextSibling(payload: INextSiblingPayload): TNode {
        throw new Error('Method not implemented.');
    }
    previousSibling(payload: IPreviousPayload): TNode {
        throw new Error('Method not implemented.');
    }
}
