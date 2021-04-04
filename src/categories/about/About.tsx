import { CategorieContainer } from './../../shared/components/categorie-container/CategorieContainer';
import PrimaryTheme from '../../shared/themes/primary-theme';

function About() {
  return (
    <CategorieContainer
      title='sobre'
      titleColor='#000'
      colorFirstLetter={PrimaryTheme.LightBlue}
      marginTop='130px'
    >
      <div>teste</div>
    </CategorieContainer>
  );
}

export default About;
