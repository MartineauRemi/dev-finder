import React from 'react'
import styled from "styled-components"
import twitter from "../assets/icon-twitter.svg"
import website from "../assets/icon-website.svg"
import location from "../assets/icon-location.svg"
import company from "../assets/icon-company.svg"

const Wrapper = styled.article`
    width: 100%;
    background-color: ${props => props.darkTheme? 'var(--bg-dark-secondary)' : 'var(--bg-light-secondary)'};
    padding: 2rem 1.5rem;
    border-radius: var(--border-radius);
    display: grid;
    row-gap: 1.5rem;
    grid-template-areas: 'profilePic heading' 'bio bio' 'stats stats' 'links links';
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-primary)'};

    @media screen and (min-width: 768px){
        padding: 2.5rem;
        grid-template-areas: 'heading' 'bio' 'stats' 'links';
    }

    @media screen and (min-width: 1440px){
        padding: 3.25rem 3rem;
        grid-template-columns: 4.375rem auto;
        column-gap: 2.25rem;
        grid-template-areas: 'profilePic heading' 'profilePic bio' '. stats' '. links'
    }
`

const Heading = styled.section`
    grid-area: heading;

    @media screen and (min-width: 768px) and (max-width: 1439px){
        margin-left: 6.625rem;
    }
`

const ProfilePic = styled.img`
    background: rebeccapurple;
    grid-area: profilePic;
    border-radius: 50%;

    @media screen and (min-width: 768px) and (max-width: 1439px){
        grid-area: heading;
    }
    
`

const Username = styled.h1`
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
`

const Usertag = styled.h3`
    color: var(--blue);
`

const Bio = styled.p`
    grid-area: bio;
`

const Date = styled.p`

`

const Stats = styled.ul`
    background-color: ${props => props.darkTheme ? 'var(--bg-dark-primary)' : 'var(--bg-light-primary)'};
    grid-area: stats;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1rem;
    border-radius: var(--border-radius);

    @media screen and (min-width: 768px){
        padding: 1.25rem 2rem;
    }
`

const StatItem = styled.li`
    list-style-type: none;
    color: ${props => props.darkTheme? 'var(--color-dark-primary)' : 'var(--color-light-secondary)'};
    text-align: center;
`

const Infos = styled.ul`
    grid-area: links;
    
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const InfosItem = styled.li`
    list-style-type: none;
    color: ${props => props.darkTheme
                        ? 'var(--color-dark-primary)'
                        : 'var(--blueish-gray)'};
    display: flex;
    flex-direction: row;
    align-items: center;

    img{
        margin-right: 1.25rem;
        object-fit: contain;
    }

    @media screen and (max-width: 767px){
        margin-bottom: 1rem;
    }
    
    @media screen and (min-width: 768px){
        &:nth-child(1), &:nth-child(2){
            margin-bottom: 1rem;
        }
        width: 50%;
    }
`

export default function Dashboard({darkTheme, data}) {
    const user = JSON.parse(data)
    return (
        <Wrapper darkTheme={darkTheme}>
            <ProfilePic
                    width="70px"
                    height="70px"
                    src={user.avatar_url}
                    alt={user.name + " profile picture"}/>

            <Heading>
                <Username>{user.name}</Username>
                <Usertag>@{user.login}</Usertag>
                <Date>Joined <time>{user.created_at}</time></Date>
            </Heading>

            <Bio>
                {user.bio}
            </Bio>

            <Stats
                darkTheme={darkTheme}>
                    <StatItem
                        darkTheme={darkTheme}>
                        <h4>
                            Repos
                        </h4>
                        <strong>{user.public_repos}</strong>
                    </StatItem>
                    <StatItem
                        darkTheme={darkTheme}>
                        <h4>
                            Followers
                        </h4>
                        <strong>{user.followers}</strong>
                    </StatItem>
                    <StatItem
                        darkTheme={darkTheme}>
                       <h4>
                           Following
                       </h4>
                       <strong>{user.following}</strong>
                    </StatItem>
            </Stats>

            <Infos>
                <InfosItem
                    darkTheme={darkTheme}>
                    <img
                        src={location}
                        width="20px"
                        height="20px"
                        alt="" />
                    <span>
                         {user.location || 'Not available'}
                    </span>
                </InfosItem>
                <InfosItem
                    darkTheme={darkTheme}>
                    <img
                        src={twitter}
                        width="20px"
                        height="20px"
                        alt="" />
                    <span>
                        {user.twitter_username || 'Not available'}
                    </span>
                </InfosItem>
                <InfosItem
                    darkTheme={darkTheme}>
                    <img
                        src={website}
                        width="20px"
                        height="20px"
                        alt="" />
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer">
                            {user.blog || 'Not available'}
                    </a>
                </InfosItem>
                <InfosItem
                    darkTheme={darkTheme}>
                    <img
                        src={company}
                        width="20px"
                        height="20px"
                        alt="" />
                    <span>
                        {user.company ? `@${user.company}` : 'Not available'}
                    </span>
                </InfosItem>
            </Infos>
        </Wrapper>
    )
}
