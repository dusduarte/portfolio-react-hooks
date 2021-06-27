const useScrollToElement = (anchor: string): void => {
  const element = document.querySelector(`#${anchor}`);
  const yOffset = -50;
  const y = (element as HTMLElement).getBoundingClientRect().top
    + window.pageYOffset
    + yOffset;

  setTimeout(() => {
    window.scrollTo({ top: y });
  }, 100);
};

export default useScrollToElement;
