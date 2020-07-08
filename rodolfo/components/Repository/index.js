import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Name,
  Description,
  Refresh,
  RefreshText,
  Stats,
  Stat,
  StatCount,
} from './styles';

const Repository = ({data, onRefresh}) => {
  return (
    <Container>
      <Stat>
        <Name>{data.name}</Name>
        <Description>{data.goal}</Description>
      </Stat>
      


      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>NOVA NOTA</RefreshText>
      </Refresh>
    </Container>
  );
};

export default Repository;
