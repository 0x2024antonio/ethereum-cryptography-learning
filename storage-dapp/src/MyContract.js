const address = "0x8499e4A713b5AAC95e4509Fd421350dB4C0b6596";
const abi = [
  {
    inputs: [],
    name: "getGreeting",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "s", type: "string" }],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export { address, abi };
