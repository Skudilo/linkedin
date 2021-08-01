import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground/>
          <a>
            <Photo />
            <Link>
              Welcome, {props.user ? props.user.displayName : 'there!'}
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt=""/>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt=""/>
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt=""/>
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside
`

const ArtCard = styled.div`
  text-align:center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position:relative;
  border: 1px solid rgba(0, 0, 0, .15);
`

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
`

const CardBackground = styled.div`
  background: url('/images/card-bg.svg') center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`

const Photo = styled.div`
  background: #fff url("/images/photo.svg") center no-repeat;
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: border-box;
  background-size: 60%;
  border: 2px solid #ffffff;
  margin: -38px auto 12px;
  border-radius: 50%;
`

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, .9);
  font-weight: 600;
`

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 12px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, .15);
  padding: 12px 0 15px;
  
  & > a {
    text-decoration: none;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 4px 12px;
    
    &:hover {
    background-color: rgba(0, 0, 0, .08);
    }
    div {
      display:flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.3;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    
    svg {
      color: rgba(0, 0, 0, 1);
    }
  }
`

const Item = styled.a`
  border: none rgba(0, 0, 0, .8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display:block;
  span {
    display:flex; 
    align-items:center;
    color: rgba(0, 0, 0, .6);
  }
  &:hover{
    background-color: rgba(0, 0, 0, .08);
  }
`

const CommunityCard = styled(ArtCard)`
 padding: 8px 0 0;
 text-align: left;
 display:flex; 
 flex-direction: column;
 a {
   color: #000000;
   padding: 4px 12px 4px 12px;
   font-size: 12px;
   
   &:hover {
    color: #0a66c2;
   }
   
   span {
     display:flex;
     align-items: center;
     justify-content: space-between;
   }
   
   &:last-child {
     color: rgba(0, 0, 0, .6);
     text-decoration: none;
     border-top: 1px solid #d6cec2;
     padding: 12px;
     &:hover {
       background-color: rgba(0, 0, 0, .08);
     }
   }
 }
`

const mapStateToProps = (state) => ({
  user: state.userState.user
})

export default connect(mapStateToProps)(LeftSide)