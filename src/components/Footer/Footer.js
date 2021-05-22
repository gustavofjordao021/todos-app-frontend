import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col text-xs m-4 text-center justify-center md:justify-between md:mx-16 md:flex-row">          
        <div className="mb-1">© 2021 Goalify</div>                              
            <div className="justify-center text-center">
                <b>
                  Made with{" "}
                  <span role="img" aria-label="love">
                    💙 &nbsp;
                  </span>
                </b>
                by Gustavo Jordão                
            </div>
      </footer>
    </>
  );
};

export default Footer;