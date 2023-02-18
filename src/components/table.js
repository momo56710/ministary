import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Button,
} from '@chakra-ui/react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getSession } from '../utils/auth.js';
export default ({ clients , session}) => {
 
 
  const navigate = useNavigate();
  return (
    <Center display={'block'} overflowX={'auto'} whiteSpace={'nowrap'}>
      <Table variant="simple" maxW={'80vw'} m={'auto'}>
        <Thead>
          <Tr>
            <Th>
              <Center>Type</Center>
            </Th>
            <Th>
              <Center>Numero de label</Center>
            </Th>
            <Th>
              <Center>Annee</Center>
            </Th>
            <Th>
              <Center>Nom</Center>
            </Th>
            <Th>
              <Center>Prenom</Center>
            </Th>

            <Th>
              <Center>wilaya</Center>
            </Th>
            <Th>
              <Center>Actions</Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((cli, i) => (
            <Tr>
              <Td>
                <Center>{cli.type}</Center>
              </Td>
              <Td>
                <Center>{cli.num_label}</Center>
              </Td>
              <Td>
                <Center>{cli.year}</Center>
              </Td>
              <Td>
                <Center>{cli.first_name}</Center>
              </Td>
              <Td>
                <Center>{cli.last_name}</Center>
              </Td>
              <Td>
                <Center>{cli.state}</Center>
              </Td>
              <Td>
                <Center gap={4}>
                  <Button
                    onClick={() => {
                      navigate(`/edit/pi/${cli._id}`);
                    }}
                    colorScheme={'teal'}
                  >
                    Voir plus
                  </Button>
                  <Button colorScheme={'red'}>Download PDF</Button>
                </Center>
              </Td>

              {/* <Th>
                 <Center>
                  <Button onClick={() => router('/product/' + product.pid)}>
                    Edit Here
                  </Button>
                  <Button
                    colorScheme={'whatsapp'}
                    ml={2}
                    onClick={() => router('/sell/product/' + product.pid)}
                  >
                    Sell Product
                  </Button> 
                </Center> 
              </Th> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Center>
  );
};
