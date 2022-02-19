<script>
	import App from '../components/app.svelte';
</script>

<div class="max-w-5xl 2xl:mx-auto mx-4 my-2">
	<nav>
		<div class="max-w-2xl">
			<a class="font-bold sm:text-xl md:text-2xl mr-2 hover:text-blue-500" href="/"
				>Matthew Iannucci</a
			>
			<a class="sm:text-sm md:text-xl hover:text-blue-500 mx-2" href="/#portfolio">Portfolio</a>
			<a class="sm:text-sm md:text-xl hover:text-blue-500 mx-2" href="/#photos">Photos</a>
		</div>
	</nav>
	<div class="max-w-2xl">
		<div id="header" class="flex flex-row flex-wrap py-4">
			<img
				class="object-cover h-48 w-48 rounded-full sm:self-center"
				src="/surfing_portrait_2020.jpg"
				alt="Portait of myself paddling"
			/>
			<div class="sm:px-4 sm:py-4 max-w-md min-w-sm self-center">
				<h1 class="text-4xl font-extrabold">Hi, I'm Matt</h1>

				<h3 class="text-xl font-bold">
					I am a <code>[software, ocean]</code> engineer from Rhode Island who enjoys surfing, my dog,
					and grilling pizzas
				</h3>
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
						tags={['python', 'javascript', 'react', 'react-native', 'ios', 'android', 'web', 'oceanography', 'wx']}
					/>
					<App
						name="GoValet - Valet on the Go"
						tagline="A cloud based mobile Valet service and app"
						description="Running in Google Cloud with Firebase, GoValet is a modern Valet solution enabling digital payments, customer notifications, digital ticket management, and more. Written in Flutter, the cross platform mobile app serves as a control conter for Valet companies and an easy to use payment solution for valet customers. Customers without the app can request their vehicles and pay online without needing to download the app. It is currently used in production for various companies throughout Rhode Island."
						icon="https://govalet-backend.appspot.com/static/images/GoValet.png"
						url="https://www.govaletapp.com/"
						tags={['typescript', 'python', 'react', 'flutter', 'dart', 'firestore', 'twilio', 'stripe', 'ios', 'android', 'web', 'saas']}
					/>
				</div>
			</div>
			<div id="open-source" class="py-4">
				<h2 class="text-3xl font-extrabold">Open Source</h2>
			</div>
		</div>
		<div id="photos" class="" />
	</div>
</div>
