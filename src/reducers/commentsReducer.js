const commentsInitialState=[]


const commentsReducer=(state=commentsInitialState,action)=>{
console.log('action',action.type)
    switch(action.type){
        case 'SET_COMMENTS':{
            return [...action.payload]
        }
        
        default:{
            return [...state]
        }
    }
}

export default commentsReducer