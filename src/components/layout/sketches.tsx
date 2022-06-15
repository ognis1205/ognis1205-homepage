/**
 * @fileoverview Defines sketch.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import P5 from 'p5';
import rover from '@/assets/videos/rover.mp4';

export const Rover = (p5: P5) => {
  let video: P5.MediaElement = null;

  let ascii: P5.Element;

  const W = 1080;
  
  const H = 1920;

  const onLoad = (): void => {
    if (!video) return;
    video.loop();
    video.volume(0);
    //video.hide();
    ascii = p5.createDiv('');
  };

  p5.setup = (): void => {
    p5.noCanvas();
    video = p5.createVideo([rover],  onLoad);
  };

  p5.draw = (): void => {
//    const pixels = '       .:-i|=+%O#@'
//    video.loadPixels();
//    p5.textFont('courier');
//    let output = '';
//    for (let j = 0; j < H; j++) {
//      for (let i = 0; i < W; i++) {
//        let index = (i + j * W) * 4;
//        let r = video.pixels[index + 0];
//        let g = video.pixels[index + 1];
//        let b = video.pixels[index + 2];
//        let bright = (r + g + b) / 3;
//        let bindex = map(bright, 0, 255, 0, pixels.length);
//        let ch = pixels.charAt(floor(bindex));
//        if (ch == ' ') {
//          output += '&nbsp;';
//        } else {
//          output += ch;
//        }
//      }
//      output += '<br/>';
//    }
//    ascii.html(output);
  };
};
