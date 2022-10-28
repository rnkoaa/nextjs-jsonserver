
interface Post {
	userId: number,
	id: number,
	title: string,
	body: string
}

const getPosts = async () => {
	const postRes = await fetch("https://jsonplaceholder.typicode.com/posts")
	
	const result = (await postRes.json()) as Post[];
	// const s = postRes.json() as Post[]

	// return postRes.json() as Post[]
	// return postRes as Post[]
	
	return result
}

export default async function Posts() {

	const posts = await getPosts()

	return (
		<>
		{
			posts.map((p) => {
				<div key={p.id}>{p.title}</div>
			})
		}
		
		</>

	)
	
}