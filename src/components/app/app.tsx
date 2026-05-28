import { useEffect, useState } from 'react';
import { getIngredientsApi } from '../../utils/burger-api';
import { TIngredient } from '@utils-types';
import { ConstructorPage } from '@pages';
import { AppHeader } from '@components';
import { Preloader } from '@ui';
import styles from './app.module.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getIngredientsApi()
      .then((data) => {
        setIngredients(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <div className={`${styles.error} text text_type_main-medium pt-4`}>
          {error}
        </div>
      ) : ingredients.length > 0 ? (
        <ConstructorPage />
      ) : (
        <div className={`${styles.title} text text_type_main-medium pt-4`}>
          Нет ингредиентов
        </div>
      )}
    </div>
  );
};

export default App;
