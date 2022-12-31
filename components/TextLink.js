
const TextLink = ({ title, target }) => (
    <a
        className="text-blue-500 dark:text-blue-300 hover:text-blue-600  dark:hover:text-blue-500
                     border-2 border-blue-500 dark:border-blue-300 hover:border-blue-600 dark:hover:border-blue-500
                     p-1 rounded-lg font-semibold text-sm"
        target="_blank" 
        rel="noopener noreferrer"
        href={target}
    >
        {title}
    </a>
)

export default TextLink;