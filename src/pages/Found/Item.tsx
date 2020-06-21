import React from 'react';
import { View ,Text} from 'react-native';
import { IFound } from '@/models/found';

interface IProps{
    data:IFound
}


const Item:React.FC<IProps>=(props)=>{
    const {data} = props;
    return (
        <View>
            <Text>{data.title}</Text>
        </View>
    )
}

export default Item;
