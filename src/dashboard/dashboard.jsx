import { Container, Stack, Button } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {Logo} from "../img/logo"
import { SettingsImg } from '../img/settings'
import { ProfileImg } from '../img/profile'
import { BasketImg } from '../img/basket'
import { CardImg } from '../img/card'
import { Div } from './dashboardStyle' 
import { ExitImg } from "../img/exit"

export const Dashboard = () => {
  return (
    <Container style={{display:"flex"}}>
        <Stack style={{width:"97px", height:"807px", background:"#5B5CE2"}}>
            <Stack style={{marginLeft:"24px", marginRight:"24px", paddingTop:"30px"}}>
                <div style={{marginBottom:"38px"}}>
                <Logo/>
                </div>
                <Link to="/settings-product">
                <Div style={{width:"49px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <SettingsImg/>
                </Div>
                </Link>
                <div style={{width:"49px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <ProfileImg/>
                </div>
                <Link to="/add-product" >
                <Div style={{width:"49px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}} >
                    <BasketImg/>
                </Div>
                </Link>
                <div style={{width:"49px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center"}} >
                    <CardImg/>
                </div>
            </Stack>
            <div>
                <Outlet/>
            </div>
        </Stack>
        
    </Container>
  )
}

