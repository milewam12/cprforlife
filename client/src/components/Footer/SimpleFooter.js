import React from "react";


const SimpleFooter = () => {
    return (
    <div>
           <footer>
           <div className="footer-copyright">
                        <div className="container-fluid">
                        <span>
                        © CPR for Life Orlando {new Date().getFullYear()} |  <a href="https://github.com/milewam12" > Proudly built with React</a></span> 
                        </div>
                    </div>
                </footer>

    </div>
    )
}
    

export default SimpleFooter;