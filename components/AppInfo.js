import TextLink from "./TextLink";

const AppInfo = ({ name, tagline, description, icon, links }) => (
    <div className="flex flex-row py-4 space-x-4 w-[400px]">
        {icon &&
            <img className="object-contain h-32 w-32 rounded-3xl" src={icon} alt={name} />
        }
        <div className="flex flex-col">
            <h4 className="text-xl font-bold">{name}</h4>
            <h6 className="text-md">{tagline}</h6>
            <p>{description}</p>
            <div className="flex flex-row space-x-3 py-4">
                {links?.map(l => <TextLink {...l} />)}
            </div>
        </div>
    </div>
);

export default AppInfo;