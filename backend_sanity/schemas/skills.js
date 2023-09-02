export default{
    name:'skill',
    title:'Skill',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}
