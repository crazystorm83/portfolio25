type $$reDoPayload = {}
type $$reDoResult = {}

type $$undoPayload = {};
type $$undoResult = {};

interface $$convertTokenizePayload {
    data: string;
};
interface $$token<TTokenType> {
    type: TTokenType;
};

type $$baseTokenType = string;

enum markdownTokenType {
    HEADING = "HEADING",
    PARAGRAPH = "PARAGRAPH",
    BOLD = "BOLD",
    ITALIC = "ITALIC",
    STRIKE = "STRIKE",
    CODE = "CODE",
    BLOCKQUOTE = "BLOCKQUOTE",
    LIST = "LIST",
    LINK = "LINK",
    IMAGE = "IMAGE",
    TABLE = "TABLE",
    HORIZONTAL_RULE = "HORIZONTAL_RULE",
    LINE_BREAK = "LINE_BREAK"
}

export interface ITimecapsuleModule {
    reDo(payload: $$reDoPayload): $$reDoResult;
    reDoAsync(payload: $$reDoPayload): Promise<$$reDoResult>;
    undo(payload: $$undoPayload): $$undoResult;
    undoAsync(payload: $$undoPayload): Promise<$$undoResult>;
}

export interface ILexicalModule<TPayload extends $$convertTokenizePayload, TResult extends $$token<$$baseTokenType>> {
    convertTokenize(payload: TPayload): TResult[];
}

export interface ILexicalValidatorModule {
    startAsync(): Promise<void>;
}

export interface $$markdownToken extends $$token<markdownTokenType> {
    
};

export interface $$markdownViewParserPayload extends $$viewParserPayload<$$markdownToken> {
    
};

export interface $$viewParserPayload<TToken extends $$token<$$baseTokenType>> {
    tokens: TToken[];
};

export interface IViewParserModule {
    startAsync<TToken extends $$token<$$baseTokenType>>(payload: $$viewParserPayload<TToken>): Promise<void>;
}

export interface $$PayloadParserPayload {
    tokens: $$token<$$baseTokenType>[];
}

export interface IEditParserModule {
    startAsync(payload: $$PayloadParserPayload): Promise<void>;
}

export interface IShortCutModule {
    startAsync(): Promise<void>;
}

export interface IEditorApplication {
    startAsync(config: {
        lexicalModule: ILexicalModule<$$convertTokenizePayload, $$token<$$baseTokenType>>,
        lexicalValidatorModule: ILexicalValidatorModule,
        viewparserModule: IViewParserModule,
        editParserModule: IEditParserModule,
        timecapsuleModule?: ITimecapsuleModule,
        shortCutModule?: IShortCutModule,
    }): Promise<void>;
}

export class EditorApplication implements IEditorApplication {
    public async startAsync(config: {
        lexicalModule: ILexicalModule<$$convertTokenizePayload, $$token<$$baseTokenType>>,
        lexicalValidatorModule: ILexicalValidatorModule,
        viewparserModule: IViewParserModule,
        editParserModule: IEditParserModule,
        timecapsuleModule?: ITimecapsuleModule,
        shortCutModule?: IShortCutModule,
    }) {
        console.log('EditorApplication startAsync');
    }
}
