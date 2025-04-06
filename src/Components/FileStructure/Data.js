import { Children } from "react"

const Data=[
    {
        id:"1",
        name:"Root",
        isFolder:true,
        Children:[
            {
                id:"2",
                name:"vite.svg",
                isFolder:false
            }
        ]
    },
    {
        id:"3",
        name:"Src",
        isFolder:true,
        Children:[
            {
                id:"4",
                name:"app.jsx",
                isFolder:false

        },
        {
            id:"5",
            name:"index.css",
            isFolder:false
        },
        {
            id:"6",
            name:"component",
            isFolder:true,
            Children:[]
        }
    ]
    },
    {
        id:"7",
        name:"index.html",
        isFolder:false
    },

]

export default Data