import { CommentMetadata } from './CommentMetadata';
import { DecoratorMetadata } from './DecoratorMetadata';
import { MemberMetadata } from './MemberMetadata';

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
