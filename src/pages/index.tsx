import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import styles from '../styles/Home.module.css'
import {
  Container, Landing, STitle, Nav, ANav,
  LiNav, GTitle, GContainer, Inline,
  GText, Text, GSpan, Box, BoxT, BoxP, EmailSubBox, InputBox, Button
} from '../styles/styles'
import toast, { Toaster } from 'react-hot-toast';

const Home: NextPage = () => {
  const successHex = '#00fc9e'
  const errorHex = '#ff0000';
  const [email, setEmail] = useState('')
  const [disabled, setDisabled] = useState(false)

  const checkIfEmpy = () => !email;

  const successNotification = (msg: string) =>
    toast(msg, {
      icon: '✔',
      position: 'top-right',
      duration: 3000,
      ariaProps: {
        role: 'alert',
        'aria-live': 'polite',
      },
      style: {
        backgroundColor: successHex,
        color: '#0c0d0d',
        fontFamily: 'DM Sans',
        fontWeight: 700
      }
    })

  const errorNotification = (msg: string) =>
    toast(msg, {
      icon: '✖',
      position: 'top-right',
      duration: 3000,
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
      style: {
        backgroundColor: errorHex,
        color: '#0c0d0d',
        fontFamily: 'DM Sans',
        fontWeight: 700
      }
    })
  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  function isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(re)) return true
    else return false
  }
  const saveEmail = () => {
    hanldeSubmit
    const isEmpty = checkIfEmpy();
    if (isEmpty || !isValidEmail(email)) {
      errorNotification('Please enter a valid email address')
    }
    if (!isEmpty && isValidEmail(email)) {
      axios.post('/api/emails', { email: email }).then(res => {
        if (res.status === 200) {
          successNotification(res.data.msg)
          setDisabled(true)
        }
      }).catch(err => {
        errorNotification(err.response.data.msg)
        setDisabled(false)
      })
    }
  }
  return (
    <>
      <Toaster />
      <Head>
        <title>Kraken</title>
        <meta name="description" content="Asscher the state of the art development." />
        <link rel="icon" href="https://georgexv.ru/krak.png" />
      </Head>
      <Nav>
        <h2 className={styles.navtitle}>Kraken</h2>
        <ul>
          <LiNav><ANav href='#'>Home</ANav></LiNav>
          <LiNav><ANav href='#'>Our Goal</ANav></LiNav>
          <LiNav><ANav href='#'>Serivces</ANav></LiNav>
          <LiNav><ANav href='#'>Blog</ANav></LiNav>
        </ul>
        <a className={styles.button} href='https://discord.gg/kHnPtGDWbG'>Discord</a>
      </Nav>


      <Landing>
        <Container>
          <div className={styles.top}></div>
          <h1 className={styles.title}>Kraken</h1>
          <Text variant='secondary'>Lorem Ipsum is simply dummy text of the printing .</Text>
        </Container>
      </Landing>

      <GContainer>
        <GTitle id='about'>&nbsp;Our Goal</GTitle>
        <GText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining <GSpan>essentially unchanged</GSpan>.</GText>
      </GContainer>

      <GContainer>
        <STitle id='services'>&nbsp;Services</STitle>
        <Inline>
          <Box>
            <BoxT>XXXXX XXXXX</BoxT>
            <BoxP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of, but also the leap into.</BoxP>
          </Box>
          <Box>
            <BoxT>XXXXX XXXXX</BoxT>
            <BoxP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of, but also the leap into.</BoxP>
          </Box>
        </Inline>
      </GContainer>

      <GContainer>
        <form>
          <EmailSubBox>
            <Text style={{ marginTop: '20px' }} variant='secondary'>Subscribe to our blog to get notified when we post!</Text>
            <InputBox required minLength={5} maxLength={30} name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' type="email" />
            <Button disabled={disabled} variant='secondary' type="button" onClick={saveEmail}>Join!</Button>

          </EmailSubBox>
        </form>
      </GContainer>
    </>
  )
}

export default Home
