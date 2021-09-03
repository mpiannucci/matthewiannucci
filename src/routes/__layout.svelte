<script>
	import '../tailwind.css';
</script>

<nav>
	<div class='max-w-5xl mx-auto'>
		<a class='font-bold text-2xl mr-2 hover:text-blue-500' href='/'>Matthew Iannucci</a>
		<a class='text-xl hover:text-blue-500 mx-2' href='/apps'>Apps</a>
		<a class='text-xl hover:text-blue-500 mx-2' href='/photos'>Photos</a>
	</div>
</nav>

<div class='max-w-5xl mx-auto my-2'>
	<slot />
</div>
