import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__filter" >
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://www.teahub.io/photos/full/87-879470_computer-programming-coding-technology.jpg"
                channel="Smart Programmer"
                verified
                subs="500k"
                noOfVideos={300}
                description="You can find awesome programming tutorials on this channel.It is for all.We teach you programming tricks."
            />
            <hr />

            <VideoRow
                views="1.3M"
                subs="500k"
                description="Do you want to free one hour training.... on how to became a freelancer"
                timestamp="1 hour ago"
                channel="Smart Programmer"
                title="Lets built the YouTube clone with react js"
                image="https://cnet3.cbsistatic.com/img/982svTaTodJWXM_h_h1-GdR0WAE=/940x0/2020/01/01/301595b2-19b5-4399-94a2-718b3e3ed15c/youtube-logo-laptop-4692.jpg"
            />
            <VideoRow
                views="1.3M"
                subs="500k"
                description="Do you want to free one hour training.... on how to became a freelancer"
                timestamp="1 hour ago"
                channel="Smart Programmer"
                title="Lets built the YouTube clone with react js"
                image="https://cnet3.cbsistatic.com/img/982svTaTodJWXM_h_h1-GdR0WAE=/940x0/2020/01/01/301595b2-19b5-4399-94a2-718b3e3ed15c/youtube-logo-laptop-4692.jpg"
            />
            <VideoRow
                views="1.3M"
                subs="500k"
                description="Do you want to free one hour training.... on how to became a freelancer"
                timestamp="1 hour ago"
                channel="Smart Programmer"
                title="Lets built the YouTube clone with react js"
                image="https://cnet3.cbsistatic.com/img/982svTaTodJWXM_h_h1-GdR0WAE=/940x0/2020/01/01/301595b2-19b5-4399-94a2-718b3e3ed15c/youtube-logo-laptop-4692.jpg"
            />
            <VideoRow
                views="1.3M"
                subs="500k"
                description="Do you want to free one hour training.... on how to became a freelancer"
                timestamp="1 hour ago"
                channel="Smart Programmer"
                title="Lets built the YouTube clone with react js"
                image="https://cnet3.cbsistatic.com/img/982svTaTodJWXM_h_h1-GdR0WAE=/940x0/2020/01/01/301595b2-19b5-4399-94a2-718b3e3ed15c/youtube-logo-laptop-4692.jpg"
            />
        </div>
    );
}

export default SearchPage
