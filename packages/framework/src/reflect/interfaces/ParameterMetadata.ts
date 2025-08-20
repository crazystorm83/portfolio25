import { CommentMetadata, DecoratorMetadata } from '../interfaces';

export interface ParameterMetadata {
    name: string;
    type: string;
    optional: boolean;
    decorators?: DecoratorMetadata[];
    comments?: CommentMetadata[];
}
