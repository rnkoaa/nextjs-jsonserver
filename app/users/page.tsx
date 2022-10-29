import { use } from "react"

const getUsers = async () => {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users")
		return res.json()
	} catch (error) {
		console.log(error)
	}
	return []
}


const Page = () => {
	const users = use(getUsers())
	return (
		<div>
			{
				users.map((u) => (
					<div key={u.id}>{u.name}</div>
				))
			}
		</div>
	)
}

export default Page