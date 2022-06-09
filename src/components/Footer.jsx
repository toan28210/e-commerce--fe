import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Room } from '@mui/icons-material'
import { MailOutline } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img``


const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>SHOP</Logo>
        <Desc>
            Hom qua em den truong me dat eem tung buoc,
            Hom nay me len nuong mot minh em di hoc
            Huong rung thom mui khoi nuoc suoi reo thi tham co xoe o che nang
            ram mat duong em di.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Qua</ListItem>
            <ListItem>Em</ListItem>
            <ListItem>Den</ListItem>
            <ListItem>Truong</ListItem>
            <ListItem>Mai</ListItem>
            <ListItem>Hoc</ListItem>
            <ListItem>Bai</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/> O nha, Da nang
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 0987654321
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> hello@gamil.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>
    </Container>
  )
}

export default Footer