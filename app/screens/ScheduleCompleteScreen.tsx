import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
Container,
Content,
Title,
Message,
Footer,
} from './ScheduleCompleteScreenStyle'

import LogoSVG from '../assets/logo_background_gray.svg'
import DoneSVG from '../assets/done.svg'
import ConfirmButton from '../Components/ConfirmButton';

export default function ScheduleCompleteScreen(){

    const { width } = useWindowDimensions();

return (
<Container>
    <LogoSVG 
        width={width}
    />

    <Content>
        <DoneSVG 
            width={80}
            height={80}
        />
        <Title>Carro Alugado!</Title>

        <Message>
            Agora você só precisa ir {`\n`}
            até uma concessionária da RentX {`\n`}
            pegar o seu carro.
        </Message>

        <Footer>
            <ConfirmButton title='OK'/>
        </Footer>
    </Content>

</Container>
);
}