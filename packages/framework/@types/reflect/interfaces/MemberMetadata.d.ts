import { CommentMetadata, DecoratorMetadata, ParameterMetadata } from '../interfaces';
export interface MemberMetadata {
    kind: string;
    name: string;
    modifiers?: string[];
    type?: string;
    comments?: CommentMetadata[];
    parameters?: ParameterMetadata[];
    returnType?: string;
    decorators?: DecoratorMetadata[];
}
