import React from 'react';
import { Image, Text, Flex, VStack, Spinner } from '@chakra-ui/react';
import { useProducts } from '../../hooks/shopHooks';

export const ProductList = () => {
  const { isLoading, data, isError, isSuccess, error } = useProducts();
  const products = data?.products;

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return console.log(error);
    //`error: ${error}`;
  }
  if (isSuccess) {
    return (
      <Flex direction="column" w="full">
        <h1>lisyta de prodcutos</h1>
        <Flex wrap="wrap">
          {products.map(item => (
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
                  src={item.imgName}
                  alt={item.nombre}
                />
                <VStack w="300px">
                  <Text fontSize="xl">{item.name}</Text>
                  <Text fontSize="small">{item.specialty}</Text>
                  <Text fontSize="small">{item.cross}</Text>
                </VStack>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }
};
