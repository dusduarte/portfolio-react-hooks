const useScrollToElement = (anchor: string): void => {
  const element = document.querySelector(`#${anchor}`);
  const yOffset = -50;
  const y =
    (element as HTMLElement).getBoundingClientRect().top +
    window.pageYOffset +
    yOffset;
  window.scrollTo({ top: y });
}

export default useScrollToElement;
