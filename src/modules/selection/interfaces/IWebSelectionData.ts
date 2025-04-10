export interface IWebSelectionData {
    set isSelecting(value: boolean);
    get isSelecting(): boolean;

    set startNode(value: HTMLElement | null);
    get startNode(): HTMLElement | null;

    set startOffset(value: number);
    get startOffset(): number;

    set endNode(value: HTMLElement | null);
    get endNode(): HTMLElement | null;

    set endOffset(value: number);
    get endOffset(): number;

    set selectedText(value: string);
    get selectedText(): string;

    set highlights(value: HTMLDivElement[]);
    get highlights(): HTMLDivElement[];
}
