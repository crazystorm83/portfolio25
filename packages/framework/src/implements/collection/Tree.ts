
import { throwException } from '../../exception';
import { TREE_ERROR } from '../../exception/message/TREE_ERROR';
import { $$node_sid, IAddChildrenNextSiblingPayload, IAddChildrenPrevSiblingPayload, IAddNextSiblingNodesPayload, IAddPreviousSiblingNodesPayload, IMoveNextSiblingNodePayload, IMovePreviousSiblingNodePayload, IMoveToChildrenNodePayload, INode, IRemoveChildrenNodeAtPayload, IRemoveNodePayload, IRemoveNodesPayload, IRootNode } from '../../interfaces';
import { BaseTree } from './base';

export class Tree<TNode extends INode<TNode>> extends BaseTree<TNode> {
    private __node_map: Map<$$node_sid, TNode | IRootNode<TNode>> = new Map();
    private __root_node: IRootNode<TNode> = { sid: 'root', parent_sid: null, children: [] };

    constructor() {
        super();
        this.__root_node = { sid: 'root', parent_sid: null, children: [] };
        this.__addNodeMap(this.__root_node);
    }

    addChildrenNode(node: TNode): void {
        const parent_node = this.__getOrThrow(node.parent_sid, true);
        parent_node.children.push(node);
        this.__addNodeMap(node);
    }
    addChildrenNextSibling(payload: IAddChildrenNextSiblingPayload<TNode>): void {
        const target_node = this.__getOrThrow(payload.target_sid, true);
        const parent_node = this.__getOrThrow(target_node.parent_sid, true);

        const target_node_index = parent_node.children.indexOf(target_node);
        parent_node.children.splice(target_node_index + 1, 0, payload.node);
        this.__addNodeMap(payload.node);
    }
    addChildrenPrevSibling(payload: IAddChildrenPrevSiblingPayload<TNode>): void {
        const target_node = this.__getOrThrow(payload.target_sid, true);
        const parent_node = this.__getOrThrow(target_node.parent_sid, true);

        const target_node_index = parent_node.children.indexOf(target_node);
        parent_node.children.splice(target_node_index - 1, 0, payload.node);
        this.__addNodeMap(payload.node);
    }
    addNextSiblingNodes(payload: IAddNextSiblingNodesPayload<TNode>): void {
        const node = this.__getOrThrow(payload.target_sid, true);
        const parent_node = this.__getOrThrow(node.parent_sid, true);

        const node_index = parent_node.children.indexOf(node);
        parent_node.children.splice(node_index + 1, 0, ...payload.nodes);
        for (const node of payload.nodes) {
            this.__addNodeMap(node);
        }
    }
    addPreviousSiblingNodes(payload: IAddPreviousSiblingNodesPayload<TNode>): void {
        const node = this.__getOrThrow(payload.target_sid, true);
        const parent_node = this.__getOrThrow(node.parent_sid, true);

        const node_index = parent_node.children.indexOf(node);
        parent_node.children.splice(node_index - 1, 0, ...payload.nodes);
        for (const node of payload.nodes) {
            this.__addNodeMap(node);
        }
    }
    removeNode(payload: IRemoveNodePayload): boolean {
        const node = this.__getOrThrow(payload.sid, true);
        const parent_node = this.__getOrThrow(node.parent_sid, true);

        const node_index = parent_node.children.indexOf(node);
        const removed_nodes = parent_node.children.splice(node_index, 1);
        for (const removed_node of removed_nodes) {
            for (const child_node of removed_node.children) {
                this.removeNode({ sid: child_node.sid });
            }
            this.__node_map.delete(removed_node.sid);
        }
        return true;
    }
    removeNodes(payload: IRemoveNodesPayload): boolean {
        for (const sid of payload.sids) {
            this.removeNode({ sid: sid });
        }
        return true;
    }
    removeChildrenNodeAt(payload: IRemoveChildrenNodeAtPayload): boolean {
        const parent_node = this.__getOrThrow(payload.parent_sid, true);
        const removed_nodes = parent_node.children.splice(payload.children_index, 1);
        for (const removed_node of removed_nodes) {
            for (const child_node of removed_node.children) {
                this.removeNode({ sid: child_node.sid });
            }
            this.__node_map.delete(removed_node.sid);
        }
        return true;
    }
    moveNextSiblingNode(payload: IMoveNextSiblingNodePayload): void {
        const from_node = this.__getOrThrow(payload.from_sid, true);
        const to_node = this.__getOrThrow(payload.to_sid, true);
        const from_parent_node = this.__getOrThrow(from_node.parent_sid, true);
        const to_parent_node = this.__getOrThrow(to_node.parent_sid, true);

        if (from_node.parent_sid !== to_node.parent_sid) {
            from_node.parent_sid = to_node.parent_sid;
        }

        const from_node_index = from_parent_node.children.indexOf(from_node);
        from_parent_node.children.splice(from_node_index, 1);

        const to_node_index = to_parent_node.children.indexOf(to_node);
        to_parent_node.children.splice(to_node_index + 1, 0, from_node);
    }
    movePreviousSiblingNode(payload: IMovePreviousSiblingNodePayload): void {
        const from_node = this.__getOrThrow(payload.from_sid, true);
        const to_node = this.__getOrThrow(payload.to_sid, true);
        const from_parent_node = this.__getOrThrow(from_node.parent_sid, true);
        const to_parent_node = this.__getOrThrow(to_node.parent_sid, true);

        if (from_node.parent_sid !== to_node.parent_sid) {
            from_node.parent_sid = to_node.parent_sid;
        }
        
        const from_node_index = from_parent_node.children.indexOf(from_node);
        from_parent_node.children.splice(from_node_index, 1);

        const to_node_index = to_parent_node.children.indexOf(to_node);
        to_parent_node.children.splice(to_node_index, 0, from_node);
    }
    /**
     * from_sid 의 노드를 to_sid 의 자식노드로 이동
     * @param payload 
     */
    moveToChildrenNode(payload: IMoveToChildrenNodePayload): void {
        const from_node = this.__getOrThrow(payload.from_sid, true);
        const to_node = this.__getOrThrow(payload.to_sid, true);
        const from_parent_node = this.__getOrThrow(from_node.parent_sid, true);
        
        from_node.parent_sid = to_node.sid;

        const from_node_index = from_parent_node.children.indexOf(from_node);
        from_parent_node.children.splice(from_node_index, 1);

        to_node.children.push(from_node);
    }
    hasNode(sid: $$node_sid): boolean {
        return !!this.__get(sid, true);
    }
    hasChildrenNode(sid: $$node_sid): boolean {
        const node = this.__getOrThrow(sid, true);
        return node.children.length > 0;
    }
    getNode(sid: $$node_sid): Readonly<TNode> | undefined {
        return this.__get(sid, false);
    }
    getNodeOrThrow(sid: $$node_sid): Readonly<TNode> {
        return this.__getOrThrow(sid, false);
    }
    getChildrenNodes(sid: $$node_sid): Readonly<TNode>[] {
        const node = this.__getOrThrow(sid, true);
        return node.children;
    }
    getNextSiblingNode(sid: $$node_sid): Readonly<TNode> {
        const node = this.__getOrThrow(sid, true);
        const parent_node = this.__getOrThrow(node.parent_sid, true);

        const node_index = parent_node.children.indexOf(node);
        return parent_node.children[node_index + 1];
    }
    getPreviousSiblingNode(sid: $$node_sid): Readonly<TNode> {
        const node = this.__getOrThrow(sid, true);
        const parent_node = this.__getOrThrow(node.parent_sid, true);

        const node_index = parent_node.children.indexOf(node);
        return parent_node.children[node_index - 1];
    }

    __get(sid: $$node_sid, condition?: boolean): TNode | undefined {
        const node = this.__node_map.get(sid);
        if (this.__isRootNode(node)) {
            throwException({
                type: 'RootNodeAccessError',
                message: TREE_ERROR.ROOT_NODE_ACCESS_ERROR
            }, condition);
        }
        return node as Readonly<TNode> | undefined;
    }
    __getOrThrow(sid: $$node_sid, condition?: boolean): TNode {
        const node = this.__get(sid, condition);
        if (!node) {
            throwException({
                type: 'NodeNotFoundError',
                message: TREE_ERROR.NODE_NOT_FOUND
            }, condition);
        }
        return node as TNode;
    }
    __addNodeMap(node: TNode | IRootNode<TNode>): void {
        this.__node_map.set(node.sid, node);
    }

    __isRootNode(node: TNode | IRootNode<TNode> | undefined): node is IRootNode<TNode> {
        return node?.parent_sid === null;
    }
}
