import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated
} from 'react-native';

import { isIphoneX } from 'react-native-iphone-x-helper';

import { icons, COLORS, SIZES, FONTS } from '../../constants';

import { 
  Container,
  GoBackButton, 
  GoBackImage, 
  RestaurantNameSection,
  RestaurantNameBorder,
  RestaurantNameText,
  RestaurantMenuButton,
  RestaurantMenuButtonImage,
  FoodImage,
  FoodQuantitySection,
  FoodQuantityRemoveButton,
  FoodQuantity,
  FoodQuantityAddButton,
  DescriptionSection,
  FoodNamePrice,
  CaloriesSection,
  CaloriesImage,
  Calories,
  DotContainer,
  Dots,
  OrderBackground,
  OrderCartItems,
  OrderCartItemsText,
  OrderLocationCreditCardSection,
  LocationCreditCardText,
  OrderButton,
  OrderButtonText,
  IphoneView
} from './styles';

const Restaurant = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);

  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, []);

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId == menuId);

    if (action == '+') {

      if (item.length > 0) {
        let newQuantity = item[0].quantity + 1;
        item[0].quantity = newQuantity;
        item[0].total = item[0].quantity * price;
      } else {
        const newItem = {
          menuId: menuId,
          quantity: 1,
          price: price,
          total: price
        }
        orderList.push(newItem);
      }
      return setOrderItems(orderList);
    }

    if (item.length > 0 && item[0]?.quantity > 0) {
      let newQuantity = item[0].quantity - 1;
      item[0].quantity = newQuantity;
      item[0].total = newQuantity * price;
    }

    setOrderItems(orderList);
  }

  function getOrderQuantity(menuId) {
    let orderItem = orderItems.filter(a => a.menuId);

    if (orderItem.length > 0) {
      return orderItem[0].quantity;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.quantity || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  }

  function renderHeader() {
    return (
      <Container>
        <GoBackButton onPress={() => navigation.goBack()}>
          <GoBackImage source={icons.back} />
        </GoBackButton>

        {/* Restaurant Name Section */}
        <RestaurantNameSection>
          <RestaurantNameBorder>
            <RestaurantNameText>{restaurant?.name}</RestaurantNameText>
          </RestaurantNameBorder>
        </RestaurantNameSection>

        <RestaurantMenuButton onPress={() => {}}>
          <RestaurantMenuButtonImage source={icons.list} />
        </RestaurantMenuButton>
      </Container>
    );
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ], { useNativeDriver: false })}
      >
        {
          restaurant?.menu.map((item, index) => (
            <View
              key={`menu-${index}`}
              style={{ alignItems: 'center'}}
            >
              <View style={{ height: SIZES.height * 0.35 }}>
                {/* Food Image */}
                <FoodImage source={item.photo} />

                {/* Quantity */}
                <FoodQuantitySection>
                  <FoodQuantityRemoveButton
                    onPress={() => editOrder("-", item.menuId, item.price)}
                  >
                    <Text style={{ fontSize: 40, marginTop: -5 }}>-</Text>
                  </FoodQuantityRemoveButton>

                  <FoodQuantity>
                    <Text style={{ ...FONTS.h2 }}>{getOrderQuantity(item.menuId)}</Text>
                  </FoodQuantity>

                  <FoodQuantityAddButton
                    onPress={() => editOrder("+", item.menuId, item.price)}
                  >
                    <Text style={{ fontSize: 30 }}>+</Text>
                  </FoodQuantityAddButton>
                </FoodQuantitySection>
              </View>

              {/* Description */}
              <DescriptionSection>
                <FoodNamePrice>
                  {item.name} - {item.price.toFixed(2)}
                </FoodNamePrice>
                <Text style={{ fontSize: 16 }}>
                  {item.description}
                </Text>
              </DescriptionSection>

              {/* Calories */}
              <CaloriesSection>
                <CaloriesImage source={icons.fire} />

                <Calories>
                  {item.calories.toFixed(2)}
                </Calories>
              </CaloriesSection>
            </View>
          ))
        }
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <DotContainer>
        <Dots>
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp'
            });
            
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10 ,SIZES.base * 0.8],
              extrapolate: 'clamp'
            });
            
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: 'clamp'
            });

            return (
              <Animated.View 
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor
                }}
              />
            );
          })}
        </Dots>
      </DotContainer>
    );
  }

  function renderOrder() {
    return (
      <View>
        {renderDots()}

        <OrderBackground>
          <OrderCartItems>
            <OrderCartItemsText>{getBasketItemCount()} items in cart</OrderCartItemsText>
            <OrderCartItemsText>${sumOrder()}</OrderCartItemsText>
          </OrderCartItems>

          <OrderLocationCreditCardSection>
            <View style={{ flexDirection: 'row' }}>
              <Image 
                source={icons.pin}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray
                }}
              />
              <LocationCreditCardText>Location</LocationCreditCardText>
            </View>

            <View style={{ flexDirection: 'row'}}>
                <Image 
                  source={icons.master_card}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.darkgray
                  }}
                />
                <LocationCreditCardText>8888</LocationCreditCardText>
            </View>
          </OrderLocationCreditCardSection>

          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <OrderButton
              onPress={() => navigation.navigate('OrderDelivery', {
                restaurant: restaurant,
                currentLocation: currentLocation
              })}
            >
              <OrderButtonText>Order</OrderButtonText>
            </OrderButton>
          </View>
        </OrderBackground>

        {
          isIphoneX() && <IphoneView></IphoneView>
        }
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2
  }
})

export default Restaurant;
