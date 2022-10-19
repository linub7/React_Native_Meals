import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListInfo = styled.View`
  flex: 1;
  padding: 16px;
  background-color: 'blue';
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea style={styles.container}>
      <SearchContainer style={styles.search}>
        <Searchbar />
      </SearchContainer>
      <RestaurantListInfo style={styles.list}>
        <RestaurantInfoCard />
      </RestaurantListInfo>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});

export default RestaurantsScreen;
