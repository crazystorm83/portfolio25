import { AbsTree } from '../../../abstracts/entity/collection';
import { INode } from '../../../interfaces';

export abstract class BaseTree<
    TNode extends INode<TNode>,
> extends AbsTree<TNode> {}
