/**
 * @fileoverview Defines ASCII art.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import P5 from 'p5';
import * as Hooks from '@/utils/hooks';

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

export type PlayerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sketch: any;
};

export const Player: React.FunctionComponent<PlayerProps> = (
  props: PlayerProps
): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [instance, setInstance] = Hooks.useSafeState<P5>(null);

  const container = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!container.current) return;
    setInstance(new P5(props.sketch, container.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.sketch]);

  return <Container ref={container} />;
};
