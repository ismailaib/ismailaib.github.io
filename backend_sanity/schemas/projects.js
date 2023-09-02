export default{
    name:'project',
    title:'Project',
    type: 'document',
    fields:[
        {
            name:'image',
            title:'Project Image Here',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'title',
            title:'Project Title Here',
            type:'string'
        },
        {
            name:'description',
            title:'Project Description Here',
            type:'string'
        },
        {
            name:'link',
            title:'Project Link Here',
            type:'string'
        },
        {
            name:'demo',
            title:'Project Demo Here',
            type:'string'
        },
        
        
    ]
}
