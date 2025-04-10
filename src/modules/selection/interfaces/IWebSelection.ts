export interface IWebSelection {
    // 선택 시작
    start(node: HTMLElement, offset: number): void;
    // 선택 업데이트
    update(node: HTMLElement, offset: number): void;
    // 선택 종료
    end(): void;
    // 선택 영역 시각화
    highlightSelection(): void;
    // 선택 영역 제거
    clearHighlight(): void;
    // 선택된 텍스트 업데이트
    updateSelectedText(): void;
    // 선택 메뉴 표시
    showSelection(): void;
    // 선택 메뉴 숨기기
    hideSelection(): void;
    // 선택 영역 텍스트 가져오기
    getText(): string;
    // 선택 영역 초기화
    clear(): void;
}
