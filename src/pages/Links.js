import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'
import Link from './Link'
import { Link as ReactRouterLink } from "react-router-dom";


const Links = ()=>{
  const { links, getLinks, createLink, updateLink ,deleteLink} = useContext(DataContext)

    const renderLinks= ()=>{
        
  
        return links.map((prop)=>{
            return (
                <div>
                  <h1>Username: {prop.username}</h1>
                  <h1>Title: {prop.title}</h1>
                  <button onClick={() => deleteLink(prop.id)}>delete link</button>
                  <button onClick={() => updateLink(prop.id)}>update link</button>
                  
                  <ReactRouterLink to={`links/${prop.id}/edit`} state={{...prop}}>edit</ReactRouterLink>
                </div>
                
              );


        //   return <Link key={link.id} {...link} deleteLink={deleteLink} updateLink={updateLink}/>
        })
      }


    return (
        <div>
        <h1>Links here</h1>

        <div>{links && renderLinks()}</div>
        <hr />

        <div>{JSON.stringify(links)}</div>
        <button onClick={getLinks}>Get Links</button>
        <button onClick={()=>createLink( {title:'From Austins homework', username:'austink'} )}>create link</button>
        <button onClick={()=>updateLink( {id:99, title:'UPDATED'} )}>update link</button>
        <button onClick={()=>deleteLink()}>delete link</button>
        </div>
    )
}

export default Links