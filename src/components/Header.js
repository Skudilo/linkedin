import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOutAPI} from '../actions';

const Header = (props) => {
  
  return (
    <div>
      <Container>
        <Content>
          <Logo>
            <Link to='/home'>
              <img src="/images/home-logo.svg" alt=""/>
            </Link>
          </Logo>
          <Search>
            <div>
              <input type="text" placeholder="Search"/>
              <SearchIcon>
                <img src="/images/search-icon.svg" alt=""/>
              </SearchIcon>
            </div>
          </Search>
          <Nav>
            <NavListWrap>
              <NavList className="active">
                <Link to='/home'>
                  <img src="/images/nav-home.svg" alt=""/>
                  <span>Home</span>
                </Link>
              </NavList>
              <NavList>
                <Link to='/network'>
                  <img src="/images/nav-network.svg" alt=""/>
                  <span>My network</span>
                </Link>
              </NavList>
              <NavList>
                <Link to='/jobs'>
                  <img src="/images/nav-jobs.svg" alt=""/>
                  <span>Jobs</span>
                </Link>
              </NavList>
              <NavList>
                <Link to='/messaging'>
                  <img src="/images/nav-messaging.svg" alt=""/>
                  <span>Messaging</span>
                </Link>
              </NavList>
              <NavList>
                <Link to='/notifications'>
                  <img src="/images/nav-notifications.svg" alt=""/>
                  <span>Notifications</span>
                </Link>
              </NavList>
              
              <User>
                <Link to='/user'>
                  {props.user && props.user.photoURL
                    ? (<img src={props.user.photoURL} alt=""/>)
                    : (<img src="/images/user.svg" alt=""/>)
                  }
                  <span>
                    Me
                    <img src="/images/down-icon.svg" alt=""/>
                  </span>


                  <SignOut onClick={() => props.signOut()}>
                    <Link to='/'>Sign Out</Link>
                  </SignOut>
                </Link>
              </User>
              <Work>
                <Link to="/work">
                  <img src="images/nav-work.svg" alt=""/>
                  <span>
                    Work
                    <img src="/images/down-icon.svg" alt=""/>
                  </span>
                </Link>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
    </div>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, .08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px; 
  padding-top: 5px;
`

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position:relative;
  &  > div {
    max-width: 280px;
    input {
      box-shadow: none;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, .9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border: none #dce6f1;
      vertical-align: text-top;
    }
  }
`

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content:center;
  align-items: center;
`

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position:fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
  }
`

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active  {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      position:absolute;
      left: 0;
      bottom: 0;
      transition: transform .2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, .9);
    }
  }
`

const NavList = styled.li`
  display:flex;
  align-items:center;
  a {
    display:flex;
    align-items:center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content:center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position:relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, .6);
      display:flex;
      align-items:center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover, &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`

const SignOut = styled.div`
   position:absolute;
   top: 42px;
   background: #fff;
   border-radius: 0 0 5px 5px;
   width: 100px;
   height: 40px;
   font-size: 16px;
   transition-duration: 167ms;
   text-align:center;
   display:none;
`

const User = styled(NavList)`
 a > svg {
  width: 24px;
  border-radius: 50%;
 }
 a > img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
 }
 
 span {
  display:flex;
  align-items:center;
 }
 
 &:hover {
  ${SignOut} {
    
    align-items:center;
    display:flex;
    justify-content:center;
  }
 }
`

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, .08);
`

const mapStateToProps = (state) => ({
    user: state.userState.user
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);