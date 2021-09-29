import { ethers } from "ethers"
import { createContext, useContext, useEffect, useState } from "react"

// import ContractArtifact from '../artifacts/contracts/Contract.sol/Contract.json';
import { useEthereum } from "./EthereumProvider"

const ContractContext = createContext()

const ContractProvider = (props) => {
  const { provider } = useEthereum()
  const [contracts, setContracts] = useState([])

  function addContract(name, contract) {
    let newContracts = [...contracts]
    newContracts[name] = contract
    setContracts(newContracts)
  }

  useEffect(() => {
    // const Contract = new ethers.Contract(
    //   '0xC36c784B5b787878841508830AdBa84C9DD817A9',
    //   ContractArtifact.abi,
    //   provider
    // )
    // addContract("Contract", Contract)
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