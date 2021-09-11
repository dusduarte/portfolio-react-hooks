import { ReactElement } from 'react';
import { Anchor, Category } from './Menu.enum';

interface IItem {
  name: Category;
  icon: ReactElement | string;
  anchor: Anchor;
}

export default IItem;
