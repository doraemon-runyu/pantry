import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles/itemDetails';
import {ingredients} from './data/ingredients';

const findIngredient = itemName => {
  let ingredient = ingredients.find(ing => ing.name === itemName);

  if (!ingredient) {
    for (let item of ingredients) {
      if (
        item.subItems &&
        item.subItems.some(subItem => subItem.name === itemName)
      ) {
        ingredient = item;
        break;
      }
    }
  }

  return ingredient;
};

const ItemDetails = ({route}) => {
  const item = route.params?.item || null;
  const userItems = route.params?.userItems || [];

  const ingredient = item ? findIngredient(item.name) : null;
  const itemImage = ingredient ? ingredient.img : null;

  const findCompatibleUserItems = () => {
    const ingredient = ingredients.find(ing => ing.name === item?.name);

    const compatibles = ingredient?.compatibles || [];

    return compatibles.filter(compatibleItemName =>
      userItems.some(userItem => userItem.name === compatibleItemName),
    );
  };

  const compatibleUserItems = findCompatibleUserItems();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={itemImage} style={styles.background} />
        <Text style={styles.headerText}>{item?.name}</Text>
      </View>
      <Text style={styles.compatibleHeader}>Storage Tips:</Text>

      <Text style={styles.storageTipText}>{item?.storage_tip}</Text>

      {ingredient?.techniques && (
        <View>
          <Text style={styles.techniquesHeader}>Cooking Techniques:</Text>
          <Text style={styles.techniquesText}>{ingredient.techniques}</Text>
        </View>
      )}

      {compatibleUserItems && (
        <View>
          <Text style={styles.compatibleHeader}>Your Compatible Items:</Text>
          {compatibleUserItems.length > 0 ? (
            compatibleUserItems.map((compatibleItem, index) => (
              <Text key={index} style={styles.compatibleItem}>
                {compatibleItem}
              </Text>
            ))
          ) : (
            <Text style={styles.noCompatibleItem}>
              No compatible items found.
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default ItemDetails;
