import React from 'react';
import {
  Image,
  Text,
  Flex,
  VStack,
  Spinner,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { useShopList } from '../../hooks/shopHooks';

export const ShopList = () => {
  
  const { isLoading, isError, data, error, isSuccess } = useShopList();
  const shops = data?.commerces;
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return `error: ${error}`;
  }
  if (isSuccess) {
    return (
      <Flex direction="column" w="full">
        <Flex wrap="wrap">
          {shops.map(negocio => (
            <LinkBox>
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
                    <LinkOverlay href={`shops/${negocio._id}`}>
                      {negocio.name}
                    </LinkOverlay>
                    <Text fontSize="small">{negocio.specialty}</Text>
                    <Text fontSize="small">{negocio.cross}</Text>
                  </VStack>
                </Flex>
              </Flex>
            </LinkBox>
          ))}
        </Flex>
      </Flex>
    );
  }
};
