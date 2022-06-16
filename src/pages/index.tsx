/**
 * @fileoverview Defines /.
 * @copyright Shingo OKAWA 2022
 */
import * as Chakra from '@chakra-ui/react';
import * as ChakraIcon from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import * as Layout from '@/components/layout';

const ProfileImage = Chakra.chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Index: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Chakra.Container>
    <Chakra.Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={Chakra.useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      Hello, I&apos;m a developer based in Tokyo!
      <br />
      The above &ldquo;MNIST Dice&rdquo; is a small neural network running
      entirely in a WebGL GLSL shader that hallucinates new hand-written digits
      in real-time.
    </Chakra.Box>
    <Chakra.Box display={{ md: 'flex' }}>
      <Chakra.Box flexGrow={1}>
        <Chakra.Heading as="h2" variant="page-title">
          Shingo OKAWA
        </Chakra.Heading>
        <p>Data Misfit ( Developer )</p>
      </Chakra.Box>
      <Chakra.Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Chakra.Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <ProfileImage
            src="/images/shingo.jpg"
            alt="Profile image"
            borderRadius="full"
            width="100%"
            height="100%"
          />
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>

    <Layout.Section delay={0.1}>
      <Chakra.Heading as="h3" variant="section-title">
        Work
      </Chakra.Heading>
      <Layout.Paragraph>
        Shingo is a software developer based in Tokyo with a passion for
        building digital services/stuff he wants. He has a knack for all things
        prototyping products, from planning and designing all the way to solving
        real-life problems with code. When not online, he loves cooking and
        playing with his cat buddies.
      </Layout.Paragraph>
      <Chakra.Box align="center" my={4}>
        <NextLink href="/works" passHref scroll={false}>
          <Chakra.Button
            rightIcon={<ChakraIcon.ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Chakra.Button>
        </NextLink>
      </Chakra.Box>
    </Layout.Section>
  </Chakra.Container>
);

export default Index;
