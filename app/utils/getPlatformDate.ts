import { addDays } from 'date-fns'
import { Platform } from 'react-native'

export default function getPlatformDate(date: Date){
    if (Platform.OS === 'ios' ){
        return addDays(date,1); 
    }else{
        return addDays(date,1)
    }
} 