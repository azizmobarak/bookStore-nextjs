import React from 'react';
import ContactForm from './contactform';

export default function Footer() {


  return (
    <div className="footer">
    <div className="row w-100 text-center py-2">
    <div className="col-sm-5 text-left" >
    <ul className="nav">
    <li className="nav-item bg-transparent border-0">
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>about</a></li>
    <li className="list-group-item bg-transparent border-0"><a>FAQ</a></li>
    <li className="list-group-item bg-transparent border-0"><a>Who we are?</a></li>
    </ul>
    </li>
    <li className="nav-item bg-transparent border-0">
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>Store</a></li>
    <li className="list-group-item bg-transparent border-0"><a>Privacy</a></li>
    <li className="list-group-item bg-transparent border-0"><a>About Author</a></li>
    </ul>
    </li>
    <li className="nav-item bg-transparent border-0">
    <ul className="list-group">
    <li className="list-group-item bg-transparent border-0"><a>Books</a></li>
    <li className="list-group-item bg-transparent border-0"><a>Contact</a></li>
    </ul>
    </li>
    </ul>
    </div>
    <div className="col-sm-3 d-flex flex-wrap justify-content-start py-4" >
    <img className="px-2" src="/assets/icon/email.svg" width="60" />
    <img className="px-2 logofooter" src="/assets/icon/facebook.svg" width="60" />
    <img className="px-2 " src="/assets/icon/skype.svg" width="60" />
    <img className="px-2 logofooter" src="/assets/icon/whatsapp.svg" width="60" />
    </div>
    <div className="col-sm-4 d-flex justify-content-center" >
    <ContactForm/>
    </div>
    </div>
    <div className="row w-100">
    <div className="col-md-5 d-flex justify-content-center text-center">
    Created By <strong> Aziz Mobarak </strong>
    </div>
    <div className="col-md-7 d-flex justify-content-center text-center">
    <img src="/assets/icon/logo.png"/>
    </div>

    </div>
    <style jsx>
        {`
        .footer{
            width:100%;
            height:auto;
            background-color:rgb(245, 218, 99);
            padding:10px;
        }
        .logofooter{
            border-radius:80%;
        }
        `}
        </style>
    </div>
    
  );
}
