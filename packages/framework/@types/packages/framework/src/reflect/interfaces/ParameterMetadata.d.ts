import { CommentMetadata } from './CommentMetadata';
import { DecoratorMetadata } from './DecoratorMetadata';
export interface ParameterMetadata {
    name: string;
    type: string;
    optional: boolean;
    decorators?: DecoratorMetadata[];
    comments?: CommentMetadata[];
}
