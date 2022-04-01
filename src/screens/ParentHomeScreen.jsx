import React from 'react'
import ActionColumn from './column/ActionColumn'
import CurrentColumn from './column/CurrentColumn'
import HistoryColumn from './column/HistoryColumn'
import ParentTop from './TopBar/ParentTop'

const ParentHomeScreen = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"></div>
            <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"></div>
            <div className="relative min-h-full flex flex-col">

                {/* <ParentTop /> */}

                {/* <!-- 3 column wrapper --> */}
                <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">

                    {/* <!-- Left sidebar & main wrapper --> */}
                    <div className="flex-1 min-w-0 h-screen bg-white xl:flex">

                        <ActionColumn />

                        <CurrentColumn />

                    </div>

                    <HistoryColumn />

                </div>
            </div>
        </div>
    )
}

export default ParentHomeScreen