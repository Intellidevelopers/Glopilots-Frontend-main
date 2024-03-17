import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import OrdersItem from './components/OrdersItem';
import { Divider } from 'react-native-paper';
import SupportMessageItem from './components/SupportMessageItem';
import DeliveryAllTopicItem from './components/DeliveryAllTopicItem';
import {
  DELIVERY_ALL_TOPICS,
  ORDERS_DATA,
  SUPPORT_MESSAGE_LIST,
} from './data/data';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const RestaurantsScreen = ({ item, navigation }) => {
  const [orders, setOrders] = React.useState(ORDERS_DATA);
  const [allTopics, setAllTopics] = React.useState(DELIVERY_ALL_TOPICS);
  const [supportList, setSupportList] = React.useState(SUPPORT_MESSAGE_LIST);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [prevButton, setPrevButton] = React.useState(false);
  const [nextButton, setNextButton] = React.useState(true);
  const flatListRef = React.useRef(null);
  const { width, height } = Dimensions.get('window');

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
    setActiveIndex(index);
  };

  const renderIndicator = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {orders.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              backgroundColor: index === activeIndex ? 'blue' : 'gray',
              borderRadius: 5,
              margin: 5,
            }}
            //onTouchStart={() => scrollToIndex(index)}
          />
        ))}
      </View>
    );
  };

  const nextItem = () => {
    if (activeIndex < orders.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const prevItem = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  React.useEffect(() => {
    if (activeIndex === 0) {
      setPrevButton(false);
    } else if (activeIndex === orders.length - 1) {
      setNextButton(false);
    } else {
      setPrevButton(true);
      setNextButton(true);
    }
  }, [activeIndex, orders]);

  return (
    <View style={styles.container}>
      <View tyle={styles.listContainer}>
        <FlatList
          horizontal
          ref={flatListRef}
          data={orders}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: 'center',
                width: width,
              }}>
              <OrdersItem item={item} navigation={navigation} goNext={false} />
            </View>
          )}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const contentOffset = event.nativeEvent.contentOffset.x;
            const itemWidth = event.nativeEvent.layoutMeasurement.width;
            const newIndex = Math.round(contentOffset / itemWidth);
            setActiveIndex(newIndex);
          }}
        />
      </View>

      <View style={styles.indicatorWrapper}>
        <View style={styles.arrowsWrapper}>
          <AntDesign
            onPress={() => prevButton && prevItem()}
            name={'leftcircle'}
            size={28}
            color={prevButton ? '#0D1317' : '#adb5bd'}
          />
          <AntDesign
            onPress={() => nextButton && nextItem()}
            name={'rightcircle'}
            size={28}
            color={nextButton ? '#0D1317' : '#adb5bd'}
          />
        </View>

        <View style={styles.indicatorBallsWrapper}>{renderIndicator()}</View>
      </View>

      <View>
        <Text style={[styles.title, { marginHorizontal: 15 }]}>All topics</Text>

        <Divider style={{ marginTop: 10 }} />

        <FlatList
          scrollEnabled={false}
          data={allTopics}
          renderItem={({ item }) => (
            <DeliveryAllTopicItem item={item} navigation={navigation} />
          )}
        />
      </View>

      <View>
        <Text style={[styles.title, { margin: 15 }]}>Support Messages</Text>
        <Divider style={{ marginTop: 10 }} />

        <FlatList
          scrollEnabled={false}
          data={supportList}
          renderItem={({ item }) => (
            <SupportMessageItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8f8',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: '#0D1317',
    fontWeight: 'bold',
  },
  indicatorWrapper: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },
  arrowsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    width: '10%',
    paddingVertical: 15,
    zIndex: 1,
  },
  indicatorBallsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '90%',
  },
});
