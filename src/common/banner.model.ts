export interface Banner {
  url: string;
  info: string;
  animationState: string;
}

// export interface SlideableHome extends Images {
//   nextId: string;
//   previousId: string;
// }

export type Animate<T> = T & {
  animationState: string;
};

