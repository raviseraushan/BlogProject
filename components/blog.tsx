import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  useColorModeValue,
  HStack,
  Grid,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import { BsArrowUpRight, } from 'react-icons/bs';
import { IHomeData } from '../types';

// import { useRouter } from 'next/router';
export default function PostWithLike({ Post, Meta, Page }: IHomeData) {
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={1}>
          {Post.map((post) => {

            return (
              <Link href={`/blog/${post.attributes.Slug}`}>
                <Box
                  w="xs"
                  rounded={'sm'}
                  my={5}
                  mx={[0, 5]}
                  overflow={'hidden'}
                  bg="white"
                  border={'1px'}
                  borderColor="black"
                  boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                  <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                      src={post.attributes.Image != null ? `http://localhost:1337${post.attributes.Image.data.attributes.formats.small.url}` : "http://localhost:1337/uploads/album_default_89b7934694.png"}
                      roundedTop={'sm'}
                      objectFit="cover"
                      h="full"
                      w="full"
                      alt={'Blog Image'}
                    />
                  </Box>
                  <Box p={4}>
                    <Box
                      bg="black"
                      display={'inline-block'}
                      px={2}
                      py={1}
                      color="white"
                      mb={2}>

                      <Text fontSize={'xs'} fontWeight="medium">
                        {post.attributes.label.data.attributes.Name}
                      </Text>
                    </Box>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                      {post.attributes.Title}
                    </Heading>
                    <ReactMarkdown >{post.attributes.Content.slice(0, 50)}</ReactMarkdown>
                  </Box>
                  <HStack borderTop={'1px'} color="black">
                    <Flex
                      p={4}
                      alignItems="center"
                      justifyContent={'space-between'}
                      roundedBottom={'sm'}
                      cursor={'pointer'}
                      w="full">
                      <Text fontSize={'md'} fontWeight={'semibold'}>
                        View more
                      </Text>
                      <BsArrowUpRight />
                    </Flex>
                  </HStack>
                </Box>
              </Link>
            )
          })}
        </Grid>

      </Flex>
      <Stack spacing={3} mb={5}>
        <Flex gap={4} alignItems={'center'} textAlign={'center'} justifyContent={'center'}>
          <Link href={`/?page=${Meta.pagination.pageCount != (Meta.pagination.page != 1 ? Meta.pagination.page : 4) ? Page - 1 : "#"}`}>
            <Box py={3} px={5} bgColor={'black'}>
              <Text color={'white'}>Prev</Text>
            </Box></Link>
          <Link href={`/?page=${Meta.pagination.pageCount != (Meta.pagination.page != 1 ? Meta.pagination.page : 4) ? Meta.pagination.page + 1 : '#'}`}>
            <Box py={3} px={5} bgColor={'black'}>
              <Text color={'white'}>Next</Text>
            </Box></Link>

        </Flex>
      </Stack>
    </>
  );
}

export async function getServerSideProps(context: any) {
  // console.log(Post())
  return {
    props: {

    }, // will be passed to the page component as props
  }
}