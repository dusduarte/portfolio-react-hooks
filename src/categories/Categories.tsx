import { useTheme } from '@material-ui/core';
import { ReactElement } from 'react';
import { ISections } from '../index';

const Categories = (props: { sections: ISections[] }): ReactElement => {
  const { sections } = props;
  const theme = useTheme();

  return (
    <>
      {sections.map((section: ISections, index:number):ReactElement => (
        index % 2
          ? section.component({ bgColor: theme.palette.primary.main })
          : section.component({ bgColor: theme.palette.primary.light })
      ))}
    </>
  );
};

export default Categories;
