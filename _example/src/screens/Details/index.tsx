import React from 'react';
import { View, Text, Button } from 'react-native';
import { DetailsScreenProps } from '../../navigation/types';

const DetailsScreen = ({ navigation }: DetailsScreenProps) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};

export default DetailsScreen;
