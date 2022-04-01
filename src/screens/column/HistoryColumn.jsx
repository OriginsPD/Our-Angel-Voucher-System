import React from 'react'

const HistoryColumn = () => {
    return (
        < div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0" >
            <div className="pl-6 lg:w-80">
                <div className="pt-6 pb-2">
                    <h2 className="text-sm font-semibold">Activity</h2>
                </div>
                <div>
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="py-4">
                            <div className="flex space-x-3">
                                <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium">You</h3>
                                        <p className="text-sm text-gray-500">1h</p>
                                    </div>
                                    <p className="text-sm text-gray-500">Deployed Workcation (2d89f0c8 in master) to production</p>
                                </div>
                            </div>
                        </li>

                        {/* <!-- More items... --> */}
                    </ul>
                    <div className="py-4 text-sm border-t border-gray-200">
                        <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-900">View all activity <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HistoryColumn