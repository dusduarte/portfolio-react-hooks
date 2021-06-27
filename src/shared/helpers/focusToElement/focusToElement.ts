const focusToElement = (anchor: string): void => {
  const element: HTMLElement = document.querySelector(anchor) as HTMLElement;
  element.focus();
};

export default focusToElement;
