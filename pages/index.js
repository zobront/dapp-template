import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { Button } from 'semantic-ui-react'

import { useState, useEffect } from 'react';
import { useEthereum } from "../providers/EthereumProvider"
import { useContract } from "../providers/ContractProvider"

const Home = () => {
  const { provider, signer, address } = useEthereum();
  const { contracts } = useContract();
  // destructure contracts into the individual contract names: const { ContractName } = contracts;

  // if using useEffect, need to check for contracts to exist before using them

  // to show loading, create a status state and something like...
    // setStatus('loading')
    // const tx = await Contract.connect(signer).updateLucky(newNum);
    // await tx.wait()
    // setStatus('ready')

  return (
    <Layout>
      <h1>Dapp Template</h1>
    </Layout>
  );
}

export default Home;