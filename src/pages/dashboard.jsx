import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Table from '../components/table';
import NavBar from '../components/nav';
import Clients from '../components/client'
import { Center, Input, Heading, Button, Select } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function App() {
  const [session, setSession] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsClone, setProductsClone] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getItemsSlicedByIndex = (products, index) =>
    products.slice((index - 1) * 5, 5 * index);
  const getMaxPageIndex = products =>
    products.length % 5 === 0
      ? Math.floor(products.length / 5)
      : Math.floor(products.length / 5) + 1;
console.log(Clients())
  
  return (
    <>
      <NavBar email={'Xahu'} d={'inline'} linkPage={'/addLS'}></NavBar>
      <Center>
        <Heading as="h2" size="3xl" textAlign={'center'}>
          LGL manager
        </Heading>
      </Center>
      <Center marginBlock={8}>
        <Input
          placeholder="Search by Product id , Brand name or Model"
          size="lg"
          maxW={'80vw'}
          variant="filled"
          onChange={e => {}}
        />
      </Center>

      <Table clients={getItemsSlicedByIndex(Clients(), pageIndex)}></Table>
      <Center>
        <Button
          mr={4}
          onClick={() => {
            pageIndex <= 1 ? setPageIndex(1) : setPageIndex(pageIndex - 1);
          }}
        >
          Previous
        </Button>
        <Button disabled mr={1}>
          {pageIndex}
        </Button>
        <ChevronRightIcon color="gray.500" />
        <Button disabled ml={1}>
          {getMaxPageIndex(Clients())}
        </Button>
        <Button
          ml={4}
          onClick={() => {
            pageIndex >= getMaxPageIndex(Clients())
              ? setPageIndex(getMaxPageIndex(Clients()))
              : setPageIndex(pageIndex + 1);
          }}
        >
          Next
        </Button>
      </Center>
    </>
  );
}
