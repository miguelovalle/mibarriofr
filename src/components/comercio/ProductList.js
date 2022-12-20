import React from 'react';
import { Image, Text, Flex, VStack, Spinner } from '@chakra-ui/react';
import { useProducts } from '../../hooks/shopHooks';
import { useParams } from 'react-router-dom';
import { numberFormat } from '../../helpers/numberFormat';

export const ProductList = () => {
  const { shopId } = useParams();

  const { isLoading, data, isError, isSuccess, error } = useProducts(shopId);

  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  const products = data?.products;
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return console.log(error);
    //`error: ${error}`;
  }
  if (isSuccess) {
    if (data.ok === 'false') {
      return console.log('no hay productos');
    }

    return (
      <Flex direction="column" w="full">
        <h1>lista de prodcutos</h1>
        <Flex wrap="wrap">
          {products?.map(item => (
            <Flex
              justify="flex-start"
              w="400px"
              bg="orange.100"
              border="1px solid tomato.200"
              padding={5}
              m="0.5"
              key={item._id}
            >
              <Flex w="400px">
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="lg"
                  src={item.logo}
                  alt={item.logo}
                />
                <VStack w="300px">
                  <Text fontSize="xl">{item.name}</Text>
                  <Text fontSize="small">{item.description}</Text>
                  <Text fontSize="small">{numberFormat(item.price)}</Text>
                </VStack>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }
};
