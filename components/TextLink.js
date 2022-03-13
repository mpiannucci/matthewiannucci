
const TextLink = ({ title, target }) => (
    <a
        className="text-blue-500 hover:text-blue-600 
                     outline outline-2 outline-blue-500 hover:outline-blue-600 
                     p-1 rounded-lg font-semibold text-sm"
        href={target}
    >
        {title}
    </a>
)

export default TextLink;