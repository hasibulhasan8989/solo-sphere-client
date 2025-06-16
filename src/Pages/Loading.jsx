

const Loading = () => {
    return (
        <div className="  ">
            <section class="bg-white ">
    <div class="container px-6 py-8 mx-auto animate-pulse">
        <div class="text-center">
            <p class="w-32 h-2 mx-auto bg-gray-200 rounded-lg "></p>

            <div class="flex flex-wrap justify-center gap-4 mt-10">
                <p class="w-24 h-2 bg-gray-200 rounded-lg"></p>
                <p class="w-24 h-2 bg-gray-200 rounded-lg"></p>
                <p class="w-24 h-2 bg-gray-200 rounded-lg "></p>
                <p class="w-24 h-2 bg-gray-200 rounded-lg "></p>
                <p class="w-24 h-2 bg-gray-200 rounded-lg "></p>
            </div>

        </div>

        <hr class="my-6 border-gray-200 md:my-10 " />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="w-24 h-2 bg-gray-200 rounded-lg "></p>

            <p class="w-64 h-2 bg-gray-200 rounded-lg "></p>
        </div>
    </div>
</section>
        </div>
    );
};

export default Loading;