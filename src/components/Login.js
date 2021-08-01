import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {signInAPI} from '../actions';
import {Redirect} from 'react-router-dom';



const Login = (props) => {
  return (
  <Container>
    { props.user && <Redirect to='/home' /> }
    <Nav>
      <a href="/">
        <img src="/images/login-logo.svg" alt=""/>
      </a>
      <div>
        <Join>Join now</Join>
        <SignIn>Sign in</SignIn>
      </div>
    </Nav>
    <Section>
      <Hero>
        <h1>Welcome to your professional community</h1>
        <img src="/images/login-hero.svg" alt=""/>
      </Hero>
      <Form>
        <Google onClick={() => props.signIn()}>
          <img src="/images/google.svg" alt=""/>
          Sign in with Google
        </Google>
      </Form>
    </Section>
  </Container>
  );
};

const Container = styled.div`
  padding: 0;  
`

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgb(0, 0, 0, .6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, .08);
    color: rgba(0, 0, 0, .9);  
  }
`

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 128ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`

const Section = styled.section`
  display: flex; 
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0
  }
`

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    //z-index: -1;
    width: 700px;
    height: 670px;
    position:absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 168ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, .25);
    color: rgba(0, 0, 0, 0.75);
  }
`

const mapStateToProps = (state) => ({
  user: state.userState.user
})

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI())
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);