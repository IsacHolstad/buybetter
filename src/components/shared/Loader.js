const Loader = () => {
    return (
        <div className="relative flex-col flex mx-auto left-1/2 top-1/2 mt-32">
            <div className="w-10 h-10 border-purple-400 border-4 rounded-full"></div>
            <div
                className="w-10 h-10 border-purple-700 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
    );
};

export default Loader;
