import { useAppSelector } from "../utils/hooks";

const Aside = () => {

    const listAside = [
        {
            heading: "Explore",
            list: ['Home', 'Trending', 'Subscriptions', 'Library']
        },
        {
            heading: "Account",
            list: ['Your Channel', 'Purchases', 'History']
        },
        {
            heading: "Coding",
            list: ['Harkirat', 'Striver', 'CodingBlogs']
        },
        {
            heading: "Comedy",
            list: ['StandUp', 'Masti', 'Bakchodi']
        },

        {
            heading: "Subscription",
            list: ['Zakir Khan', 'Unacademy', '100xdevs']
        }

    ]

    const isMenuOpen = useAppSelector((state) => state.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <aside className="fixed w-56 top-16 left-0 h-full bg-gray-100 border-r border-gray-200">
            {/* below css is to add functionality of vertical scroll in my aside component */}
            <div className="h-full overflow-y-scroll">
                {listAside.map((ele) => {
                    return (
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{ele.heading}</h2>
                            <ul className="mt-4 space-y-2">
                                {ele.list.map((list) => <li className="text-gray-800 hover:text-blue-600 cursor-pointer">{list}</li>
                                )}
                            </ul>
                        </div>
                    )
                })}

                <div className="h-16"> 
                </div>
            </div>
        </aside>
    );
};

export default Aside;
