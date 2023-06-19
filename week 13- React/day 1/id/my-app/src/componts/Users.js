const Users = (props) => {
    const {name,email,username,id} = props.info
return (
    <div >
<h2>{name}</h2>
<h4>{ email}</h4>
<P>{username}</P>
        
    </div>
)
}
export default Users