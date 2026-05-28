import { useEffect, FC, useState } from 'react';
import { getIngredientsApi } from '../../utils/burger-api';
import { TIngredient } from '@utils-types';
import { Preloader } from '@ui';

export const BurgerIngredients: FC = () => {
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);  // ← явно указываем тип
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIngredientsApi()
      .then((data) => {
        setIngredients(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <div>
      <h1>Соберите бургер</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {ingredients.map((ing) => (
          <div key={ing._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={ing.image} alt={ing.name} style={{ width: '100%' }} />
            <p>{ing.name}</p>
            <p>{ing.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};
