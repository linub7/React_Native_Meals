import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { useRestaurants } from '../../../hooks';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ActivityIndicatorStyle = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useRestaurants();

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicatorStyle
            animating={true}
            color="#FCB472"
            size="large"
          />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
