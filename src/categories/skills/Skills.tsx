
import PrimaryTheme from '../../shared/themes/primary-theme';
import { CategorieContainer } from './../../shared/components/categorie-container/CategorieContainer';

function Skills() {
  return (
    <CategorieContainer
      title='habilidades'
      titleColor='#FFF'
      colorFirstLetter={PrimaryTheme.Pink}
      background={PrimaryTheme.NavyBlue}
    >
      <div>teste</div>
    </CategorieContainer>
  );
}

export default Skills;
