import React from 'react';

import { Feather } from '@expo/vector-icons'
import {Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars'
import { Directions } from 'react-native-gesture-handler';
import theme from '../Styles/theme'

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br'

export default function Calendar(){
return (
<CustomCalendar
    renderArrow={ (Directions) => 
        <Feather 
            size={24}
            color={theme.colors.text}
            name={ Directions === 'left' ? 'chevron-left' : 'chevron-right'}
        />
    }

    headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 5,
        marginBottom: 5,
    }}

    theme={{
        textDayFontFamily: theme.fonts.primary400,
        textDayHeaderFontFamily: theme.fonts.primary500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary500,
        monthTextColor: theme.colors.title,
        arrowStyle: {
            marginHorizontal: -15,
        }
    }}
    firstDay={1}
    minDate={new Date()}
/>


);
}