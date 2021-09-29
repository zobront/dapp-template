import { ethers } from "ethers"
import { createContext, useContext, useEffect, useState } from "react"

// import artifacts of compiled contracts
import { useEthereum } from "./EthereumProvider"

const ContractContext = createContext()

const ContractProvider = (props) => {
  const { provider } = useEthereum()
  const [contracts, setContracts] = useState([])

  function addContract(name, contract) {
    setContracts({...contracts, name: contract }) // MAKE SURE THIS WORKS RIGHT
  }

  useEffect(() => {
    // const SimpleMessageContract = new ethers.Contract(
    //   SimpleMessageArtifact.networks["1337"].address,
    //   SimpleMessageArtifact.abi,
    //   provider
    // )
    // addContract("SimpleMessage", SimpleMessageContract)
  }, [])

  const variables = { contracts }
  const functions = { addContract }

  const value = { ...variables, ...functions }

  return <ContractContext.Provider value={value} {...props} />
}

export const useContract = () => {
  return useContext(ContractContext)
}

export default ContractProvider