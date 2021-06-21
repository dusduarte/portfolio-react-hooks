import { ReactElement } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import image from '../../assets/img/001.png';
import useStyle from './Biography.style';
import useParagraphStyle from '../../shared/styles/paragraph';

const Biography = (): ReactElement => {
  const classNames = useStyle();
  const paragraphStyle = useParagraphStyle();
  const theme = useTheme();

  const age = (): number => {
    const diff = Date.now() - (new Date('1993-11-25')).getTime();
    const ageTime = new Date(diff);
    return Math.abs(ageTime.getUTCFullYear() - 1970)
  }

  return (
    <ContainerCategorie
      customClass={classNames.root}
      color={theme.palette.primary.light}
      title={Category.Biography}
      id={Anchor.Biography}>

      <Grid item={true} xs={12} md={6}>
        <img src={image} alt="Eduardo Duarte Stanisci" />
      </Grid>

      <Grid
        item={true}
        xs={12}
        md={6}
        className={paragraphStyle.root}>
        <p>Nascido em São Paulo, {age()} anos, Eduardo Stanisci é filho de um engenheiro elétrico e de uma professora.
          Em sua vida despertou o interesse pelas áreas de tecnologia, artística, musical, matemática e jogos.</p>

        <p>Eduardo Stanisci começou a estudar programação próximo dos 9 anos, onde seu desejo era criar um
          site de dicas de jogos para os consoles Nintendo 64 e PlayStation 1, inclusive dos quais ama,
          chegou a finalizar o site mas não o publicou na internet porque exigia outros tipos de conhecimentos.</p>

        <p>Aos 16 anos, iniciou em um curso de técnico em informática e teve a oportunidade de fortificar seus
          conhecimentos, também foi um dos grandes passos que o incentivou a prosseguir para a faculdade e se formar.</p>
      </Grid>

    </ContainerCategorie>
  );
}

export default Biography;
