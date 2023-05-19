import AppInfo from '../components/AppInfo'
import TextLink from '../components/TextLink'

export const metadata = {
    title: 'Matthew Iannucci',
    description: 'Welcome to my site',
    favicon: '/favicon.ico',
};

export default function Index() {
    return (
        <>
            <div id="header" className="flex flex-row flex-wrap py-4">
                <img
                    src="/surfing_portrait_2020.jpg"
                    alt="Portait of myself paddling"
                    className=' object-cover rounded-full h-64 w-64'
                />
                <div className="px-4 py-4 max-w-md min-w-sm self-center">
                    <h1 className="text-4xl font-extrabold">Hi, I&lsquo;m Matt</h1>
                    <h3 className="text-xl font-bold">
                        I am a <code className="font-mono">[software, ocean]</code> engineer from Rhode Island who enjoys surfing, walking my dog,
                        and grilling pizzas
                    </h3>
                    <div className="flex flex-row space-x-4 py-4">
                        <TextLink title='Contact' target='mailto:mpiannucci@gmail.com' />
                        <TextLink title='Resume' target='/MatthewIannucciResume.pdf' />
                        <TextLink title='Github' target='https://github.com/mpiannucci' />
                        <TextLink title='LinkedIn' target='https://www.linkedin.com/in/matthew-iannucci-64a8847a' />
                    </div>
                </div>
            </div>
            <div id="portfolio" className="py-4">
                <div id="apps" className="py-4">
                    <h2 className="text-3xl font-extrabold">Apps</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <AppInfo
                            name="HopeWaves"
                            tagline="A local surf forecasting service and app for Rhode Island"
                            //description="This automated surf forecast service pulls in data from NOAA's Wave Watch III wave model and generates a custom surf forecast for the Rhode Island coastline. It also packages local beach cameras, buoy data, tide forecasts, and weather information into a easily digestible and modern interface."
                            icon="https://hopewaves.app/images/icon.png"
                            links={[
                                { title: 'iOS', target: 'https://geo.itunes.apple.com/us/app/hackwinds/id945847570?mt=8' },
                                { title: 'Android', target: 'https://play.google.com/store/apps/details?id=com.nucc.hackwinds&hl=en&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1' },
                                { title: 'Web', target: 'https://hopewaves.app' },
                            ]}
                        />
                        <AppInfo
                            name="playbuoy"
                            tagline="Visualize directional wave data for NOAA buoys"
                            icon="/playbuoy-ios-icon-blue-background.png"
                            links={[
                                { title: 'Launch', target: 'https://playbuoy.app' }
                            ]}
                        />
                        <AppInfo
                            name="GoValet - Valet on the Go"
                            tagline="A cloud based mobile Valet service and app"
                            // description="Running in Google Cloud with Firebase, GoValet is a modern Valet solution enabling digital payments, customer notifications, digital ticket management, and more. Written in Flutter, the cross platform mobile app serves as a control conter for Valet companies and an easy to use payment solution for valet customers. Customers without the app can request their vehicles and pay online without needing to download the app. It is currently used in production for various companies throughout Rhode Island."
                            icon="https://govalet-backend.appspot.com/static/images/GoValet.png"
                            links={[
                                { title: 'Learn More', target: 'https://www.govaletapp.com/' }
                            ]}
                        />
                    </div>
                </div>
                <div id="open-source" className="py-4">
                    <h2 className="text-3xl font-extrabold">Open Source</h2>
                    <div className="flex flex-row flex-wrap">
                        <AppInfo
                            name="SurfPy"
                            tagline="A Python library containing math and utilities for generating surf forecasts and monitoring surf conditions."
                            //The backbone of HopeWaves, this python library is a suite of tools for creating surf forecasting applications. There are tools for downloading buoy data, tide data, wave model data, and more."
                            links={[
                                { title: 'View on GitHub', target: 'https://github.com/mpiannucci/surfpy' }
                            ]}
                        />
                        <AppInfo
                            name="React Native Context Menu View"
                            tagline="Use native context menu functionality from React Native."
                            links={[
                                { title: 'View on npm', target: 'https://www.npmjs.com/package/react-native-context-menu-view' },
                                { title: 'View on GitHub', target: 'https://github.com/mpiannucci/react-native-context-menu-view' }
                            ]}
                        />
                        <AppInfo
                            name="Gribberish"
                            description="Read GRIB2 files with Rust."
                            links={[
                                { title: 'View on GitHub', target: 'https://github.com/mpiannucci/gribberish' }
                            ]}
                        />
                        <AppInfo
                            name="Xpublish WMS"
                            description="WMS router plugin for xpublish"
                            links={[
                                { title: 'View on GitHub', target: 'https://github.com/xpublish-community/xpublish-wms' }
                            ]}
                        />
                        <AppInfo
                            name="Gnome Shell Extended Gestures"
                            tagline="A Gnome extension to customize and control multitouch trackpad gestures"
                            links={[
                                { title: 'Download for Gnome', target: 'https://extensions.gnome.org/extension/1253/extended-gestures/' },
                                { title: 'View on GitHub', target: 'https://github.com/mpiannucci/gnome-shell-extended-gestures' }
                            ]}
                        />
                        <AppInfo
                            name="readap"
                            description="Read OpenDAP binary data with Rust"
                            links={[
                                { title: 'View on GitHub', target: 'https://github.com/mpiannucci/readap' }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
