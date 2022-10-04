import React from 'react';
import { ScrollView } from 'react-native';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import avatar from '../../assets/avatar.png';

import {
  Container,
  Title,
  Header,
  Avatar,
  Username,
  Content,
  Stats,
  Separator,
  StatsText,
  StatsColumn,
  StatsNumber,
  ProfileColumn,
  ProfileEdit,
  ProfileText,
  Bookmark,
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
