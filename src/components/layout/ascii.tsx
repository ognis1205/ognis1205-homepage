/**
 * @fileoverview Defines ASCII art.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
//import dynamic from 'next/dynamic';
import P5 from 'p5';

const Spinner: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Chakra.Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

const Container = Chakra.forwardRef<Chakra.BoxProps, 'div'>(
  ({ children, ...props }: Chakra.BoxProps, ref) => {
    return (
      <Chakra.Box
        ref={ref}
        className="voxel-dog"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
        {...props}
      >
        {children}
      </Chakra.Box>
    );
  }
);

export const Loader: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Container>
    <Spinner />
  </Container>
);

const Player: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const preload = (p5: p5Types): void => {
    // 画像などのロードを行う
  };

  const setup = (p5: p5Types, canvasParentRef: Element): void => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    // p5でいうsetupの処理を書く
  };

  const draw = (p5: p5Types): void => {
    // p5でいうdrawの処理を書く
  };

  const windowResized = (p5: p5Types): void => {
    // コンポーネントのレスポンシブ化
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <></>
  );
};
