<script>
	export let name;
	export let tagline;
	export let description;
	export let icon;
	export let url;
	export let tags;
</script>

<div class="flex flex-col items-center py-4 space-y-2">
	<a href={url}>
		<div class="flex flex-col items-center">
			<img class="object-contain h-24 w-24 rounded-full" src={icon} alt={name} />
			<h4 class="text-xl font-bold">{name}</h4>
			<h6 class="text-lg">{tagline}</h6>
		</div>
	</a>
	<p>{description}</p>
	<div class="flex flex-row flex-wrap space-x-2">
		{#each tags as tag}
			<div class="rounded-full bg-blue-600 text-white p-2 my-1">
				{tag}
			</div>
		{/each}
	</div>
</div>
