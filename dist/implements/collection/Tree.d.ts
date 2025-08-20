import { IAddChildrenNextSiblingPayload, IAddChildrenPayload, IAddChildrenPrevSiblingPayload, IAddNextSibling, IAddPayload, IAddPrevSibling, IHasChildrenPayload, IMovePayload, INextSiblingPayload, INode, IPreviousPayload, IRemovePayload } from '../../abstracts/entity/collection';
import { BaseTree } from './base';
export declare abstract class Tree<TNode extends INode> extends BaseTree<TNode> {
    addNode(payload: IAddPayload<TNode>): void;
    addNextSibling(payload: IAddNextSibling<TNode>): void;
    addPrevSibling(payload: IAddPrevSibling<TNode>): void;
    removeNode(payload: IRemovePayload): boolean;
    moveNode(payload: IMovePayload): void;
    addChildrenNode(payload: IAddChildrenPayload<TNode>): void;
    addChildrenNextSibling(payload: IAddChildrenNextSiblingPayload<TNode>): void;
    addChildrenPrevSibling(payload: IAddChildrenPrevSiblingPayload<TNode>): void;
    hasChildren(payload: IHasChildrenPayload): boolean;
    nextSibling(payload: INextSiblingPayload): TNode;
    previousSibling(payload: IPreviousPayload): TNode;
}
