<script>
	export let allPosts;
	let searchQuery = '';
	let results = allPosts;
	function search() {
		results = allPosts.filter((post) => {
			return post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase());
		});
		console.log(results);
	}
	
	function tagString(tags) {
		let tagString;
		for (let i = 0; i < tags.length; i++) {
		if (i === 0) {
			tagString = '#' + tags[i];
		} else {
			tagString = tagString + " " + '#' + tags[i];
		}
		}
		return tagString;
	}
</script>

<div class="pt-5"></div>

<div class="flex flex-row">
	<p class="pr-3">Search:</p>
	<input bind:value={searchQuery} on:input={search} class="bg-base outline outline-2 outline-accent text-text font-mono min-w-full h-11 pl-2">
</div>

{#each results as post}
	<div class="border-b-2 border-accent pt-5">
		<h2 class="pb-2"><a href={post.frontmatter.link} class="text-text">{post.frontmatter.title}</a></h2>
		<div class="flex flex-row justify-start pb-3">
			<p>{post.frontmatter.date} ::</p>
			<p class="pl-1">{post.frontmatter.author}</p>
		</div>
		<p class="text-overlay2 pb-5"> {tagString(post.frontmatter.tags)}</p>
		<p class="pb-5">{post.frontmatter.description}</p>
	</div>
{/each}