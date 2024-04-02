

const Card = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
            <img className="w-full h-40 object-cover object-center" src="https://via.placeholder.com/350x200" alt="Placeholder" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Title</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Card
