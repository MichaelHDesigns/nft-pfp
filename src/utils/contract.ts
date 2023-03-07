import type { Chain, SendTransactionResult } from '@wagmi/core/dist'

export const ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'string', name: 'tokenURI', type: 'string' },
    ],
    name: 'mintNFT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export const getContractAddress = (chainId?: number) => {
  return chainId === 1
        ? '0x8dA3dA022d7a5224615c8F2E3fFdDc5B883B24A2'
        : '0x87E0a4fC215C13d6727f0dbB1700875dc02cBF16'
}

export const getEtherscanUrl = (data: SendTransactionResult, chain?: Chain) => {
  return chain?.id === 1
        ? `https://expedition.altcoinchain.org/tx/${data.hash}`
        : `https://expedition.altcoinchain.org/tx/${data.hash}`
}

export const getOpenseaUrl = (chain?: Chain) => {
  return chain?.id === 5
    ? 'https://testnets.opensea.io/collection/opennft-iboh5rhaks?search[sortAscending]=false&search[sortBy]=CREATED_DATE'
    : 'https://expedition.altcoinchain.org'
}

/**
 * ==============================
 * ENS CONTRACT CONSTANTS
 * ==============================
 */

export const ENS_RESOLVER_ABI = [
  {
    constant: false,
    inputs: [
      { internalType: 'bytes32', name: 'node', type: 'bytes32' },
      { internalType: 'string', name: 'key', type: 'string' },
      { internalType: 'string', name: 'value', type: 'string' },
    ],
    name: 'setText',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
