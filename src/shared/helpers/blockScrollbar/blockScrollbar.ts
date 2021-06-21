export function useBlockScrollbar(): void {
  (document.querySelector('body') as HTMLElement).style.overflowY = 'hidden';
}

export function useUnblockScrollbar(): void {
  (document.querySelector('body') as HTMLElement).style.overflowY = 'scroll';
}
