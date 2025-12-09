export default function SearchBar({ setSearch }) {
    return (
        <input 
            onChange={event => setSearch(event.target.value)}
            placeholder="Search recipes..."
        />
    )
}