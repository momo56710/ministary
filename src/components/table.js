import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Center,
  Button,
} from '@chakra-ui/react';
import { Route, useNavigate, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import editfile from './editfile';
export default ({ clients }) => {
  const navigate = useNavigate()
  return (
    <Center display={'block'} overflowX={'auto'} whiteSpace={'nowrap'}>
      <Table variant="simple" maxW={'80vw'} m={'auto'}>
        <Thead>
          <Tr>
            <Th>
              <Center>Num</Center>
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
              <Center>Type</Center>
            </Th>
            <Th>
              <Center>Genre</Center>
            </Th>
            <Th>
              <Center>Email</Center>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((cli,i) => (
            <Tr>
              <Td>
                <Center>{cli.Num}</Center>
              </Td>
              <Td>
                <Center>{cli.NDL}</Center>
              </Td>
              <Td>
                <Center>{cli.Annee}</Center>
              </Td>
              <Td>
                <Center>{cli.Nom}</Center>
              </Td>
              <Td>
                <Center>{cli.Prenom}</Center>
              </Td>
              <Td>
                <Center>{cli.Type}</Center>
              </Td>
              <Td>
                <Center>{cli.Genre}</Center>
              </Td>
              <Td>
                <Center>{cli.Email}</Center>
              </Td>
              <Td>
                <Button
                  onClick={() => {
                   navigate(cli.link)
                  }}
                  colorScheme={'whatsapp'}
                >
                  voir plus
                </Button>
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
