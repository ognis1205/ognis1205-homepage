/**
 * @fileoverview Defines ASCII art.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
//import * as Chakra from '@chakra-ui/react';
//import dynamic from 'next/dynamic';
import p5Types from 'p5';

export const Component: React.FunctionComponent<
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
