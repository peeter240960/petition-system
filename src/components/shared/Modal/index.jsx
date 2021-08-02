import React from 'react'

function ModalGlobal({ children, showModal, setShowModal, title = "รายละเอียด" }) {
    if (showModal) {
        return (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none px-3"
                >
                    <div className="relative w-auto mx-auto w-full md:max-w-2xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-center justify-between p-5 pb-1 rounded-t">
                                <h3 className="text-xl font-semibold">
                                    {title}
                                </h3>
                                <button
                                    className="p-1 text-black"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="text-black">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
    }
    return null

}

export default ModalGlobal
