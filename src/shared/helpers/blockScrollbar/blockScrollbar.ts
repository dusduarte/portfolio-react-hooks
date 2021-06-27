export function blockScrollbar(): void {
  (document.querySelector('body') as HTMLElement).style.overflowY = 'hidden';
}

export function unblockScrollbar(): void {
  (document.querySelector('body') as HTMLElement).style.overflowY = 'scroll';
}
