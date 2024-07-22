import create from 'zustand'

const useStore =create ((set)=>({
    data:{
        title:"",
        price:Number,
        desc:"",
        image:""
    },
    setData:(newData)=>set({data:newData})
}));

export default useStore;