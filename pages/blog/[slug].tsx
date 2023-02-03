import { Box, Flex,Text, Heading } from "@chakra-ui/react"
import { AxiosResponse } from "axios"
import { fetchposts } from "../../api/api"
import Image from "next/image"
import qs from "qs"
import { Blog, Footer, NavBar } from "../../components"
import { Icollections, IPosts } from "../../types"
import {CiFacebook,CiLinkedin,CiTwitter} from "react-icons/ci"
import ReactMarkdown from "react-markdown"
import Link from "next/link"

const slug = ({ Search,article}: { Search: any,article:IPosts }) => {
  return (
    <>
      <NavBar searchbar={false} Search={Search} />
      <Flex ml={50} mt={5} direction={'column'} alignItems={'center'} >
        <Link href={'/'}>Back To Home</Link>
        <Box><Heading p={'5'}>{article.attributes.Title}</Heading></Box>
        <Image width={1000} height={1000} src={`http://127.0.0.1:1337${article.attributes.Image.data.attributes.formats.large.url}`} alt={''}/>
        <Box pt={5} pl={15}><ReactMarkdown >{article.attributes.Content}</ReactMarkdown></Box>
        <Flex p={10} direction={'column'} alignItems={'center'}justifyContent={'center'}>
          <Text fontSize={20} fontWeight={'bold'}>Share this post</Text>
          <Flex justifyContent={'space-between'} gap={5}>
            <a href=""><CiFacebook/></a>
            <a href=""><CiTwitter/></a>
            <a href=""><CiLinkedin/></a>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}

export default slug

export async function getServerSideProps(context: any) {
  const query=qs.stringify({
    populate:"*",
    filters: {
      Slug: {
        $eq: context.query.slug,
      }
    },
  },{
    encodeValuesOnly: true,
  })
  const { data: article }: AxiosResponse<Icollections<IPosts[]>> = await fetchposts(query);
  console.log(article.data.at(0))
  const searchquery = qs.stringify({
    populate:"*",
    filters: {
      title: {
        $containsi: context.query.search,
      }
    },
  }, {
    encodeValuesOnly: true,
  });
  const { data: search }: AxiosResponse<Icollections<IPosts[]>> = await fetchposts(searchquery);
  return {
    props: {
      Search: search.data != null ? search.data : null,
      article:article.data.at(0)
    }, // will be passed to the page component as props
  }
}