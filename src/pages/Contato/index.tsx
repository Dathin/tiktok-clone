import React from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  Username,
  Content,
} from './styles';

const Me: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <Content>
        <Username> </Username>
        <Username> </Username>
        <Username> </Username>
        <Username> </Username>
        <Username> </Username>

          <Username>@descantemedicamentos</Username>
          <Username>contato@descantemedicamentos.org</Username>
          <Username>(11) 0800 123 12 12</Username>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Me;
