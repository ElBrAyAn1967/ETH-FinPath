import { CirclesConfig } from "@circles-sdk/sdk";

// Multiple RPC endpoints for fallback reliability
export const GNOSIS_RPC_ENDPOINTS = [
  "https://gnosis-mainnet.public.blastapi.io", // BlastAPI - Free tier, reliable
  "https://rpc.gnosischain.com", // Official Gnosis RPC
  "https://rpc.ankr.com/gnosis", // Ankr - Geo-distributed
  "https://gnosis.drpc.org", // dRPC - AI-powered load balancer
  "https://rpc.gnosis.gateway.fm", // Gateway FM
];

export const circlesConfig: CirclesConfig = {
  pathfinderUrl: "https://pathfinder.aboutcircles.com",
  circlesRpcUrl: GNOSIS_RPC_ENDPOINTS[0], // Using BlastAPI as primary
  v1HubAddress: "0x29b9a7fbb8995b2423a71cc17cf9810798f6c543",
  v2HubAddress: "0x3D61f0A272eC69d65F5CFF097212079aaFDe8267",
  migrationAddress: "0x28141b6743c8569Ad8B20Ac09046Ba26F9Fb1c90",
  nameRegistryAddress: "0x8D1BEBbf5b8DFCef0F7E2039e4106A76Cb66f968",
  baseGroupMintPolicy: "0x79Cbc9C7077dF161b92a745345A6Ade3fC626A60",
  standardTreasury: "0x3545955Bc3900bda704261e4991f239BBd99ecE5",
};

export const PROFILE_SERVICE_URL = "https://static.94.138.251.148.clients.your-server.de/profiles/";
