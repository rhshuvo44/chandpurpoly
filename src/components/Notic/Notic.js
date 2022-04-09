import React from 'react';
import { Link } from 'react-router-dom';
import './Notic.css';


const Notic = () => {
    return (
        <div className='container notic-section'>
            <div className="row">
                <div className="col-md-9">
        <div className="notic-board">
        <h1 className='notic-title'>নোটিশ বোর্ড</h1>
        <hr />
        <ul>
            <li><Link to='/'> ২০২১-২২ শিক্ষা বর্ষের ওরিয়েন্টেশন ও অভিভাবক দিবস</Link></li>
            <li><Link to='/'> ২৬ মার্চ মহান স্বাধীনতা ও জাতীয় দিবস</Link></li>
            <li><Link to='/'>  ২৫ মার্চ-২০২২ গণ হত্যা দিবস</Link></li>
            <li><Link to='/'>বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা</Link></li>
           
            
        </ul>
        </div>
                </div>
                <div className="col-md-3">
                    <h1>side bar</h1>
                </div>
            </div>
        </div>
    );
};

export default Notic;