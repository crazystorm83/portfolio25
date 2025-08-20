export interface CommentMetadata {
    kind: 'single' | 'multi' | 'jsdoc';
    text: string;
    range: {
        start: number;
        end: number;
    };
    tags?: Array<{
        tag: string;
        text: string;
    }>;
}
