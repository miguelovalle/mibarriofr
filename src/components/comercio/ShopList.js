import React from 'react';
import {
  Image,
  Text,
  Flex,
  VStack,
  Spinner,
  LinkBox,
  LinkOverlay,
  Box,
} from '@chakra-ui/react';
import { useShopList } from '../../hooks/shopHooks';

export const ShopList = () => {
  const { isLoading, isError, data, error, isSuccess } = useShopList();
  const shops = data?.commerces;
  console.log(shops);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return `error: ${error}`;
  }
  if (isSuccess) {
    return (
      <Flex direction="column" w="full">
        <LinkBox>
          <Flex wrap="wrap">
            {shops.map(negocio => (
              <Flex
                justify="flex-start"
                w="400px"
                bg="orange.100"
                border="1px solid tomato.200"
                padding={5}
                m="0.5"
                key={negocio._id}
              >
                <Flex w="400px">
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="lg"
                    src={negocio.imgName}
                    alt={negocio.nombre}
                  />

                  <VStack w="300px">
                    <LinkOverlay href={`/${shops._id}`}>
                      <Text fontSize="xl"> {negocio.name}</Text>
                    </LinkOverlay>
                    <Text fontSize="small">{negocio.specialty}</Text>
                    <Text fontSize="small">{negocio.cross}</Text>
                  </VStack>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </LinkBox>
      </Flex>
    );
  }
};
