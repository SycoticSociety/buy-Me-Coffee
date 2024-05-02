import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contractAddress = "0x53c4930eB2023613b0adDb5b8bF13183F4a20FC0";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
});
