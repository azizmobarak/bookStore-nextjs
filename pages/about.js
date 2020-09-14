import React from 'react';

export default function About() {
  return (
    <div className="container d-flex justify-content-center flex-column align-items-center">
    <h1>About us :</h1><br/>
    <p className="maintext">
    it's a long story , but I m going to tell some here
    </p>

    <style jsx>
    {
        `
        .maintext
        {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        `
    }
    </style>
    </div>
  );
}
