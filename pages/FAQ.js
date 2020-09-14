import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import {Add,Close} from '@material-ui/icons';

export default function faq() {

const [steper1height,setsteper1height]=useState("0px");
const [steper2height,setsteper2height]=useState("0px");
const [steper3height,setsteper3height]=useState("0px");
const [steper4height,setsteper4height]=useState("0px");

  return (
    <div className="container py-4 justify-content-center">
    <h3 className="py-3">FAQ / Most asked questions</h3>
        <table className="w-100 justify-content-arround">
        <tr className="py-3">
        <td>
        <div className="d-flex justify-content-arround">
        {
            steper1height =="0px" ?
            <div onClick={()=>setsteper1height("auto")} className="btnaddclosefaq">
            <Add  />
            </div>
            :
            <div onClick={()=>setsteper1height("0px")} className="btnaddclosefaq">
           <Close />
           </div>
        }
        <h2 className="px-3">Who we are?</h2>
        </div>
        
       <div className="divsteper" style={{ height:steper1height }}>
       {
           steper1height =="0px" ? 
           <p></p>
           :
           <p className="textmainstyle">
           it's a simple platform to display some great amazon Notebooks or diary , Journal for people that 
           interested at this kind of products , specialy from store that registred under Aziz Mobarak's author name.px-3
           ask or contact us any time if you have any question.
           </p>
       }
       </div>
        </td>
        </tr>

        <tr className="py-3">
        <td>
        <div className="d-flex justify-content-arround">
        {
            steper2height =="0px" ?
            <div onClick={()=>setsteper2height("auto")} className="btnaddclosefaq">
              <Add/>
           </div>
            :
            <div onClick={()=>setsteper2height("0px")} className="btnaddclosefaq">
             <Close/>
           </div>        }
        <h2 className="px-3">How to use it?</h2>
        </div>
        
       <div className="divsteper" style={{ height:steper2height }}>
       {
           steper2height =="0px" ? 
           <p></p>
           :
           <p className="textmainstyle">
           you can browse products and add them to your cart if you want to collect details about each book first , Login 
           to your account and then you can read the description and full title about your choices and you can choose 
           one and click on the view in amazon button you will be redirected directly to the book's page in amazon.
           </p>
       }
       </div>
        </td>
        </tr>

        <tr className="py-3">
        <td>
        <div className="d-flex justify-content-arround">
        {
            steper3height =="0px" ?
            <div onClick={()=>setsteper3height("auto")} className="btnaddclosefaq">
              <Add/>
           </div>
            :
            <div onClick={()=>setsteper3height("0px")} className="btnaddclosefaq">
             <Close/>
           </div>        }
        <h2 className="px-3">How to buy?</h2>
        </div>
        
       <div className="divsteper" style={{ height:steper3height }}>
       {
           steper3height =="0px" ? 
           <p></p>
           :
           <p className="textmainstyle">
           to purchase a product you can't buy it directly from our website , you need to pay on amazon.
           </p>
       }
       </div>
        </td>
        </tr>

        <tr className="py-3">
        <td>
        <div className="d-flex justify-content-arround">
        {
            steper4height =="0px" ?
            <div onClick={()=>setsteper4height("auto")} className="btnaddclosefaq">
              <Add/>
           </div>
            :
            <div onClick={()=>setsteper4height("0px")} className="btnaddclosefaq">
             <Close/>
           </div>        }
        <h2 className="px-3">What if I want a special book?</h2>
        </div>
        
       <div className="divsteper" style={{ height:steper4height }}>
       {
           steper4height =="0px" ? 
           <p></p>
           :
           <p className="textmainstyle">
         yes you can , if you want to have your special design just contact us from the form.
         and we will email you as soon as possible ,so you can share with us your idea or suggestion
         and we will bring it to be real for you if possible. 
           </p>
       }
       </div>
        </td>
        </tr>

        </table>
    </div>
  );
}
