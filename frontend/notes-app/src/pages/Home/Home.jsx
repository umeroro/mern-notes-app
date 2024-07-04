import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard';
import { MdAdd } from 'react-icons/md';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title="Practice the Code Daily" 
            date="3 June 2024" 
            content="Practice the Code Daily 3 June"
            tags="#Practice"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
          />
        </div>
      </div>
      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-1 bottom-10' onClick={() => {}}>
        <MdAdd className='text-[32px] text-white' />
      </button>
    </>
  )
}

export default Home;
