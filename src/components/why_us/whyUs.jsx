import React from 'react';

import './whyUs.css'
import { whyUs } from '../../data/why-us-data'

function WhyUsSection() {
    return(
        <div className="flex-column flex-center mg-3">
            <div className="flex-space-btwn flex-center why-us-contanier">
            {
                whyUs.map(reason =>
                    (
                        <div className="flex-layout glass-container" style={{alignItems:'center',width:'17rem',margin:'1rem 5px',padding:'8px'}}>
                            <img className="glass-bg" src={reason.icon.src}
                            alt={reason.icon.alt}/>
                            <div className="flex-column" style={{alignItem:'flex-end'}}>
                                <h4>{reason.title}</h4>
                                <span style={{fontSize:'14px'}}>{reason.description}</span>
                            </div>
                        </div>
                    ))
            }
            </div>
        </div>
        
        );
}

export { WhyUsSection }