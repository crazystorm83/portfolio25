import { CommentMetadata, DecoratorMetadata, MemberMetadata } from '../interfaces';

export interface ClassMetadata {
    name: string;
    comments?: CommentMetadata[];
    decorators?: DecoratorMetadata[];
    heritage?: {
        extends: string[];
        implements: string[];
    };
    members: MemberMetadata[];
}
