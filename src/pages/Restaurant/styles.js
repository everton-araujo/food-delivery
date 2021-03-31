import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Header
export const Container = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 50px;
  padding-left: 20px;
  justify-content: center;
`;

export const GoBackImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const RestaurantNameSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RestaurantNameBorder = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 25px;
  padding-left: 25px;
  border-radius: 30px;
  background: #EFEFF1;
`;

export const RestaurantNameText = styled.Text`
  font-size: 20px;
`;

export const RestaurantMenuButton = styled.TouchableOpacity`
  padding-right: 20px;
  justify-content: center;
`;

export const RestaurantMenuButtonImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const FoodImage = styled.Image`
  width: ${width}px;
  height: 100%;
`;

export const FoodQuantitySection = styled.View`
  position: absolute;
  bottom: -25px;
  width: ${width}px;
  height: 50px;
  justify-content: center;
  flex-direction: row;
`;

export const FoodQuantityRemoveButton = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background: #FFF;
`;

export const FoodQuantityAddButton = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #FFF;
`;

export const FoodQuantity = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
  background: #FFF;
`;

export const DescriptionSection = styled.View`
  width: ${width}px;
  align-items: center;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FoodNamePrice = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 22px;
`;

export const CaloriesSection = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const CaloriesImage = styled.Image`
   width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Calories = styled.Text`
  font-size: 16px;
  color: #898C95;
`;
