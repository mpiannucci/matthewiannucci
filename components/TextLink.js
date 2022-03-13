
const TextLink = ({ title, target }) => (
    <a
        className="text-blue-500 dark:text-blue-300 hover:text-blue-600  dark:hover:text-blue-500
                     outline outline-2 outline-blue-500 dark:outline-blue-300 hover:outline-blue-600 dark:hover:outline-blue-500
                     p-1 rounded-lg font-semibold text-sm"
        href={target}
    >
        {title}
    </a>
)

export default TextLink;