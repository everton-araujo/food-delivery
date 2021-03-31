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

export const DotContainer = styled.View`
  height: 30px;
`;

export const Dots = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10px;
`;

export const OrderBackground = styled.View`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #FFF;
`;

export const OrderCartItems = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-color: #F6F6F7;
  border-bottom-width: 1.5px;
`;

export const OrderCartItemsText = styled.Text`
  font-size: 20px;
  line-height: 22px;
  margin-left: 10px;
`;

export const OrderLocationCreditCardSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 5px;
`;

export const LocationCreditCardText = styled.Text`
  margin-left: 10px;
  margin-top: -3px;
  font-size: 18px;
`;

export const OrderButton = styled.TouchableOpacity`
  width: ${width * 0.9}px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 30px;
  background: #FC6D3F;
`;

export const OrderButtonText = styled.Text`
  font-size: 22px;
  line-height: 30px;
  color: #FFF;
`;

export const IphoneView = styled.View`
  position: absolute;
  bottom: -34px;
  left: 0px;
  right: 0px;
  height: 34px;
  background: #FFF;
`;
