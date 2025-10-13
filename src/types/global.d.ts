declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: any) => Promise<void>;
        open: () => void;
        close: () => void;
        interact: (payload: any) => void;
        proactive: {
          clear: () => void;
          push: (message: any) => void;
        };
      };
    };
    v?: {
      c: string;
      p: string;
      d: number;
      s: string;
      st: string;
      a: boolean;
      as: any;
      f: any[];
      t: boolean;
      m: string;
      md: number;
      l: any;
    };
    gtag?: (
      command: string,
      targetId?: string,
      config?: any,
      callback?: (value: string) => void
    ) => void;
  }
}

export { };