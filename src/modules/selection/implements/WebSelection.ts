import { IWebSelection, IWebSelectionData } from '../interfaces';

export class WebSelection implements IWebSelectionData, IWebSelection {
    private _isSelecting: boolean = false;
    private _startNode: HTMLElement | null = null;
    private _startOffset: number = 0;
    private _endNode: HTMLElement | null = null;
    private _endOffset: number = 0;
    private _selectedText: string = '';
    private _highlights: HTMLDivElement[] = [];

    private _selection: HTMLDivElement;

    constructor(protected _configuration: { containerSelector: string }) {
        this._selection = document.createElement('div');
        this._selection.className = 'selection';
        this._selection.style.position = 'absolute';
        document.body.appendChild(this._selection);

        this.clear();
    }

    //#region IWebSelectionData

    set isSelecting(value: boolean) {
        this._isSelecting = value;
    }
    get isSelecting(): boolean {
        return this._isSelecting;
    }
    set startNode(value: HTMLElement | null) {
        this._startNode = value;
    }
    get startNode(): HTMLElement | null {
        return this._startNode;
    }
    set startOffset(value: number) {
        this._startOffset = value;
    }
    get startOffset(): number {
        return this._startOffset;
    }
    set endNode(value: HTMLElement | null) {
        this._endNode = value;
    }
    get endNode(): HTMLElement | null {
        return this._endNode;
    }
    set endOffset(value: number) {
        this._endOffset = value;
    }
    get endOffset(): number {
        return this._endOffset;
    }
    set selectedText(value: string) {
        this._selectedText = value;
    }
    get selectedText(): string {
        return this._selectedText;
    }
    set highlights(value: HTMLDivElement[]) {
        this._highlights = value;
    }
    get highlights(): HTMLDivElement[] {
        return this._highlights;
    }

    //#endregion

    start(node: HTMLElement, offset: number): void {
        this._isSelecting = true;
        this._startNode = node;
        this._startOffset = offset;
        this._endNode = node;
        this._endOffset = offset;
        this.clearHighlight();
    }
    update(node: HTMLElement, offset: number): void {
        if (!this._isSelecting) {
            return;
        }

        this._endNode = node;
        this._endOffset = offset;
        this.clearHighlight();
        this.highlightSelection();
        this.updateSelectedText();
    }
    end(): void {
        this.isSelecting = false;
        if (this.selectedText) {
            this.showSelection();
        }
    }
    highlightSelection(): void {
        if (
            this.startNode === this.endNode &&
            this.startNode?.nodeType === Node.TEXT_NODE
        ) {
            const range = document.createRange();
            const startOffset = Math.min(this.startOffset, this.endOffset);
            const endOffset = Math.max(this.startOffset, this.endOffset);

            range.setStart(this.startNode, startOffset);
            range.setEnd(this.startNode, endOffset);

            const rect = range.getBoundingClientRect();
            const container = document.querySelector(
                this._configuration.containerSelector
            );
            if (!container) {
                throw new Error('container selector is not set');
            }
            const containerRect = container.getBoundingClientRect();

            const highlight = document.createElement('div');
            highlight.className = 'highlight';
            highlight.style.position = 'absolute';
            highlight.style.left = `${rect.left - containerRect.left}px`;
            highlight.style.top = `${rect.top - containerRect.top}px`;
            highlight.style.width = `${rect.width}px`;
            highlight.style.height = `${rect.height}px`;

            container.appendChild(highlight);
            this.highlights.push(highlight);
        }
    }
    clearHighlight(): void {
        this.highlights.forEach((highlight) => {
            highlight.remove();
        });
        this.highlights = [];
    }
    updateSelectedText(): void {
        if (!this.startNode || !this.startNode.nodeValue) {
            return;
        }

        if (
            this.startNode === this.endNode &&
            this.startNode.nodeType === Node.TEXT_NODE
        ) {
            const startOffset = Math.min(this.startOffset, this.endOffset);
            const endOffset = Math.max(this.startOffset, this.endOffset);
            this.selectedText = this.startNode.nodeValue.substring(
                startOffset,
                endOffset
            );
        }
    }
    showSelection(): void {
        const lastHighlight = this.highlights[this.highlights.length - 1];
        if (!lastHighlight) {
            return;
        }

        const container = document.querySelector(
            this._configuration.containerSelector
        );
        if (!container) {
            throw new Error('container selector is not set');
        }
        const containerRect = container.getBoundingClientRect();
        const highlightRect = lastHighlight.getBoundingClientRect();

        // contextmenu 위치 설정
        this._selection.style.left = `${
            highlightRect.left - containerRect.left
        }px`;
        this._selection.style.top = `${
            highlightRect.top - containerRect.top
        }px`;
    }
    hideSelection(): void {
        this._selection.style.display = 'none';
    }
    getText(): string {
        return this._selectedText;
    }
    clear(): void {
        this._isSelecting = false;
        this._startNode = null;
        this._startOffset = 0;
        this._endNode = null;
        this._endOffset = 0;
        this._selectedText = '';
        this._highlights = [];

        this.clearHighlight();
        this.hideSelection();
    }
}
