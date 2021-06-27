import { ReactElement, useEffect, useState } from 'react';
import {
  Accordion, AccordionSummary, CircularProgress, Grid, List, ListItem, ListItemText, Typography, useTheme
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import image from '../../assets/img/007.png';
import useStyle from './Skills.style';
import { ISkill, ISkills } from './skills.interface';
import Urls from '../../env';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';

const Skills = (): ReactElement => {
  const theme = useTheme();
  const classNames = useStyle();
  const [data, setData] = useState<ISkills>({} as ISkills);
  const loaderStyle = useLoaderStyle();
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    customFetch(Urls.Skills)
      .then((resp: ISkills) => setData(resp))
      .finally(() => setLoader(false));
  }, []);

  return (
    <ContainerCategorie
      color={theme.palette.primary.light}
      title={Category.Skills}
      id={Anchor.Skills}
      customClass={classNames.root}
    >

      <Grid item={true} xs={12} md={6}>

        {!loader && data.skills && data.skills.map((resp: ISkill, index1: number) => (
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            key={`accordion-${index1}`}
          >

            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${index1 + 1}a-content`}
              id={`panel${index1 + 1}a-header`}
            >
              <label>{resp.title}</label>
            </AccordionSummary>

            <List dense={true}>
              {resp.items && resp.items.map((item: string, index2: number) => (
                <ListItem key={`item-${index1}-${index2}`}>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>

          </Accordion>
        ))}

        {loader && (
          <CircularProgress size={60} className={loaderStyle.root} />
        )}

      </Grid>

      <Grid item={true} xs={12} md={6}>
        <img
          src={image}
          alt={`Imagem de um robô redondo e dentro de um globo, possui 6 rodinhas 
        pequenas de veículo, também é possível apenas visualizar seus olhos amarelos
         de energia e possui bolinhas ligadas da cor azul em volta, bem semelhante
          a uma nave espacial.`}
        />
      </Grid>
    </ContainerCategorie>
  );
};

export default Skills;
