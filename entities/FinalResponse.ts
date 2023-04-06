type OutputType = {
  data: {
    args: {
      message: string;
    };
    headers: Record<any, string>;
    url: string;
  };
  env: string;
  timeStamp: string;
  buildVer: string;
};

export type FinalResponseType = {
  output: OutputType;
  env: string;
  timeStamp: string;
  buildVer: string;
};
