import { useAccount, useEnsName, useBalance, useSendTransaction } from 'wagmi'
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import SendEthModal from './sendEthModal'
import SendErc20Modal from './sendErc20Modal';
// import { polygonZkEvmCardona } from 'wagmi/chains'

export function Account() {
    const { address } = useAccount();
    const { data: ensName, isLoading: isEnsLoading } = useEnsName({ 
        address,
        chainId: 1, // Ethereum mainnet (where ENS is supported)
    });
    const { data: ethBalance } = useBalance({ 
        address,  
    });

    return (
    <Card className="w-full">
      <CardContent className='pt-6'>
        Wallet Address: {address}
        <p>Balance: {ethBalance?.formatted} {ethBalance?.symbol}</p>
        {isEnsLoading ? (
        <p>Loading ENS name...</p>
         ) : ensName ? (
         <p>ENS name: {ensName}</p>
        ) : (
        <p>No ENS name found for this user</p>
       )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <SendEthModal/>
        <SendErc20Modal userAddress={address}/>
      </CardFooter>
    </Card>
  )
}