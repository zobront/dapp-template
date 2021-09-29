import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react';

import { useEthereum } from "../providers/EthereumProvider"
import { useContract } from "../providers/ContractProvider"

const Home = () => {
  const { provider, signer, address } = useEthereum();
  const { contracts } = useContract();
  // destructure contracts into the individual contract names

  return (
    <Layout>
      <h1>Dapp Template</h1>
    </Layout>
  );
}

export default Home;