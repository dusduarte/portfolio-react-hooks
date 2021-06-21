import { ReactElement } from 'react';
import { Anchor, Category } from './menu.enum';

interface IItem {
  name: Category;
  icon: ReactElement | string;
  Anchor: Anchor;
}

export default IItem;
