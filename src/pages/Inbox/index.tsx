import React from 'react';

import {Text, Linking} from 'react-native'

import { Feather, MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Header } from './styles';

const Inbox: React.FC = () => {
  return (
    <Container>
      <Text></Text>
      <Text>Sabe aquele medicamento que você usa para melhorar um desconforto ou controlar uma doença crônica? Ele pode ser prejudicial a outras pessoas e até mesmo ao meio ambiente se não for descartado de forma adequada. Há 20 anos, medicamentos são os maiores causadores de intoxicações. Cerca de 70% da população faz o descarte desses produtos em lixos comuns ou esgoto. Saiba por que o descarte correto de medicamentos é importante e como fazer isso de forma segura.</Text>
      <Text>Restos de medicamentos sem o destino correto podem causar, por exemplo, o uso inadvertido por outras pessoas, resultando em reações adversas graves e intoxicações. 

Além disso, o meio ambiente é agredido com a contaminação da água, do solo e dos animais. O descarte de medicamentos pelo esgoto e pelo lixo comum faz com que as substâncias químicas contidas nos medicamentos cheguem aos rios e córregos, podendo contaminar a água que bebemos.

Cientistas já comprovaram que os antibióticos no meio ambiente, por exemplo, não chegam a matar os animais, mas aumentam a resistência de bactérias, o que afeta também os humanos.

</Text>
<Text>fonte: </Text>
<Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.pfizer.com.br/noticias/ultimas-noticias/descarte-correto-de-medicamentos-tambem-salva-vidas')}>
  https://www.pfizer.com.br/noticias/ultimas-noticias/descarte-correto-de-medicamentos-tambem-salva-vidas
</Text>
    </Container>
  )
  // return (
  //   <Container>
  //     <Header>
  //       <Title>All activity</Title>
  //       <MaterialIcons name="arrow-drop-down" size={24} color="black" />
  //       <Feather
  //         style={{ position: 'absolute', right: 10, top: 10 }}
  //         name="send"
  //         size={24}
  //         color="black"
  //       />
  //     </Header>
  //   </Container>
  // );
};

export default Inbox;
