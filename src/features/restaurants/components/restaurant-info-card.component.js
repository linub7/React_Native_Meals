import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
