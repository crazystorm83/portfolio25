import { $$null, $$txt } from '../../../datatypes';
import { ITree } from '../../../interfaces/entity/ITree';

export type $$root_node_sid = $$null;
export type $$node_sid = $$txt | $$root_node_sid;

export interface INode {
    parent_sid: $$node_sid;
    sid: $$node_sid;

    value: $$txt;
    label: $$txt;
}

export interface IAddPayload<TNode extends INode> {
    parent_sid: $$node_sid;

    node: TNode;
}

export interface IAddNextSibling<TNode extends INode> {
    target_sid: $$node_sid;

    node: TNode;
}

export interface IAddPrevSibling<TNode extends INode> {
    target_sid: $$node_sid;

    node: TNode;
}

export interface IRemovePayload {
    sid: $$node_sid;
}

export interface IMovePayload {
    from_sid: $$node_sid;
    to_sid: $$node_sid;
}

export interface IAddChildrenPayload<TNode extends INode> {
    parent_sid: $$node_sid;

    node: TNode;
}

export interface IAddChildrenNextSiblingPayload<TNode extends INode> {
    parent_sid: $$node_sid;
    children_sid: $$node_sid;

    node: TNode;
}

export interface IAddChildrenPrevSiblingPayload<TNode extends INode> {
    parent_sid: $$node_sid;
    children_sid: $$node_sid;

    node: TNode;
}

export interface IHasChildrenPayload {
    sid: $$node_sid;
}

export interface INextSiblingPayload {
    sid: $$node_sid;
}

export interface IPreviousPayload {
    sid: $$node_sid;
}

export abstract class AbsTree<TNode extends INode> implements ITree {
    abstract addNode(payload: IAddPayload<TNode>): void;
    abstract addNextSibling(payload: IAddNextSibling<TNode>): void;
    abstract addPrevSibling(payload: IAddPrevSibling<TNode>): void;
    abstract removeNode(payload: IRemovePayload): boolean;
    abstract moveNode(payload: IMovePayload): void;

    abstract addChildrenNode(payload: IAddChildrenPayload<TNode>): void;
    abstract addChildrenNextSibling(
        payload: IAddChildrenNextSiblingPayload<TNode>
    ): void;
    abstract addChildrenPrevSibling(
        payload: IAddChildrenPrevSiblingPayload<TNode>
    ): void;
    abstract hasChildren(payload: IHasChildrenPayload): boolean;

    abstract nextSibling(payload: INextSiblingPayload): TNode;
    abstract previousSibling(payload: IPreviousPayload): TNode;
}
