const navigation = {
    main: [
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },

    ],
    social: [
        //added som social medias


    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-800  absolute w-full bottom-0">
            <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6 text-center">
                            <a href={item.href} className="text-sm leading-6 text-white hover:text-gray-400">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">

                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2020 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}