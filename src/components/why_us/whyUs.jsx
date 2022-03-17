import React from 'react';

import './whyUs.css'
import { whyUs } from '../../data/why-us-data'

function WhyUsSection() {
    return(
        <div className="flex-column flex-center mg-3">
            <h3 className="mg-tb-1">Why Choose Us ?</h3>
            <div className="flex-space-btwn flex-center why-us-contanier" style={{padding:'1rem', width: '35rem'}}>
            {
                whyUs.map(reason =>
                    (
                        <div className="flex-layout flex-center" style={{margin:'1rem'}}>
                            <img className="glass-bg" src={reason.icon.src}
                            alt={reason.icon.alt}/>
                            <div className="flex-column">
                                <h5>{reason.title}</h5>
                                <span className="p-xs">{reason.description}</span>
                            </div>
                        </div>
                    ))
            }
            </div>
        </div>
        
        );
}

export { WhyUsSection }