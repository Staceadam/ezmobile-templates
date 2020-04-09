import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamsList = {
    Home: undefined;
    Details: undefined;
};

export type HomeScreenProps = {
    route: RouteProp<StackParamsList, 'Home'>;
    navigation: StackNavigationProp<StackParamsList, 'Home'>;
};

export type DetailsScreenProps = {
    route: RouteProp<StackParamsList, 'Details'>;
    navigation: StackNavigationProp<StackParamsList, 'Details'>;
};
