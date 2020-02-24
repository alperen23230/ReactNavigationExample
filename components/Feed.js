import React from 'react'
import {View, Text, Button} from 'react-native'
import { styles } from '../styles/style'

const feed = (props) => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Button title="Go to feed item" onPress={()=> props.navigation.navigate('Detail', {screenName: "My Detail Screen"})}/>
        </View>
    );
};

export default feed;