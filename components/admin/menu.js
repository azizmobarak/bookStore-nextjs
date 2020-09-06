import React from 'react';
import {Menu,Dashboard,Book,Filter} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import MenuIcons from './menu-icons';
export default function MenuItems(props) {
  return (
    <div className="bg-dark text-white h-100">
    <Button onClick={()=>props.method()}  className="py-3 text-white"><Menu /></Button>
    <MenuIcons changemain={props.changemain} width={"200px"}/>
    </div>
  );
}
