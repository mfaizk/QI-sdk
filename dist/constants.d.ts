import JSBI from 'jsbi'
export declare type BigintIsh = JSBI | bigint | string
export declare enum ChainId {
  MAINNET = 1990,
  BSCTESTNET = 9732,
}
export declare enum TradeType {
  EXACT_INPUT = 0,
  EXACT_OUTPUT = 1,
}
export declare enum Rounding {
  ROUND_DOWN = 0,
  ROUND_HALF_UP = 1,
  ROUND_UP = 2,
}
export declare const FACTORY_ADDRESS = '0xba33504bD33eF3731Cf8f59F755b289abb88F177'
export declare const INIT_CODE_HASH = '0xa4338cf2371c14c49fa8b5e1b8fcb50ed7a9bd026afb72bf9f3f45186cf54315'
export declare const MINIMUM_LIQUIDITY: JSBI
export declare const ZERO: JSBI
export declare const ONE: JSBI
export declare const TWO: JSBI
export declare const THREE: JSBI
export declare const FIVE: JSBI
export declare const TEN: JSBI
export declare const _100: JSBI
export declare const FEES_NUMERATOR: JSBI
export declare const FEES_DENOMINATOR: JSBI
export declare enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}
export declare const SOLIDITY_TYPE_MAXIMA: {
  uint8: JSBI
  uint256: JSBI
}
