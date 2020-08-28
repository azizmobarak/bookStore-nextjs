import React from 'react';

export default function ContactForm() {
  return (
    <form className="form-group" noValidate autoComplete="off">
    <div className="form-row">
    <label for="email">Email address</label><br/>
    <input type="email" className="form-control" id="email" ></input>
    </div>
    <div className="form-row">
    <label for="subject">Subject</label><br/>
    <input type="email" className="form-control" id="subject"></input>
    </div>
    <div className="form-row">
    <label for="subject">Message</label><br/>
    <textarea rows="4" className="form-control" id="subject"></textarea>
    </div>
    <div className="form-row justify-content-center">
    <input style={{ marginTop:'10px' }} type="submit" className="btn btn-success" value="leave a message"/>
    </div>
    </form>
  );
}
