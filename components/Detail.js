import React from 'react'
import {View, Text, Button} from 'react-native'
import { styles } from '../styles/style'

const detail = (props) => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>{props.route.params.screenName}</Text>
            <Button title="View bottom tabs" onPress={()=> props.navigation.navigate('Bottom Tabs')}/>
            <Button title="View top tabs" onPress={()=>props.navigation.navigate('Top Tabs')}/>
        </View>
    );
};

export default detail;