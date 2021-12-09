const initialData = {
    tasks:{
        'task-1':{id:'task-1', content:'take out the grabage'},
        'task-2':{id:'task-2', content:'watch out my favorite show'},
        'task-3':{id:'task-3', content:'charge my phone'},
        'task-4':{id:'task-4', content:'cook dinner'}
    },
    columns:{
        'column-1':{
            id:'column-1',
            title:'to do',
            width:1,
            taskIds:[],
        },
        'column-2':{
            id:'column-2',
            title:'In progess',
            width:1,
            taskIds:[]
        },
        'column-3':{
            id:'column-3',
            title:'In progess',
            width:1,
            taskIds:[]
        },
        'column-4':{
            id:'column-4',
            title:'In progess',
            width:2,
            taskIds:[]
        },
        
        'column-7':{
            id:'column-7',
            title:'Done',   
            width:1,
            taskIds:[]
        }

    },
    columnOrder:['column-1', 'column-2','column-3','column-4','column-7'],
}

export default initialData;