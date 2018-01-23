import React from "react";
import { Timeline } from 'react-twitter-widgets'


const Twitter = () => {
    return (
        <div>

{/* <a className="twitter-timeline"  data-height="250" data-link-color="#E81C4F" href="https://twitter.com/milenagarces14?ref_src=twsrc%5Etfw">Tweets by CPR For Life Orlando</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>  */}
            <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'twitterdev'
              }}
              options={{
                username: 'TwitterDev',
                height: '250',
                
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            
            />


        </div>
    )
}

export default Twitter;