import React from "react";
import './footer.css'

export default function Footer() {
  return (
    <footer className="main-footer">
        <div className="footer-middle">
      <div className="container">
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
            <p className="text-xs-center">
             &copy; {new Date().getFullYear()} Recipes App - All Rigths Reserved 
            </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
          
        
          
          


