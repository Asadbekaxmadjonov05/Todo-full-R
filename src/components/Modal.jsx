import React  from 'react'

function Modal({children, isOpenModal, setIsOpenModal}) {
  return (
    <div onClick={(e) => e.target.id == "wrapper" ? setIsOpenModal(false):setIsOpenModal(true)} id='wrapper' className={`${isOpenModal ? "scale-100":"scale-0"} duration-300 fixed top-0 bottom-0 right-0 left-0 backdrop-blur-md `}>
        <div className='w-[500px] mt-10 p-5 rounded-xl bg-blue-400 mx-auto'>{children}</div>
    </div>
  )
}

export default Modal
