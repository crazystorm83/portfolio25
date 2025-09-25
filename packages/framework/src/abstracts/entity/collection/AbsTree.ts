import { Disposable } from '../../../implements/dispose/Disposable';
import {
    $$node_sid,
    IAddChildrenNextSiblingPayload,
    IAddChildrenPrevSiblingPayload,
    IAddNextSiblingNodesPayload,
    IAddPreviousSiblingNodesPayload,
    IMoveNextSiblingNodePayload,
    IMovePreviousSiblingNodePayload,
    IMoveToChildrenNodePayload,
    INode,
    IRemoveNodePayload,
    IRemoveNodesPayload,
    ITree,
} from '../../../interfaces/entity/ITree';

export abstract class AbsTree<TNode extends INode<TNode>>
    extends Disposable
    implements ITree<TNode>
{
    abstract addChildrenNode(node: TNode): void;
    abstract addChildrenNextSibling(
        payload: IAddChildrenNextSiblingPayload<TNode>,
    ): void;
    abstract addChildrenPrevSibling(
        payload: IAddChildrenPrevSiblingPayload<TNode>,
    ): void;
    abstract addNextSiblingNodes(
        payload: IAddNextSiblingNodesPayload<TNode>,
    ): void;
    abstract addPreviousSiblingNodes(
        payload: IAddPreviousSiblingNodesPayload<TNode>,
    ): void;
    abstract removeNode(payload: IRemoveNodePayload): boolean;
    abstract removeNodes(payload: IRemoveNodesPayload): boolean;
    abstract moveToChildrenNode(payload: IMoveToChildrenNodePayload): void;
    abstract moveNextSiblingNode(payload: IMoveNextSiblingNodePayload): void;
    abstract movePreviousSiblingNode(
        payload: IMovePreviousSiblingNodePayload,
    ): void;
    abstract hasNode(sid: $$node_sid): boolean;
    abstract hasChildrenNode(sid: $$node_sid): boolean;
    abstract getChildrenNodes(sid: $$node_sid): Readonly<TNode>[];

    abstract getNextSiblingNode(sid: $$node_sid): Readonly<TNode>;
    abstract getPreviousSiblingNode(sid: $$node_sid): Readonly<TNode>;

    dispose(): void {
        throw new Error('Method not implemented.');
    }
}
