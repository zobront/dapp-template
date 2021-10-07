import { ethers } from "ethers"

import { createContext, useContext, useEffect, useState } from "react"

const EthereumContext = createContext()

const EthereumProvider = (props) => {
  const [initialized, setInitialized] = useState(false)
  const [provider, setProvider] = useState()
  const [signer, setSigner] = useState()
  const [address, setAddress] = useState([])

  function updateProvider(_provider) {
    setProvider(_provider)
    setSigner(_provider.getSigner())
  }

  async function getAddress() {
    if (provider.connection.url.startsWith("http")) return
    const accounts = await provider.send("eth_requestAccounts", [])
    setAddress(accounts[0])
  }

  function setInitialProvider() {
    const ethereum = window.ethereum
    if (!ethereum) {
      updateProvider(new ethers.getDefaultProvider())
      return
    } else {
      ethereum.on("accountsChanged", function (accounts) {
        setAddress(accounts)
      })
      ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      updateProvider(new ethers.providers.Web3Provider(ethereum))
    }
  }

  useEffect(() => {
    setInitialProvider()
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) getAddress()
  }, [initialized])

  const variables = { provider, signer, address }
  const functions = { setAddress, getAddress }

  const value = { ...variables, ...functions }

  return initialized ? <EthereumContext.Provider value={value} {...props} /> : null
}

export const useEthereum = () => {
  return useContext(EthereumContext)
}

export default EthereumProvider
