// @flow

// ref: https://github.com/facebook/flow/blob/master/lib/core.js#L495-L502
declare class JSON {
  static parse(text: mixed, reviver?: (key: any, value: any) => any): Object;
  static stringify(
    value: any,
    replacer?: ?((key: string, value: any) => any) | Array<any>,
    space?: string | number
  ): string;
}
// ref: https://github.com/facebook/flow/blob/v0.67.0/lib/core.js#L345-L360
declare class RegExp {
  static (pattern: string | RegExp, flags?: RegExp$flags): RegExp;
  compile(): RegExp;
  constructor(pattern: string | RegExp, flags?: RegExp$flags): RegExp;
  exec(string: string): (string[] & {index: number, input: string}) | null;
  flags: string;
  global: boolean;
  ignoreCase: boolean;
  lastIndex: number;
  multiline: boolean;
  source: string;
  sticky: boolean;
  unicode: boolean;
  test(string: string): boolean;
  toString(): string;
}

declare var window: {
  confirm: ?string => boolean
}
declare var global: {
  confirm: ?string => boolean
}
