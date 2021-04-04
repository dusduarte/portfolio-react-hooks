
import PrimaryTheme from '../../shared/themes/primary-theme';
import { CategorieContainer } from './../../shared/components/categorie-container/CategorieContainer';

function Portfolio() {
  return (
    <CategorieContainer
      title='portfólio'
      titleColor='#000'
      colorFirstLetter={PrimaryTheme.Blue}
    >
      <div>teste</div>
    </CategorieContainer>
  );
}

export default Portfolio;
