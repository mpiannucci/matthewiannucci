<script>
	import OpenSource from '../components/open_source.svelte';
	import App from '../components/app.svelte';
</script>

<div class="md:container mx-auto my-2 px-4">
	<nav>
		<div class="">
			<a class="font-bold sm:text-xl md:text-2xl mr-2 hover:text-blue-500" href="/"
				>Matthew Iannucci</a
			>
			<a class="sm:text-sm md:text-xl hover:text-blue-500 mx-2" href="/#portfolio">Portfolio</a>
			<!-- <a class="sm:text-sm md:text-xl hover:text-blue-500 mx-2" href="/#photos">Photos</a> -->
		</div>
	</nav>
	<div class="">
		<div id="header" class="flex flex-row flex-wrap py-4">
			<img
				class="object-cover h-48 w-48 rounded-full sm:self-center"
				src="/surfing_portrait_2020.jpg"
				alt="Portait of myself paddling"
			/>
			<div class="sm:px-4 sm:py-4 max-w-md min-w-sm self-center">
				<h1 class="text-4xl font-extrabold">Hi, I'm Matt</h1>
				<h3 class="text-xl font-bold">
					I am a <code class="font-mono">[software, ocean]</code> engineer from Rhode Island who enjoys surfing, my dog,
					and grilling pizzas
				</h3>
				<div class="flex flex-row space-x-4 py-2">
					<a href="mailto:mpiannucci@gmail.com" class="hover:text-blue-500">Contact</a>
					<a href="/MatthewIannucciResume.pdf" class="hover:text-blue-500">Resume</a>
					<a href="https://github.com/mpiannucci" class="hover:text-blue-500">GitHub</a>
					<a href="https://www.linkedin.com/in/matthew-iannucci-64a8847a" class="hover:text-blue-500">LinkedIn</a>
				</div>
			</div>
		</div>
		<div id="portfolio" class="py-4">
			<div id="apps" class="py-4">
				<h2 class="text-3xl font-extrabold">Apps</h2>
				<div class="flex flex-row flex-wrap">
					<App
						name="HopeWaves"
						tagline="A local surf forecasting service and app for Rhode Island"
						description="This automated surf forecast service pulls in data from NOAA's Wave Watch III wave model and generates a custom surf forecast for the Rhode Island coastline. It also packages local beach cameras, buoy data, tide forecasts, and weather information into a easily digestible and modern interface."
						icon="https://hopewaves.app/images/icon.png"
						url="https://hopewaves.app"
						tags={[
							'python',
							'javascript',
							'react',
							'react-native',
							'ios',
							'android',
							'web',
							'oceanography',
							'wx'
						]}
					/>
					<App
						name="GoValet - Valet on the Go"
						tagline="A cloud based mobile Valet service and app"
						description="Running in Google Cloud with Firebase, GoValet is a modern Valet solution enabling digital payments, customer notifications, digital ticket management, and more. Written in Flutter, the cross platform mobile app serves as a control conter for Valet companies and an easy to use payment solution for valet customers. Customers without the app can request their vehicles and pay online without needing to download the app. It is currently used in production for various companies throughout Rhode Island."
						icon="https://govalet-backend.appspot.com/static/images/GoValet.png"
						url="https://www.govaletapp.com/"
						tags={[
							'typescript',
							'python',
							'react',
							'flutter',
							'dart',
							'firestore',
							'twilio',
							'stripe',
							'ios',
							'android',
							'web',
							'saas'
						]}
					/>
				</div>
			</div>
			<div id="open-source" class="py-4">
				<h2 class="text-3xl font-extrabold">Open Source</h2>
				<div class="flex flex-row flex-wrap">
					<OpenSource
						name="SurfPy"
						description="A Python library containing math and utilities for generating surf forecasts and monitoring surf conditions
							The backbone of HopeWaves, this python library is a suite of tools for creating surf forecasting applications. There are tools for downloading buoy data, tide data, wave model data, and more."
						url="https://github.com/mpiannucci/surfpy"
						tags={['python', 'oceanography', 'wx']}
					/>
					<OpenSource
						name="Gnome Shell Extended Gestures"
						description="By default, GNOME uses libinput to detect touchpad gestures as they are performed by the user. However, it is still fresh and the only gesture detected and acted on out of the box is four finger vertical swipes. When it sees this gesture, it switches workspaces for the user, much like macOS is famous for doing by default. I recently found libinput-gestures which allows you configure other gestures seen by libinput. There are some quirks though and I thought I could make something that works more integrated with GNOME. So I made this extension which lets you enable and configure other gestures such as three finger swipes."
						url="https://github.com/mpiannucci/gnome-shell-extended-gestures"
						tags={['javascript', 'linux', 'gnome', 'hardware', 'input']}
					/>
					<OpenSource
						name="React Native Context Menu View"
						description="Use native context menu functionality from React Native. On iOS this library allows for using the native long press context menu functionality. On Android, it creates a dropdown menu for long press context functionality."
						url="https://github.com/mpiannucci/react-native-context-menu-view"
						tags={['javascript', 'react-native', 'react', 'ios', 'android', 'objective-c', 'java']}
					/>
					<OpenSource
						name="Gribberish"
						description="Parse GRIB2 files with Rust. Traditionally GRIB files are used by Weather modelling programs to efficiently store and transfer data. However, the only widely used parsers for these systems are written with C and C++ and require a long stack of dependencies that can be hard to wrangle outside of Linux systems."
						url="https://github.com/mpiannucci/gribberish"
						tags={['rust', 'c', 'compression', 'io', 'oceanography', 'wx']}
					/>
					<OpenSource
						name="Mini Maestro"
						description="This python library operates over usb serial interface and sends the commands supported by the documentation. This library was used by the University of Rhode Island Department of Ocean Engineering in autonomous vehicle operations."
						url="https://github.com/mpiannucci/MiniMaestro"
						tags={['python', 'hardware', 'i2c', 'engineering']}
					/>
				</div>
			</div>
		</div>
		<div id="footer" class="max-auto flex justify-center">
			<p class="text-xs align-middle">Copyright 2022 Matthew Iannucci</p>
		</div>
	</div>
</div>
