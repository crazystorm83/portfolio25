import { $$null, $$txt } from "../../datatypes";

export type $$root_node_sid = $$null;
export type $$node_sid = $$txt | $$root_node_sid;

export type IRootNode<TNode extends INode<TNode>> = {
    parent_sid: $$root_node_sid;
    sid: $$node_sid;

    children: INode<TNode>[];
}

export interface INode<TNode extends INode<TNode>> {
    parent_sid: $$node_sid;
    sid: $$node_sid;

    value?: $$txt;
    label?: $$txt;

    children: TNode[];
}

export interface IAddNodePayload<TNode extends INode<TNode>> {
    parent_sid: $$node_sid;

    node: TNode;
}

export interface IAddNextSiblingNodesPayload<TNode extends INode<TNode>> {
    target_sid: $$node_sid;

    nodes: TNode[];
}

export interface IAddPreviousSiblingNodesPayload<TNode extends INode<TNode>> {
    target_sid: $$node_sid;

    nodes: TNode[];
}

export interface IRemoveNodePayload {
    sid: $$node_sid;
}

export interface IRemoveNodesPayload {
    sids: $$node_sid[];
}

export interface IRemoveChildrenNodeAtPayload {
    parent_sid: $$node_sid;
    children_index: number;
}

export interface IMoveToChildrenNodePayload {
    from_sid: $$node_sid;
    to_sid: $$node_sid;
}

export interface IMoveNextSiblingNodePayload {
    from_sid: $$node_sid;
    to_sid: $$node_sid;
}

export interface IMovePreviousSiblingNodePayload {
    from_sid: $$node_sid;
    to_sid: $$node_sid;
}

export interface IAddChildrenPayload<TNode extends INode<TNode>> {
    node: TNode;
}

export interface IAddChildrenNextSiblingPayload<TNode extends INode<TNode>> {
    target_sid: $$node_sid;

    node: TNode;
}

export interface IAddChildrenPrevSiblingPayload<TNode extends INode<TNode>> {
    target_sid: $$node_sid;

    node: TNode;
}

export interface IHasNodePayload {
    sid: $$node_sid;
}

export interface IHasChildrenNodePayload {
    sid: $$node_sid;
}

export interface IGetNextSiblingPayload {
    sid: $$node_sid;
}

export interface IGetPreviousSiblingPayload {
    sid: $$node_sid;
}

export interface ITree<TNode extends INode<TNode>> {
    /**
     * parent_sid 의 마지막 노드에 노드 추가하기
     * @param payload 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children2', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children3', children: [] });
     * ```
     */
    addChildrenNode(node: TNode): void;
    /**
     * 제공한 sid 의 다음 노드 추가하기
     * @param payload 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * tree.addChildrenNextSibling({ target_sid: 'children1', node: { parent_sid: null, sid: 'children2', children: [] } });
     * ```
     */
    addChildrenNextSibling(payload: IAddChildrenNextSiblingPayload<TNode>): void;
    /**
     * 제공한 sid 의 이전 노드 추가하기
     * @param payload 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * tree.addChildrenPrevSibling({ target_sid: 'children1', node: { parent_sid: null, sid: 'children2', children: [] } });
     * ```
     */
    addChildrenPrevSibling(payload: IAddChildrenPrevSiblingPayload<TNode>): void;
    /**
     * 트리에 노드 추가하기
     * @param payload 
     */
    addNextSiblingNodes(payload: IAddNextSiblingNodesPayload<TNode>): void;
    /**
     * 트리에 노드 추가하기
     * @param payload 
     */
    addPreviousSiblingNodes(payload: IAddPreviousSiblingNodesPayload<TNode>): void;
    /**
     * 트리에서 노드 제거하기
     * @param payload 
     */
    removeNode(payload: IRemoveNodePayload): void;
    /**
     * 트리에서 노드 제거하기
     * @param payload 
     */
    removeNodes(payload: IRemoveNodesPayload): void;
    /**
     * from_sid 의 노드를 to_sid 의 자식노드로 이동
     * @param payload 
     */
    moveToChildrenNode(payload: IMoveToChildrenNodePayload): void
    /**
     * from_sid 의 다음 노드를 to_sid 의 다음 노드에 추가하기
     * @param payload 
     */
    moveNextSiblingNode(payload: IMoveNextSiblingNodePayload): void;
    /**
     * from_sid 의 이전 노드를 to_sid 의 이전 노드에 추가하기
     * @param payload 
     */
    movePreviousSiblingNode(payload: IMovePreviousSiblingNodePayload): void;
    /**
     * 트리에 노드 존재 여부 확인하기
     * @param sid 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * console.log(tree.hasNode('children1'));
     * ```
     */
    hasNode(sid: $$node_sid): boolean;
    /**
     * 트리에 노드 추가하기
     * @param sid 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * console.log(tree.hasChildrenNode('children1'));
     * ```
     */
    hasChildrenNode(sid: $$node_sid): boolean;
    /**
     * 트리에서 노드의 자식 노드 가져오기
     * @param sid 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children2', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children3', children: [] });
     * console.log(tree.getChildrenNodes(null));
     * ```
     */
    getChildrenNodes(sid: $$node_sid): Readonly<TNode>[]
    /**
     * sid 의 다음 노드 가져오기
     * @param sid 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children2', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children3', children: [] });
     * console.log(tree.getNextSibling('children1'));
     * ```
     */
    getNextSiblingNode(sid: $$node_sid): Readonly<TNode>;
    /**
     * sid 의 이전 노드 가져오기
     * @param sid 
     * @example
     * ```typescript
     * const tree = new Tree<INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: INode<{ parent_sid: $$node_sid; sid: $$node_sid; children: any[] }>[] }>>();
     * tree.addChildrenNode({ parent_sid: null, sid: 'children1', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children2', children: [] });
     * tree.addChildrenNode({ parent_sid: null, sid: 'children3', children: [] });
     * console.log(tree.getPreviousSibling('children1'));
     * ```
     */
    getPreviousSiblingNode(sid: $$node_sid): Readonly<TNode>;
}