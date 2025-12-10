declare global {
  interface Window {
    fbq?: (method: string, ...args: unknown[]) => void;
  }
}

export {};
