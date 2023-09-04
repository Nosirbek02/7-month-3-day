import { Container, Stack, Button, TextField } from "@mui/material";
import React from "react";
import { ExitImg } from "../img/exit";
import { Input } from "./dashboardStyle";
import { SearchImg } from "../img/search";
import SizeCheckboxes from "./checkbox";
import { useGetDetail } from "../service/query/useGetDetail";
import { EditIcon } from "../img/edit";
import {DeleteIcon} from "../img/delete"

export const SettingsProduct = () => {
  const {data}=useGetDetail()
  return (
    <Container style={{ marginLeft: "122px", paddingTop: "-250px" }}>
      <Stack>
        <Stack
          style={{
            marginLeft: "0",
            width: "1227px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:"-300px",
            marginBottom:"40px"
          }}
        >
          <div>
            <h2
              style={{
                color: "#212121",
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              Товары
            </h2>
            <p
              style={{
                color: "#B5B5C3",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "0px",
                marginTop: "0px",
              }}
            >
              Главная / Товары
            </p>
          </div>
          <div>
            <Button
              style={{
                width: "105px",
                height: "40px",
                background: "#F7F7FF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "16px" }}>
                <ExitImg />
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "550",
                  color: "#212121",
                }}
              >
                Выйти
              </div>
            </Button>
          </div>
        </Stack>
        <Stack style={{ width:"1227px", height:"700px", borderRadius:"12px"}}>
          <Stack style={{marginTop:"20px", display:"flex", justifyContent:"space-between", flexDirection: "row",marginRight:"25px", marginLeft:"24px", paddingBottom:"20px", borderBottom:"1px solid #E8E8F1" }}>
            <div >
              <h3 style={{color: "#212121", fontSize:"16px", fontWeightz:"700"}}>
              Все товары (5)
              </h3>
            </div>
            <TextField placeholder="Поиск"/>
          </Stack>

          <Stack style={{display:"flex", flexDirection:"row", alignItems:"center", marginLeft:"24px", marginTop:"20px", borderBottom:"1px solid #E8E8F1", paddingBottom:"20px"}}>
            <div>
              <SizeCheckboxes/>
            </div>
            <div style={{color: "#B5B5C3", fontSize:"14px", fontWeight:"700", marginRight:"183px", }}>
            Наименование
            </div>
            <div style={{color: "#B5B5C3", fontSize:"14px", fontWeight:"700", marginRight:"154px", }}>
            Артикул
            </div>
            <div style={{color: "#B5B5C3", fontSize:"18px", fontWeight:"700", marginRight:"108px", }}>
            Бренд
            </div>
            <div style={{color: "#B5B5C3", fontSize:"18px", fontWeight:"700", marginRight:"116px", }}>
            Цена
            </div>
            <div style={{color: "#B5B5C3", fontSize:"20px", fontWeight:"700", marginRight:"116px", }}>
            Цена со скидкой
            </div>
          </Stack>

          {data?.map((item)=>(
            <Stack key={item.id} style={{display:"flex", flexDirection:"row", alignItems:"center", marginLeft:"24px", marginTop:"24px", borderBottom:"1px solid #E8E8F1", paddingBottom:"24px"}}>
            <div style={{marginRight:"24px"}}>
              <SizeCheckboxes/>
            </div>
            <div style={{color: "#212121", fontSize:"14px", fontWeight:"800", marginRight:"200px",}}>
            Товар {item.id}
            </div>
            <div style={{color: "#212121", fontSize:"12px", fontWeight:"800", marginRight:"77px",}}>
            21341472702202201
            </div>
            <div style={{color: "#212121", fontSize:"14px", fontWeight:"600", marginRight:"120px",}}>
              {item.brand}
            </div>

            <div style={{color: "#212121", fontSize:"14px", fontWeight:"600", marginRight:"120px",}}>
              {item.price}
            </div>

            <div style={{color: "#212121", fontSize:"14px", fontWeight:"600", marginRight:"150px",}}>
              {item.price2}
            </div>
            <div style={{marginRight:"22px"}}>
              <EditIcon/>
            </div>
            <div>
              <DeleteIcon/>
            </div>

            </Stack>
          ))}
          

        </Stack>
      </Stack>
    </Container>
  );
};
