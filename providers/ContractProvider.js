import { ethers } from "ethers"
import { createContext, useContext, useEffect, useState } from "react"

import ReplaceThisArtifact from '../artifacts/contracts/ReplaceThis.sol/ReplaceThis.json';
import { useEthereum } from "./EthereumProvider"

const ContractContext = createContext()

// NOTE: Replace instances of "ReplaceThis" with uppercase, and "replacethis" with lowercase instance

const ContractProvider = (props) => {
  const { provider } = useEthereum()
  const [contracts, setContracts] = useState([])

  function addContract(name, contract) {
    let newContracts = [...contracts]
    newContracts[name] = contract
    setContracts(newContracts)
  }

  useEffect(() => {
    const ReplaceThis = new ethers.Contract(
      '0xC36c784B5b787878841508830AdBa84C9DD817A9',
      ReplaceThisArtifact.abi,
      provider
    )
    addContract("replacethis", ReplaceThis)
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