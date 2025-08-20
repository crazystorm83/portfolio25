import { CommentMetadata } from './CommentMetadata';
import { ParameterMetadata } from './ParameterMetadata';
import { DecoratorMetadata } from './DecoratorMetadata';
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
//# sourceMappingURL=MemberMetadata.d.ts.map