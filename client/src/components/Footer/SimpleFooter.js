import React from "react";


const SimpleFooter = () => {
    return (
    <div>
           <footer>
           <div className="footer-copyright">
                        <div className="container-fluid">
                        © CPR for Life Orlando {new Date().getFullYear()} | All rights reserved by <a href="http://mgfactor.com/" > MG Factor</a> 
                        </div>
                    </div>
                </footer>

    </div>
    )
}
    

export default SimpleFooter;