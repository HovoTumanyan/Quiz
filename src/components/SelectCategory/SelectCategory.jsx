import Button from '../Button/Button';
import './SelectCategory.css'
export default function SelectCategory({ switchMode, t,uniqueCategories,categoryFilter }) {
  return (
    <>
      <div className={`selectCategory ${switchMode ? 'dark' : ''}`}>
        <h1>{t('category')}</h1>
        <Button uniqueCategories={uniqueCategories} categoryFilter={categoryFilter}/>
      </div>
    </>
  );
}
