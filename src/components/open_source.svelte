<script>
    import Tag from './tag.svelte';
    
    export let name; 
    export let description;
    export let url;
    export let tags;
</script>

<div class="flex flex-col items-center py-4 space-y-2">
    <a href={url}>
        <div class="flex flex-col items-center">
            <h4 class="text-xl font-bold">{name}</h4>
            <h6 class="text-lg">{url}</h6>
        </div>
    </a>
	<p>{description}</p>
	<div class="flex flex-row flex-wrap space-x-2">
		{#each tags as tag}
			<Tag tag={tag} />
		{/each}
	</div>
</div>