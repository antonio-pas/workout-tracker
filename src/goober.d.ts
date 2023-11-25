import 'goober';

declare module 'goober' {
  export interface DefaultTheme {
    colors: {
      // colors
      bg0: string;
      bg1: string;
      bg2: string;

      fg: string;
      fgDim: string;

      pri: string;
      onPri: string;
      priCon: string;
      onPriCon: string;

      // states
      dis: number = 0.38;

      hover: number = 0.08;
      focus: number = 0.10;
      press: number = 0.10;
      drag: number = 0.16;

      // sizes
      p1: string = '0.25rem';
      p2: string = '0.5rem';
      p3: string = '0.75rem';
      p4: string = '1rem';
      p5: string = '1.25rem';
      p6: string = '1.5rem';
      p7: string = '1.75rem';
      p8: string = '2rem';

      br1: string = '0.125rem';
      br2: string = '0.25rem';
      br3: string = '0.5rem';
      br4: string = '1rem';

      ts: string = '0.75rem';
      tr: string = '1rem';
      tl: string = '1.5rem';
      txl: string = '2.25rem';
      txxl: string = '3.375rem';
    };
  }
}